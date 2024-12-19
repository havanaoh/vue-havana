import axios from "axios";
import { Notice } from "../api";

export const noticeDeleteApi = async(idx) => {    
    await axios.post(Notice.NoticeDelete, {noticeSeq : idx});
}