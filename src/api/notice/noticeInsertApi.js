import axios from "axios";
import { Notice } from "../api";
import { useUserInfo } from "../../stores/userInfo";

export const noticeInsertApi = async() => {    
    const textData = {
        title: detailValue.title,        
        context: detailValue.content,
        loginId: useUserInfo.loginId,
    };
    await axios.post(Notice.NoticeInsert, textData);

}