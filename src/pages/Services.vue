<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax class="page-header-image" style="background-image:url('img/bg5.jpg')"></parallax>
      <div class="container">
        <h3 class="title">{{$t('serviceTitle')}}</h3>
        <p class="category"></p>
        <div class="content"></div>
      </div>
    </div>
    <div class="section pt-1 service-container">
      <div class="service-container">
        <h3 class="service-subtitle title">{{$t('serviceSubtitle')}}</h3>

        <div class="row services-list">
          <div class="category d-flex mx-auto text-center my-2">{{$t('serviceDescription')}}</div>
          <div class="row mx-auto d-flex justify-content-center">
            <div
              class="col-md-6 text-center service my-5"
              v-for="service in services[this.$i18n.locale]"
              :key="service.title"
            >
              <font-awesome-icon v-bind:icon="service.icon" class="service-icon" />
              <div class="col-md-12 service-title" v-html="service.title"></div>
              <div class="col-md-12 description-text" v-html="service.description"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "services",
  bodyClass: "services-page",
  components: {
  },
  data() {
    return {
      services: {
        en: [
          {
            title: "Accounting",
            icon: "calculator",
            description:
              "The proper filing and processing of our clients’ operations, pursuant to NIFs (Mexican GAAP), enables the development of timely, quantitative, and qualitative information for decision making."
          },
          {
            title: "Auditing",
            icon: "clipboard-list",
            description:
              "For the confidence of Partners, Advisors, Directors, Administrators, Banks, and Creditors, as well as fiscal audits, we serve our clients through our Audit Area by providing value to ensure their financial information complies with NIFs as well as their obligations. Adequate financial information, and compliance with the diverse regulations to which our clients are subject, is the goal in helping to achieve the following, among other objectives: reliable information for partners and investor groups that is necessary to support decision making for business."
          },
          {
            title: "Consultancy",
            icon: "user-check",
            description:
              "We deliver confidence to our clients by providing guidance as to how to optimize their contributions and adequate judicial and asset protection for their shareholders, via one of the following services:<br/> <br/><ul class='text-left'><li>Consulting on optimization of tax and corporate obligations.</li><li>Stock disposal.</li><li>Capital movements.</li><li>Consulting and support in developing tax calculations and statements.</li><li>Consulting and assistance in auditing process on behalf of fiscal authorities.</li></ul>"
          },
          {
            title: "Return Procedures & Compensation on Contributions.",
            icon: "money-check-alt",
            description:
              "We provide added economic value to our clients by supporting them in recovering balances in their favor from contributions, whether through compensation and/or return."
          },
          {
            title: "Consulting and Tax Compliance.",
            icon: "tasks",
            description:
              " We offer our clients ample consulting services in tax matters meant to correctly comply with valid tax provisions."
          },
          {
            title: "Tax Planning.",
            icon: "calendar-check",
            description:
              "We offer our clients strategy and alternative designs that translate into optimizing their resources within valid legal frameworks."
          },
          {
            title: "Transfer Pricing (EPT).",
            icon: "money-bill-wave",
            description:
              "We offer clients development of the EPT with related national parties to ensure appropriate compliance with our tax provisions in the matter, which are also taken from transfer price guides issued by the OCDE."
          },
          {
            title: "Tax Litigation",
            icon: "gavel",
            description:
              "Via strategic alliances, we provide services in tax and corporate matters."
          }
        ],
        es: [
          {
            title: "Contabilidad",
            icon: "calculator",
            description:
              "El correcto registro y proceso de las operaciones de nuestros clientes, conforme a las NIFs, permiten generar información oportuna, cuantitativa y cualitativa para la toma de decisiones."
          },
          {
            title: "Auditoria",
            icon: "clipboard-list",
            description:
              "A través del Área de Auditoria servimos a nuestros clientes y aportamos valor al revisar que su información financiera cumpla con a las NIFs y de cumplimiento a sus obligaciones, para la confianza de Socios, Consejeros, Directores, Administradores, Bancos y Acreedores así como en auditorias fiscales."
          },
          {
            title: "Asesoría Fiscal",
            icon: "user-check",
            description:
              "Asesoría Fiscal. Aportamos valor a nuestros clientes asesorándolos en la optimización de sus contribuciones y en la adecuada protección jurídica y patrimonial de sus accionistas, a través de alguno de los siguientes servicios: <br /> <br /><ul class='text-left'><li>Asesoría en la optimización de las obligaciones fiscales y corporativas.</li><li>Enajenación de Acciones.</li><li>Movimientos de Capital.</li><li>Asesoría y apoyo en la elaboración de cálculos y declaraciones fiscales.</li><li>Asesoría y asistencia en los procesos de auditoría por parte de las autoridades fiscales.</li></ul>"
          },
          {
            title:
              "Trámites de Devoluciones y Compensaciones de Contribuciones",
            icon: "money-check-alt",
            description:
              "Aportamos valor agregado y económico a nuestros clientes apoyándolos en la recuperación de saldos a favor de contribuciones, ya sea vía compensación y/o devolución de los mismos."
          },
          {
            title: "Consultoría y Cumplimiento Fiscal",
            icon: "tasks",
            description:
              "Ofrecemos a nuestros clientes amplia consultoría en materia fiscal encaminada para el correcto cumplimiento de las disposiciones fiscales vigentes."
          },
          {
            title: "Planeación Fiscal",
            icon: "calendar-check",
            description:
              "Ofrecemos a nuestros clientes el diseño de estrategias y alternativas que se traduzcan en la optimización de sus recursos, dentro del marco jurídico vigente."
          },
          {
            title: "Estudios de Precios de Transferencia",
            icon: "money-bill-wave",
            description:
              "Ofrecemos a nuestros clientes la elaboración del EPT con partes relacionadas nacionales para asegurar el correcto cumplimiento de nuestras disposiciones fiscales en esta materia, las cuales a su vez son tomadas de las guías de precios de transferencia emitidas por la OCDE."
          },
          {
            title: "Litigio Fiscal",
            icon: "gavel",
            description:
              "Mediante alianza estrategia, proveemos servicios en materia de litigio fiscal y corporativo."
          }
        ]
      }
    };
  }
};
</script>
<style>
.section {
  padding-bottom: 0px !important;
}
.services-page .page-header {
  min-height: 350px !important;
}
.service-title {
  font-weight: 400;
  font-size: 18px;
}
.title {
  font-size: 32px;
  padding-bottom: 30px;
}

.category {
  font-size: 24px;
  font-weight: 400 !important;
  color: #fafafa !important;
}
.services-list {
  padding: 50px;
  background-color: #1d1c1c;
  color: white;
}
.description-text {
  color: #c0c0c0;
}
.service-icon {
  font-size: 50px;
  margin: 10px 0px;
  color: #fafafa;
  background: none;
  width: 50px !important;
  padding: 8px;
  height: 50px;
  line-height: 4.4em;
  border: 2px solid #fafafa;
  border-radius: 50%;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
}
</style>
