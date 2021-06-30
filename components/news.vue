<template>
    <div>
        <h2 class="mt-12 mb-8 text-center font-weight-bold">news story</h2>
        <v-row class="ma-1 justify-center">
            <v-col v-for="item in news" :key="item.topic" :cols="item.cols">
                <template v-if="item.cols !='auto'">
                    <v-img
                        height="150"
                        class="photo"
                        v-bind:src="item.srcimg"
                    ></v-img>
                    <v-card class="upcard" height="15vh">
                        <v-card-text class="black--text pt-1 firstNews font-weight-light">
                            <p class="newstopic">{{item.topic}}</p>
                            <p class="mt-3">
                                {{ item.contents }}
                            </p>
                        </v-card-text>
                    </v-card>
                </template>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data(){
        return {
            news:[
                {
                    srcimg:require('@/assets/images/benkyokai.jpg'),
                    topic:"勉強会",
                    contents:"4/28(水)勉強会開催しました",
                    cols:6,
                },
                {
                    srcimg:require('@/assets/images/benkyokai.jpg'),
                    topic:"シス研ハッカソン",
                    contents:"3/15~3/19の5日間でシス研ハッカソン開催しました",
                    cols:3,
                },
                {                  
                    cols:'auto',
                },
                {
                    srcimg:require('@/assets/images/takopa.jpg'),
                    topic:"タコパ",
                    contents:"11/6(土)梶研究室を借りて院生と学部生が仲良くタコパしました",
                    cols:3,
                },
                {
                    srcimg:require('@/assets/images/ekiden.jpg'),
                    topic:"駅伝",
                    contents:"12/4(土)駅伝大会参加しました。つらい...帰りたい",
                    cols:3,
                },
                {
                    srcimg:require('@/assets/images/benkyokai.jpg'),
                    topic:"たこ",
                    contents:"This is a tako",
                    cols:3,
                },
            ],
            image_src: "@/assets/images/benkyokai.jpg"
        }
    }
}
</script>

<style scoped>
.photo:hover{
    filter: opacity(70%);
    cursor: pointer;
}
.black--text{
    overflow-y: scroll !important;
}
.jasty{
    display: flex;
    margin: auto;
    justify-content: center;
}
.col-auto{
    visibility: hidden;
}
</style>