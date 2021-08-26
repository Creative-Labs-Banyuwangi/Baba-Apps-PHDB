<template>
  <div class="container">
    <img src="/img/gajah-oling.png" alt="" class="bg-logo" />
    <div class="text-center mb-3">
      <img
        src="/img/team.jpg"
        alt=""
        class="w-100 mx-auto"
        style="border-radius: 4px"
      />
    </div>
    <div class="pb-3 mt-3 pt-2">
      <div v-for="(data, i) in content" :key="i">
        <h6 class="font-weight-bold">{{ data.title }}</h6>
        <div class="card p-3 mt-2 mb-4">
          <p>
            {{ data.body }}
          </p>
        </div>
      </div>
      <h6 class="font-weight-bold">Anggota Tim :</h6>
      <div class="card p-3 mt-2 mb-4">
        <div
          class="d-flex justify-content-between"
          v-for="(data, i) in team"
          :key="i"
        >
          <span>{{ i + 1 }}. {{ data.name }}</span>
          <span>({{ data.nim }})</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  data: () => ({
    content: [
      {
        title: "Batik Smart Dryer",
        body: `Batik Smart Dryer merupakan inovasi pengering kain batik yang memiliki
          keunggulan dapat digunakan dalaam kondisi cuaca mendung atau hujan,
          kain batik akan tetap kering dalam suhu pengering yang dapat diatur
          menyesuaikan kebutuhan. Pengering batik ini didesain dalam konsep
          bilik atau lemari yang dilengkapi dengan lampu bohlam dan kipas untuk
          dapat memancarkan cahaya dan udara panas sebagai upaya pengeringan
          kain dalam waktu yang ingkat. Kemudian alat ini juga dapat
          dimonitoring melalui mobile yang memudahkan pengguna untuk melihat
          berapa suhu yang ada didalam Batik Smart Dryer. Selain itu ada
          beberapa fitur seperti monitoring daya listrik yang berfungsi agar
          pemilik usaha mengetahui berapa pemakaian listrik dan juga biaya
          selama penggunaan alat pengering tersebut.`,
      },
      {
        title: "Canting Elektrik",
        body: `Inovasi Canting Elektrik adalah modifikasi dari sebuah canting 
        tradisional dengan memberikan sentuhan teknologi yaitu elemen pemanas 
        yang menggunakan energi listrik. Dengan menggunakan teknologi ini 
        memungkinkan para pengrajin baik dapat mencairkan malam tanpa bantuan 
        kompor.`,
      },
    ],
    team: [
      {
        name: "Rizky Rahman Safitra",
        nim: "361955401026/2019",
      },
      {
        name: "Azizun Hakim",
        nim: "361855401076/2018",
      },
      {
        name: "Redho Gustiyantulus",
        nim: "361955401089/2019",
      },
      {
        name: "Richo Malvin",
        nim: "361955401063/2019",
      },
      {
        name: "Arief Ramadhan",
        nim: "361955401154/2019",
      },
      {
        name: "Muhammad Wildan A M",
        nim: "361955401008/2019",
      },
      {
        name: "Hilmi Bakhtiar",
        nim: "361955401153/2019",
      },
      {
        name: "Sadesty Rahmadhani",
        nim: "362055401028/2020",
      },
      {
        name: "Dava Ardiansyah",
        nim: "362055401096/2020",
      },
      {
        name: "Ferdian Firmansyah",
        nim: "362055401191/2020",
      },
    ],
  }),
};
</script>

<style scoped>
p {
  margin-bottom: 0;
}
.main-logo {
  height: 160px;
}
.v-card p {
  text-align: justify;
}
</style>