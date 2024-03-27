<script setup>
  import CountryTransferComponent from '@/components/businessview/CountryTransferComponent.vue';
</script>

<template>

  <section class="MC">
    <div class="auto-container">
      <div class="row justify-content-between pt-5">
        <div class="col-md-12 text-center text-white pb-2">
          <ul class="list1 clearfix list-flex">
            <li>International transfer</li>
          </ul>
        </div>
      </div>

      <div class="africa row mb-4">
        <div class="col-md-12">
          <div class="image-box pb-3 text-center">
                <figure class="image"><img src="/src/assets/img/flags/Africa.png" width="" alt=""></figure>
          </div>
          
          <!-- <ul class="list d-flex flex-wrap mt-5"></ul> -->
          <div class="row">
          <CountryTransferComponent
              :info="{
                imgName: 'DZ.png',
                name: 'Algeria',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'BW.png',
                name: 'Botswana',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'BU.png',
                name: 'Burundi',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'CA.png',
                name: 'Cameroon',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'CV.png',
                name: 'Cape Verde',
              }"
          />
          </div>
          <div class="row">
          <CountryTransferComponent
              :info="{
                imgName: 'KM.png',
                name: 'Comoros',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'CD.png',
                name: 'Cote D’ivoire',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'DJ.png',
                name: 'Djibouti',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'DC.png',
                name: 'Dr Congo',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'EG.png',
                name: 'Egypt',
              }"
          />
          </div>
          <div class="row">
          <CountryTransferComponent
              :info="{
                imgName: 'ER.png',
                name: 'Eritrea',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'ET.png',
                name: 'Ethiopia',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'GB.png',
                name: 'Gabon',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'GA.png',
                name: 'Gambia',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'KE.png',
                name: 'Kenya',
              }"
          />
          </div>
          <div class="row">
          <CountryTransferComponent
              :info="{
                imgName: 'MD.png',
                name: 'Madagascar',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'MA.png',
                name: 'Malawi',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'MU.png',
                name: 'Mauritius',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'MO.png',
                name: 'Mozambique',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'NA.png',
                name: 'Namibia',
              }"
          />
          </div>
          <div class="row">
          <CountryTransferComponent
              :info="{
                imgName: 'NG.png',
                name: 'Nigeria',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'SE.png',
                name: 'Senegal',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'SL.png',
                name: 'Sierra Leone',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'SA.png',
                name: 'South Africa',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'SO.png',
                name: 'Somalia',
              }"
          />
          </div>
          <div class="row">
          <CountryTransferComponent
              :info="{
                imgName: 'TG.png',
                name: 'Togo',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'TU.png',
                name: 'Tunisia',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'UG.png',
                name: 'Uganda',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'ZA.png',
                name: 'Zambia',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'ZI.png',
                name: 'Zimbabwe',
              }"
          />
          </div>
        </div>
      </div>

      <div class="europe row mb-4">
        <div class="col-md-12">
          <div class="image-box pb-3 text-center">
                <figure class="image"><img src="/src/assets/img/flags/Europe.png" width="" alt=""></figure>
          </div>
          
          <div class="row">
          <CountryTransferComponent
              :info="{
                imgName: 'AL.png',
                name: 'Albania',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'AR.png',
                name: 'Armenia',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'AN.png',
                name: 'Andorra',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'AU.png',
                name: 'Austria',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'AZ.png',
                name: 'Azerbaijan',
              }"
          />
          </div>
          <div class="row">
          <CountryTransferComponent
              :info="{
                imgName: 'BE.png',
                name: 'Belarus',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'BL.png',
                name: 'Belgium',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'BO.png',
                name: 'Bolivia',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'BH.png',
                name: 'Bosnia and Herzegovina',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'BUL.png',
                name: 'Bulgaria',
              }"
          />
          </div>
          <div class="row">
          <CountryTransferComponent
              :info="{
                imgName: 'CR.png',
                name: 'Croatia',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'CY.png',
                name: 'Cyprus',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'CZ.png',
                name: 'Czech Republic',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'DM.png',
                name: 'Denmark',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'FL.png',
                name: 'Finland',
              }"
          />
          </div>
          <div class="row">
          <CountryTransferComponent
              :info="{
                imgName: 'FR.png',
                name: 'France',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'GE.png',
                name: 'Georgia',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'GER.png',
                name: 'Germany',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'GI.png',
                name: 'Gilbraltar',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'GR.png',
                name: 'Greece',
              }"
          />
          </div>
          <div class="row">
          <CountryTransferComponent
              :info="{
                imgName: 'HU.png',
                name: 'Hungary',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'IL.png',
                name: 'Iceland',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'IR.png',
                name: 'Ireland',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'IT.png',
                name: 'Italy',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'KO.png',
                name: 'Kosovo',
              }"
          />
          </div>
          <div class="row">
          <CountryTransferComponent
              :info="{
                imgName: 'LA.png',
                name: 'Latvia',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'LI.png',
                name: 'Lithuania',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'LU.png',
                name: 'Luxenbourg',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'MAL.png',
                name: 'Malta',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'MOL.png',
                name: 'Moldova',
              }"
          />
          </div>
          <div class="row">
          <CountryTransferComponent
              :info="{
                imgName: 'MON.png',
                name: 'Monaco',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'MN.png',
                name: 'Montenegro',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'NL.png',
                name: 'Netherlands',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'NW.png',
                name: 'Norway',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'PL.png',
                name: 'Poland',
              }"
          />
          </div>
          <div class="row">
          <CountryTransferComponent
              :info="{
                imgName: 'PO.png',
                name: 'Portugal',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'SP.png',
                name: 'Spain',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'SW.png',
                name: 'Swedan',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'SWL.png',
                name: 'Switzerland',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'SM.png',
                name: 'San Marino',
              }"
          />
          </div>
          <div class="row">
          <CountryTransferComponent
              :info="{
                imgName: 'TK.png',
                name: 'Turkay',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'UK.png',
                name: 'Ukraine',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'U_K.png',
                name: 'United Kingdom',
              }"
          />
          <div class="col"></div>
          <div class="col"></div>
          </div>
        </div>
      </div>

      <div class="asia row mb-4">
        <div class="col-md-12">
          <div class="image-box pb-3 text-center">
                <figure class="image"><img src="/src/assets/img/flags/Asia.png" width="" alt=""></figure>
          </div>
          
          <div class="row">
          <CountryTransferComponent
              :info="{
                imgName: 'BA.png',
                name: 'Bangladesh',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'BHU.png',
                name: 'Bhutan',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'CAM.png',
                name: 'Cambodia',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'IND.png',
                name: 'India',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'MAC.png',
                name: 'Macau',
              }"
          />
          </div>
          <div class="row">
          <CountryTransferComponent
              :info="{
                imgName: 'MY.png',
                name: 'Malaysia',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'ML.png',
                name: 'Maldives',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'NE.png',
                name: 'Nepal',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'PA.png',
                name: 'Pakistan',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'PH.png',
                name: 'Philippines',
              }"
          />
          </div>
          <div class="row">
          <CountryTransferComponent
              :info="{
                imgName: 'SRI.png',
                name: 'Sri Lanka',
              }"
          />
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
          </div>
        </div>
      </div>

      <div class="northamerica row mb-4">
        <div class="col-md-12">
          <div class="image-box pb-3 text-center">
                <figure class="image"><img src="/src/assets/img/flags/NorthAmerica.png" width="" alt=""></figure>
          </div>
          
          <div class="row">
          <CountryTransferComponent
              :info="{
                imgName: 'ANG.png',
                name: 'Anguilla',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'ANT.png',
                name: 'Antigua And Barbuda',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'ARG.png',
                name: 'Argentina',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'BAH.png',
                name: 'Bahamas',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'BAR.png',
                name: 'Barbados',
              }"
          />
          </div>
          <div class="row">
          <CountryTransferComponent
              :info="{
                imgName: 'BEL.png',
                name: 'Belize',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'BER.png',
                name: 'Bermuda',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'BRA.png',
                name: 'Brazil',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'CAN.png',
                name: 'Canada',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'CAY.png',
                name: 'Cayman Islands',
              }"
          />
          </div>
          <div class="row">
          <CountryTransferComponent
              :info="{
                imgName: 'CHI.png',
                name: 'Chile',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'COL.png',
                name: 'Colombia',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'COS.png',
                name: 'Costa Rica',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'DOM.png',
                name: 'Dominican Republic',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'ECU.png',
                name: 'Ecuador',
              }"
          />
          </div>
          <div class="row">
          <CountryTransferComponent
              :info="{
                imgName: 'EL.png',
                name: 'El Salvador',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'GUA.png',
                name: 'Guatemala',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'GUY.png',
                name: 'Guyana',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'HAI.png',
                name: 'Haiti',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'HON.png',
                name: 'Honduras',
              }"
          />
          </div>
          <div class="row">
          <CountryTransferComponent
              :info="{
                imgName: 'JAM.png',
                name: 'Jamaica',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'MEX.png',
                name: 'Mexico',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'NIC.png',
                name: 'Nicaragua',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'PAN.png',
                name: 'Panama',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'PAR.png',
                name: 'Paraguay',
              }"
          />
          </div>
          <div class="row">
          <CountryTransferComponent
              :info="{
                imgName: 'PERU.png',
                name: 'Peru',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'PR.png',
                name: 'Puerto Rico',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'SKN.png',
                name: 'Saint Kitts And Nevis',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'SAI.png',
                name: 'Saint Lucia',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'TT.png',
                name: 'Trinidad AND Tobago',
              }"
          />
          </div>
          <div class="row">
          <CountryTransferComponent
              :info="{
                imgName: 'TCL.png',
                name: 'Turks And Caicos Islands',
              }"
          />
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
          </div>
        </div>
      </div>

      <div class="oceania row mb-4">
        <div class="col-md-12">
          <div class="image-box pb-3 text-center">
                <figure class="image"><img src="/src/assets/img/flags/Oceania.png" width="" alt=""></figure>
          </div>
          
          <div class="row">
          <CountryTransferComponent
              :info="{
                imgName: 'AUS.png',
                name: 'Australia',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'PNG.png',
                name: 'Papua New Guinea',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'FIJI.png',
                name: 'Fiji',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'SOL.png',
                name: 'Solomon Islands',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'VAN.png',
                name: 'Vanuatu',
              }"
          />
          </div>
          <div class="row">
          <CountryTransferComponent
              :info="{
                imgName: 'KI.png',
                name: 'Kiribati',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'TON.png',
                name: 'Tonga',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'NZL.png',
                name: 'New Zealand',
              }"
          />
          <div class="col"></div>
          <div class="col"></div>
          </div>
        </div>
      </div>


      <div class="middleeast row mb-4">
        <div class="col-md-12">
          <div class="image-box pb-3 text-center">
                <figure class="image"><img src="/src/assets/img/flags/MiddleEast.png" width="" alt=""></figure>
          </div>
          
          <div class="row">
          <CountryTransferComponent
              :info="{
                imgName: 'BAHR.png',
                name: 'Bahrain',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'KUW.png',
                name: 'Kuwait',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'LEB.png',
                name: 'Lebanon',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'UAE.png',
                name: 'Saudi Arabia',
              }"
          />
          <CountryTransferComponent
              :info="{
                imgName: 'QA.png',
                name: 'Qatar',
              }"
          />
          </div>
        </div>
      </div>


    </div>
  </section>

</template>

<style scoped>
.MC{
  background: url('/src/assets/img/WorldMap3.png') no-repeat;
  /* background-size: 100% 100%; */
}

.list1 li {
  position: relative;
  display: block;
  font-size: 14px;
  color: #fff;
  background: #195399;
  padding: 8px 16px;
  border-radius: 30px;
  line-height: 25px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
</style>



