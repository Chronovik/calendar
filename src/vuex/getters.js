export const isModalShow = (state) => state.modal.show;
export const events = state => state.events;
export const getModalData = state => state.modal.data;
export const getDateModal = state => state.modal.data.date;
export const getEventModal = state => state.modal.data.eventName;
export const getNamesModal = state => state.modal.data.names;
export const getDescriptionModal = state => state.modal.data.description;
