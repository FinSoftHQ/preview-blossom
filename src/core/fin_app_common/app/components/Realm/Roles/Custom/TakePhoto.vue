<template>
    <BSideNavPage>
      <UPageBody>    
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        </div>
        <UCard>
          <section class="py-8 bg-white dark:bg-gray-900">
            <div class="mx-auto max-w-screen-md text-center py-8">
              <svg class="mx-auto w-[100px] h-auto text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M16 18H8l2.5-6 2 4 1.5-2 2 4Zm-1-8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
                <path stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1ZM8 18h8l-2-4-1.5 2-2-4L8 18Zm7-8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
              </svg>
  
              <h1 class=" text-2xl font-bold tracking-tight leading-none text-gray-900 mt-4">
                อัพโหลดภาพถ่ายเจ้าภาพ</h1>
            </div>
            <div class="flex justify-center">
              <UButton to="/trainingcamp/home">อัพโหลดรูปภาพ</UButton>
            </div>
          </section>
        </UCard>
      </UPageBody>
    </BSideNavPage>
  </template>
  