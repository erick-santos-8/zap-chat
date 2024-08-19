import {create} from "zustand";

const useConversation = create((set) => ({
    //declaração e valor
    selectedConversation: null,
    //setSelectedConversation recebe selectedConversation e muda seu valor
    setSelectedConversation: (selectedConversation) => set({selectedConversation}),
    
    messages: [],
    setMessages: (messages) => set({messages}),
}));

export default useConversation;