<template>
    <div class="divNoticeList">
        현재 페이지: {{ cPage }}, 총 개수: {{ noticeList?.noticeCnt }}
        <!-- <NoticeModal v-if="modalState.modalState" @postSuccess="searchList" 
        @modalClose="() => (noticeIdx=0)"
        :idx="noticeIdx"/>          -->
        <!-- <NoticeModal v-show="modalValue"/> -->
        <table>
            <colgroup>
                <col width="10%" />
                <col width="50%" />
                <col width="30%" />
                <col width="10%" />
            </colgroup>

            <thead>
                <tr>
                    <th scope="col">번호</th>
                    <th scope="col">제목</th>
                    <th scope="col">작성일</th>
                    <th scope="col">작성자</th>
                </tr>
            </thead>
            <tbody>
                <template v-if="isLoading">...로딩중</template>
                    <template v-if="isSuccess">
                    <template v-if="noticeList.noticeCnt > 0">
                        <tr 
                            v-for="notice in noticeList.notice" 
                            :key="notice.noticeIdx" 
                            @click="handlerDetail(notice.noticeIdx)">
                            <td>{{ notice.noticeIdx}} </td>
                            <td>{{ notice.title}}</td>
                            <td>{{ notice.createdDate.substr(0, 10) }}</td>
                            <td>{{ notice.author }}</td>
                        </tr>
                    </template>
                    <template v-else>
                        <tr>
                            <td colspan="7">일치하는 검색 결과가 없습니다</td>
                        </tr>
                    </template>
                    </template>                
            </tbody>
        </table>
        <Pagination 
            :totalItems="noticeList?.noticeCnt || 0"
            :items-per-page="5"
            :max-pages-shown="5"
            :onClick="searchList"
            v-model="cPage"
        />
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import Pagination from '../../../common/Pagination.vue';
import axios from "axios";
import { useModalStore } from '@/stores/modalState';
import { useQuery } from "@tanstack/vue-query";
import { useNoticelistSearchQuery } from "../../../../hook/notice/useNoticeListSearchQuery";

// const route = useRoute();
const router = useRouter();
// console.log(route);
// watch(route, () => console.log(route.query));
// const noticeList = ref();
// const noticeCount = ref(0);
const cPage = ref(1);
// const modalState = useModalStore();
// const noticeIdx = ref(0);

const injectedValue = inject('provideValue');

// watch(injectedValue, () => {
//     console.log(injectedValue.value);
// })

// const searchList = async () => {
//     const param = new URLSearchParams({
//         ...injectedValue.value,
//         currentPage: cPage.value,
//         pageSize:5
//     });        
//     const result = await axios.post('/api/board/noticeListJson.do', param);

//     return result.data;
// };

//호출되면 바로 사용해서 onMounted가 필요없음
const  { data: noticeList, 
         isLoading, refetch, isSuccess } 
    = useNoticelistSearchQuery(
    injectedValue, cPage    
    // staleTime: 1000 * 60,
    // refetchInterval: 1000
);

// queryKey: ['noticeList'],
// watch( [ injectedValue, cPage ], refetch );


const handlerDetail = (param) => {
  router.push({
    name: 'noticeDetail',
    params: { idx: param },
  });
};

</script>

<style lang="scss" scoped>
table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0px 0px 0px;
    font-size: 18px;
    text-align: left;

    th,
    td {
        padding: 8px;
        text-align: left;
        border-bottom: 1px solid #ddd;
        text-align: center;
    }

    th {
        background-color: #2676bf;
        color: #ddd;
    }

    /* 테이블 올렸을 때 */
    tbody tr:hover {
        background-color: #d3d3d3;
        opacity: 0.9;
        cursor: pointer;
    }
}
</style>
