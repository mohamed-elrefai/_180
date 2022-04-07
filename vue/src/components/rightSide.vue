<template>
<div class="lg:w-3/12 w-full mt-8 lg:mt-0">
                <!-- Social plugin -->
                <div class="w-full bg-slate-800 shadow-sm rounded-sm p-4 ">
                    <h3 class="text-xl font-semibold text-gray-700 mb-3 font-roboto">Social Plugin</h3>
                    <div class="flex gap-2">
                        <a href="#"
                            class="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#"
                            class="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#"
                            class="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#"
                            class="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                            <i class="fab fa-pinterest-p"></i>
                        </a>
                        <a href="#"
                            class="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
                <!-- Popular posts -->
                <div class="w-full mt-8 bg-slate-800 shadow-sm rounded-sm p-4 ">
                    <h3 class="text-xl font-semibold text-gray-700 mb-3 font-roboto">Popular Posts</h3>
                    <div class="space-y-4">
                        <a href="#" class="flex group">
                            <div class="flex-shrink-0">
                                <img src="src/images/img-5.jpg" class="h-14 w-20 lg:w-14 xl:w-20 rounded object-cover">
                            </div>
                            <div class="flex-grow pl-3">
                                <h5
                                    class="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                                    Team Bitbose geared up to attend Blockchain
                                </h5>
                                <div class="flex text-gray-400 text-sm items-center">
                                    <span class="mr-1 text-xs"><i class="far fa-clock"></i></span>
                                    June 11, 2021
                                </div>
                            </div>
                        </a>
                        <a href="#" class="flex group">
                            <div class="flex-shrink-0">
                                <img src="src/images/img-9.jpg" class="h-14 w-20 lg:w-14 xl:w-20 rounded object-cover">
                            </div>
                            <div class="flex-grow pl-3">
                                <h5
                                    class="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                                    After a Caribbean Hurricane, the Battle
                                </h5>
                                <div class="flex text-gray-400 text-sm items-center">
                                    <span class="mr-1 text-xs"><i class="far fa-clock"></i></span>
                                    March 27, 2021
                                </div>
                            </div>
                        </a>
                        <a href="#" class="flex group">
                            <div class="flex-shrink-0">
                                <img src="src/images/img-8.jpg" class="h-14 w-20 lg:w-14 xl:w-20 rounded object-cover">
                            </div>
                            <div class="flex-grow pl-3">
                                <h5
                                    class="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                                    California sheriff’s deputy shot during ‘ambush’
                                </h5>
                                <div class="flex text-gray-400 text-sm items-center">
                                    <span class="mr-1 text-xs"><i class="far fa-clock"></i></span>
                                    Aprile 17, 2021
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <!-- tag -->
                <!-- categories -->
                <div class="w-full bg-slate-800 shadow-sm rounded-sm p-4  mt-8">
                    <h3 class="text-xl font-semibold text-gray-700 mb-3 font-roboto">Tags</h3>
                    <div class="flex items-center flex-wrap gap-2">
                        <router-link  to="# " class="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">Beauti</router-link>
                        <router-link  to="# " class="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">Sports</router-link>
                        <router-link  to="# " class="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">Business</router-link>
                        <router-link  to="# " class="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">Politics</router-link>
                        <router-link  to="# " class="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">Computer</router-link>
                        <router-link  to="# " class="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">Coding</router-link>
                    </div>
                </div>
            </div>
</template>

<script>
// @ is an alias to /src
export default {
    name: 'Right',

}
</script>