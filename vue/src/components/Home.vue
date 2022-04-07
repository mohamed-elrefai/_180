<template>
     <div class="xl:w-6/12 lg:w-9/12 w-full  xl:ml-6 lg:mr-6">

                <!-- title -->
                <div class="flex bg-slate-800 px-3 py-2 justify-between items-center rounded-lg mb-5">
                    <h5 class="text-base text-white uppercase font-semibold font-roboto">BUSINESS</h5>
                    <a href="#"
                        class="text-white py-1 px-3 rounded-sm uppercase text-sm bg-slate-500 border border-slate-500 hover:text-blue-500 hover:bg-transparent transition"
                        v-if="user">
                        {{user.username}}
                    </a>
                </div>

                <!-- big post -->
                <div class="rounded-sm overflow-hidden bg-slate-800 shadow-sm">
                    <a href="view.html" class="block rounded-lg overflow-hidden">
                        <img src="src/images/img-12.jpg"
                            class="w-full h-96 object-cover transform hover:scale-110 transition duration-500">
                    </a>
                    <div class="p-4 pb-5">
                        <a href="view.html">
                            <h2
                                class="block text-2xl font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iddo loremque, totam
                                architecto odit pariatur Lorem ips dolor.
                            </h2>
                        </a>

                        <p class="text-gray-500 text-sm mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem distinctio doloremque
                            placeat ipsa! Sequi, recusandae. In numquam similique molestiae error, magni velit suscipit
                            repudiandae itaqu....
                        </p>
                        <div class="mt-3 flex space-x-4">
                            <div class="flex text-gray-400 text-sm items-center">
                                <span class="mr-2 text-xs">
                                    <i class="far fa-user"></i>
                                </span>
                                Blogging Tips
                            </div>
                            <div class="flex text-gray-400 text-sm items-center">
                                <span class="mr-2 text-xs">
                                    <i class="far fa-clock"></i>
                                </span>
                                June 11, 2021
                            </div>
                        </div>
                    </div>
                </div>

                <!-- regular post -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div class="rounded-lg bg-slate-800 p-4 pb-5 shadow-sm">
                        <a href="#" class="block rounded-md overflow-hidden">
                            <img src="src/images/img-7.jpg"
                                class="w-full h-60 object-cover transform hover:scale-110 transition duration-500">
                        </a>
                        <div class="mt-3">
                            <a href="#">
                                <h2
                                    class="block text-xl font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                                    Lorem, ipsum dolor sit amet consec tetur adipisicing elit.
                                </h2>
                            </a>
                            <div class="mt-2 flex space-x-3">
                                <div class="flex text-gray-400 text-sm items-center">
                                    <span class="mr-2 text-xs">
                                        <i class="far fa-user"></i>
                                    </span>
                                    Blogging Tips
                                </div>
                                <div class="flex text-gray-400 text-sm items-center">
                                    <span class="mr-2 text-xs">
                                        <i class="far fa-clock"></i>
                                    </span>
                                    June 11, 2021
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="rounded-lg bg-slate-800 p-4 pb-5 shadow-sm">
                        <a href="#" class="block rounded-md overflow-hidden">
                            <img src="src/images/img-6.jpg"
                                class="w-full h-60 object-cover transform hover:scale-110 transition duration-500">
                        </a>
                        <div class="mt-3">
                            <a href="#">
                                <h2
                                    class="block text-xl font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                                    Lorem, ipsum dolor sit amet consec tetur adipisicing elit.
                                </h2>
                            </a>
                            <div class="mt-2 flex space-x-3">
                                <div class="flex text-gray-400 text-sm items-center">
                                    <span class="mr-2 text-xs">
                                        <i class="far fa-user"></i>
                                    </span>
                                    Blogging Tips
                                </div>
                                <div class="flex text-gray-400 text-sm items-center">
                                    <span class="mr-2 text-xs">
                                        <i class="far fa-clock"></i>
                                    </span>
                                    June 11, 2021
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="rounded-lg bg-slate-800 p-4 pb-5 shadow-sm">
                        <a href="#" class="block rounded-md overflow-hidden">
                            <img src="src/images/img-5.jpg"
                                class="w-full h-60 object-cover transform hover:scale-110 transition duration-500">
                        </a>
                        <div class="mt-3">
                            <a href="#">
                                <h2
                                    class="block text-xl font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                                    Lorem, ipsum dolor sit amet consec tetur adipisicing elit.
                                </h2>
                            </a>
                            <div class="mt-2 flex space-x-3">
                                <div class="flex text-gray-400 text-sm items-center">
                                    <span class="mr-2 text-xs">
                                        <i class="far fa-user"></i>
                                    </span>
                                    Blogging Tips
                                </div>
                                <div class="flex text-gray-400 text-sm items-center">
                                    <span class="mr-2 text-xs">
                                        <i class="far fa-clock"></i>
                                    </span>
                                    June 11, 2021
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="rounded-lg bg-slate-800 p-4 pb-5 shadow-sm">
                        <a href="#" class="block rounded-md overflow-hidden">
                            <img src="src/images/img-11.jpg"
                                class="w-full h-60 object-cover transform hover:scale-110 transition duration-500">
                        </a>
                        <div class="mt-3">
                            <a href="#">
                                <h2
                                    class="block text-xl font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                                    Lorem, ipsum dolor sit amet consec tetur adipisicing elit.
                                </h2>
                            </a>
                            <div class="mt-2 flex space-x-3">
                                <div class="flex text-gray-400 text-sm items-center">
                                    <span class="mr-2 text-xs">
                                        <i class="far fa-user"></i>
                                    </span>
                                    Blogging Tips
                                </div>
                                <div class="flex text-gray-400 text-sm items-center">
                                    <span class="mr-2 text-xs">
                                        <i class="far fa-clock"></i>
                                    </span>
                                    June 11, 2021
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios"
export default {
    name: 'Homes',

    data(){
        return{
            user: null
        }
    },
    async created() {
        const res = await axios.get('/Api/Get', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        this.user = res.data;
    },
}
</script>