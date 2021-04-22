import {fetchCommentItem, fetchList, fetchUserInfo} from "@/api";
export default {
    async FETCH_USER(context, userName) {
        try {
            const response = await fetchUserInfo(userName);
            console.log(response);
            context.commit('SET_USER', response.data)
            return response;
        } catch (error){
            console.log(error);
        }
    },
    async FETCH_ITEM(context, id) {
        try {
            const response = await fetchCommentItem(id);
            console.log(response);
            context.commit('SET_ITEM', response.data)
            return response;
        } catch (error){
            console.log(error);
        }
    },
    async FETCH_LIST(context, pageName) {
        try {
            const response = await fetchList(pageName);
            console.log(response);
            context.commit('SET_LIST', response.data)
            return response;
        } catch (error){
            console.log(error);
        }
    },
};