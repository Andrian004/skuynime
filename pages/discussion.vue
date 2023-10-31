<template>
  <div class="container mx-auto mt-20">
    <form @submit.prevent="submit">
      <div class="mb-2">
        <label for="inputName">Name: </label>
        <input
          type="text"
          id="inputName"
          @change="(e) => (data.name = e.target.value)"
          placeholder="name"
        />
      </div>
      <div class="mb-2">
        <label for="inputCategory">Category: </label>
        <input
          type="text"
          id="inputCategory"
          @change="(e) => (data.category = e.target.value)"
          placeholder="category"
        />
      </div>
      <div class="mb-2">
        <label for="inputStock">Stock: </label>
        <input
          type="number"
          id="inputStock"
          @change="(e) => (data.stock = e.target.value)"
          placeholder="stock"
        />
      </div>
      <div class="mb-2">
        <label for="inputPrice">Price: </label>
        <input
          type="number"
          id="inputprice"
          @change="(e) => (data.price = e.target.value)"
          placeholder="price"
        />
      </div>
      <div class="mb-2">
        <label for="inputSold">Sold: </label>
        <input
          type="number"
          id="inputSold"
          @change="(e) => (data.sold = e.target.value)"
          placeholder="sold"
        />
      </div>
      <div class="mb-2">
        <label for="inputDetail">detail: </label>
        <input
          type="text"
          id="inputDetail"
          @change="(e) => (data.detail = e.target.value)"
          placeholder="detail"
        />
      </div>
      <button class="px-2 rounded bg-amber-500 text-white" type="submit">
        Submit
      </button>
    </form>

    <button
      class="my-2 px-2 rounded bg-amber-500 text-white"
      type="button"
      @click="getData"
    >
      GetData
    </button>

    <div>
      <p>result:</p>
      <p>{{ foo }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { foo, addFoo } = useFoo();

interface Data {
  name: string;
  category: string;
  imgUrl: string;
  stock: number;
  price: number;
  colors: object[];
  sold: number;
  detail: string;
}

const data: Data = {
  name: "",
  category: "",
  imgUrl: "...",
  stock: 0,
  price: 0,
  colors: [{ clr: "black" }],
  sold: 0,
  detail: "",
};

const submit = (): void => {
  // addFoo(path: string, method: string, body?: {})
  addFoo("api/v1/products", "POST", data);
};

const getData = (): void => {
  // addFoo(path: string, method: string, body?: {})
  addFoo("api/v1/products", "GET");
  console.log(foo);
};
</script>

<style></style>
