import { useMutation, useQueryClient } from "@tanstack/vue-query"
import { useRouter } from "vue-router";
import { noticeUpdateApi } from "../../api/notice/noticeUpdateApi";


export const useNoticeUpdateMutation = (detailValue, idx) =>{
    const queryClient = useQueryClient();
    const router = useRouter();
    return useMutation({
        mutationFn:() => noticeUpdateApi(detailValue.value, idx),        
        mutationKey: ['noticeUpdate'],
        onSuccess:() => {  
            router.go(-1);
            queryClient.invalidateQueries({
            queryKey: ['noticeUpdate'],        
            });
        },
    });
};