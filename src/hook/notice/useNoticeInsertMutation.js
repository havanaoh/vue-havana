import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { useRouter } from "vue-router";
import { noticeInsertApi } from "../../api/notice/noticeInsertApi";

export const useNoticeInserMutation = () =>{
    const queryClient = useQueryClient();
    const router = useRouter();
    return useMutation({
        mutationFn:() => noticeInsertApi(),        
        mutationKey: ['noticeInsert'],
        onSuccess:() => {  
            router.go(-1);
            queryClient.invalidateQueries({
            queryKey: ['noticeInsert'],        
            });
        },
    });
};