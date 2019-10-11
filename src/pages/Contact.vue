<template>
  <div>
    <div class="page-header clear-filter" filter-color="blue">
      <parallax class="page-header-image" style="background-image:url('img/bg2.jpg')"></parallax>
      <div class="container">
        <h3 class="title">{{$t('contactUs')}}</h3>
        <p class="category"></p>
        <div class="content"></div>
      </div>
    </div>
    <div class="section pt-0 mx-5">
      <div class="container d-flex justify-content-center">
        <div class="row service my-5 mx-auto text-center">
          <div class="contact-info__vcard vcard">
            <h4 class="fn org">ROMERO NIEBLAS & ASOCIADOS S.C.</h4>
            <p>
              <font-awesome-icon icon="globe-americas" class="mx-2" />
              <a class="adr js-anchor">
                <span class="locality">Puerto Peñasco, Sonora.</span>,&nbsp;
                <span class="country-name">México</span>.&nbsp;
              </a>
            </p>
            <p>
              <font-awesome-icon icon="map-marker-alt" class="mx-2" />
              <a class="adr js-anchor">
                <span class="address">Av Coahuila 444 Interior C1, Benito Juárez, 83554</span>
              </a>
            </p>
            <p>
              <font-awesome-icon icon="envelope" class="mx-2" />
              <a class="email" href="mailto:info@rnyasociados.com">info@rnyasociados.com.mx</a>
            </p>
            <p>
              <font-awesome-icon icon="phone" class="mx-2" />
              <a class="email" href="tel:+526862515071">638-383-6320</a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <GmapMap
      :center="{lat: 31.3065539,lng:-113.539491 }"
      :zoom="16"
      map-type-id="terrain"
      style="width: 100%; height: 500px"
    >
      <GmapMarker
        :position="{lat: 31.3065539,lng:-113.539491 }"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </GmapMap>
  </div>
</template>
<script>
import { FormGroupInput, Button } from "@/components";
export default {
  data() {
    return {
      form: {
        firstName: "",
        email: "",
        message: ""
      }
    };
  },
  name: "contact",
  bodyClass: "contact-page",
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  }
};
</script>
<style>
.contact-page .page-header {
  min-height: 350px !important;
}
.contact-title {
  font-weight: 400;
  font-size: 18px;
}
.social-networks-title {
  font-weight: 400;
  font-size: 18px;
}
</style>
