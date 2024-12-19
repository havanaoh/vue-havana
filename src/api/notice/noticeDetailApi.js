import axios from "axios";
import { Notice } from "../api";

export const noticeDetailApi = async(idx) => {
    const textData = {
        ...detailValue,
        noticeSeq: idx,
        context: detailValue.content,
    };
    await axios.post(Notice.NoticeDetail, textData);
}