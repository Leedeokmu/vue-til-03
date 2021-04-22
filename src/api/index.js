import axios from "axios";
// http request & response 관련 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0'
}
// api 함수들
function fetchNewsList() {
    return axios.get(`${config.baseUrl}/news/1.json`);
}
function fetchAsksList() {
    return axios.get(`${config.baseUrl}/ask/1.json`);
}
function fetchJobsList() {
    return axios.get(`${config.baseUrl}/jobs/1.json`);
}
function fetchUserInfo(username) {
    return axios.get(`${config.baseUrl}/user/${username}.json`);
}
function fetchCommentItem(itemId) {
    return axios.get(`${config.baseUrl}/item/${itemId}.json`);
}
function fetchList(pageName) {
    return axios.get(`${config.baseUrl}/${pageName}/1.json`);
}

export {fetchNewsList, fetchAsksList, fetchJobsList, fetchUserInfo, fetchCommentItem, fetchList};