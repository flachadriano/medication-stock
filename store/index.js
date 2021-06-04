import Vuex from "vuex";
import Cookie from "js-cookie";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedMedications: [],
      token: null
    },
    mutations: {
      setMedications(state, medications) {
        state.loadedMedications = medications;
      },
      addMedication(state, medication) {
        state.loadedMedications.push(medication);
      },
      editMedication(state, editedMedication) {
        const medicationIndex = state.loadedMedications.findIndex(
          medication => medication.id === editedMedication.id
        );
        state.loadedMedications[medicationIndex] = editedMedication;
      },
      setToken(state, token) {
        state.token = token;
      },
      clearToken(state) {
        state.token = null;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios
          .$get("/medications.json")
          .then(data => {
            const medicationsArray = [];
            for (const key in data) {
              medicationsArray.push({ ...data[key], id: key });
            }
            vuexContext.commit("setMedications", medicationsArray);
          })
          .catch(e => context.error(e));
      },
      addMedication(vuexContext, medication) {
        const createdMedication = {
          ...medication,
          updatedDate: new Date()
        };
        return this.$axios
          .$post(
            "https://challenge-philips-selecionar-default-rtdb.firebaseio.com/medications.json?auth=" +
              vuexContext.state.token,
            createdMedication
          )
          .then(data => {
            vuexContext.commit("addMedication", { ...createdMedication, id: data.name });
          })
          .catch(e => console.log(e));
      },
      editMedication(vuexContext, editedMedication) {
        return this.$axios
          .$put(
            "https://challenge-philips-selecionar-default-rtdb.firebaseio.com/medications/" +
              editedMedication.id +
              ".json?auth=" +
              vuexContext.state.token,
            editedMedication
          )
          .then(res => {
            vuexContext.commit("editMedication", editedMedication);
          })
          .catch(e => console.log(e));
      },
      setMedications(vuexContext, medications) {
        vuexContext.commit("setMedications", medications);
      },
      authenticateUser(vuexContext, authData) {
        let authUrl =
          "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" +
          process.env.fbAPIKey;
        if (!authData.isLogin) {
          authUrl =
            "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=" +
            process.env.fbAPIKey;
        }
        return this.$axios
          .$post(authUrl, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          })
          .then(result => {
            vuexContext.commit("setToken", result.idToken);
            localStorage.setItem("token", result.idToken);
            localStorage.setItem(
              "tokenExpiration",
              new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
            );
            Cookie.set("jwt", result.idToken);
            Cookie.set(
              "expirationDate",
              new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
            );
            return this.$axios.$post('http://localhost:3000/api/track-data', {data: 'Authenticated!'})
          })
          .catch(e => console.log(e));
      },
      initAuth(vuexContext, req) {
        let token;
        let expirationDate;
        if (req) {
          if (!req.headers.cookie) {
            return;
          }
          const jwtCookie = req.headers.cookie
            .split(";")
            .find(c => c.trim().startsWith("jwt="));
          if (!jwtCookie) {
            return;
          }
          token = jwtCookie.split("=")[1];
          expirationDate = req.headers.cookie
            .split(";")
            .find(c => c.trim().startsWith("expirationDate="))
            .split("=")[1];
        } else if (process.client) {
          token = localStorage.getItem("token");
          expirationDate = localStorage.getItem("tokenExpiration");
        }
        if (new Date().getTime() > +expirationDate || !token) {
          console.log("No token or invalid token");
          vuexContext.dispatch("logout");
          return;
        }
        vuexContext.commit("setToken", token);
      },
      logout(vuexContext) {
        vuexContext.commit("clearToken");
        Cookie.remove("jwt");
        Cookie.remove("expirationDate");
        if (process.client) {
          localStorage.removeItem("token");
          localStorage.removeItem("tokenExpiration");
        }
      }
    },
    getters: {
      loadedMedications(state) {
        return state.loadedMedications;
      },
      isAuthenticated(state) {
        return state.token != null;
      }
    }
  });
};

export default createStore;
