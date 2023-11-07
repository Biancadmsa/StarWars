const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			character: {},
			planets: [],
			planet: {},
			favorites: []
		},
		actions: {
			getCharacters: async ()=>{
				try {
					const response = await fetch('https://swapi.dev/api/people')
					const data = await response.json()
					console.log(data)
					setStore({
						characters: data.results
					})
				} catch (error) {
					console.log(error)
				}
			},
			getCharacterProfile: async (id)=>{
				try {
					const response = await fetch('https://swapi.dev/api/people/' + id)
					const data = await response.json()
					console.log(data)
					setStore({
						character: data
					})
				} catch (error) {
					console.log(error)
				}
			},
			getPlanets: async ()=>{
				try {
					const response = await fetch('https://swapi.dev/api/planets')
					const data = await response.json()
					console.log(data)
					setStore({
						planets: data.results
					})
				} catch (error) {
					console.log(error)
				}
			},

			getPlanetProfile: async (id)=>{
				try {
					const response = await fetch(`https://swapi.dev/api/planets/${id}`)
					const data = await response.json()
					console.log(data)
					setStore({
						planet: data
					})
				} catch (error) {
					console.log(error)
				}
			},

			addFavorite: (favorite) =>{
				const store = getStore()
				setStore({
					favorites: [...store.favorites, favorite]
				})
				console.log(store.favorites)
			},

			deleteFavorite: (favorite) => {
				const store = getStore()
				const newFavorites = store.favorites.filter(fav => fav !== favorite)
				setStore({
					favorites: newFavorites
				})
				console.log(store.favorites)
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
