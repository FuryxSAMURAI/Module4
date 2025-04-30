<template>
  <div class="container__header">
    <div class="container__header-logo">
      <nuxt-link to="/">STORE</nuxt-link>
    </div>
    <nav>
      <ul>
        <li><nuxt-link to="admin">ADMIN</nuxt-link></li>
      </ul>
    </nav>
    <select @change="$i18n.setLocale($event.target.value)">
      <option value="ua">🇺🇦 Українська</option>
      <option value="en">🇬🇧 English</option>
    </select>
  </div>
</template>
