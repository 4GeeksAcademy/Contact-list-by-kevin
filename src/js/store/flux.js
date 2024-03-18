const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			agenda: []
		},
		actions: {
			
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			//Mi GET//
			loadAgendaData: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/agenda_kevin")
					.then(response => response.json())
					.then(response => setStore({ agenda: response }))
			},

            //Mi POST//
			createdContact: (contact) => {
				fetch("https://playground.4geeks.com/apis/fake/contact", {
					method: "POST",
					body: JSON.stringify(contact),
					headers: {
						"content-type": "application/json",
					},
				})
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(error => ('Error fetching data:', error));
			},

			//Mi PUT//
			editContact: (contact) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/${contact.id}`, {
					method: "PUT",
					body: JSON.stringify(contact),
					headers: {
						"content-type": "application/json",
					},
				})
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(error => ('Error fetching data:', error));
			},

			//Mi DELETE//
			deleteContact: (id) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`,{
					method: "DELETE",
				})
				.then(response => response.json())
				.then(data => console.log(data))
				.catch(error => ('error fetching data:', error));
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
