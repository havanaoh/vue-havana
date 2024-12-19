import { useQuery } from "@tanstack/vue-query";
import { noticeDetailApi } from "../../api/notice/noticeDetailApi";

export const useNoticeDatailMutation = (idx) =>{
    console.log(idx);
    return useQuery({
        queryKey:['noticeDetail'],
        queryFn: ()=>noticeDetailApi({noticeSeq:idx}),        
    })
};