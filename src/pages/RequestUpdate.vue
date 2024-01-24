<template>
  <div>
    <div>
      <div v-if="data.length">
        <!-- Use v-show to toggle the visibility of q-table based on data availability -->
        <q-table :rows="data" :columns="columnsss"></q-table>

        <!-- Show a message if there is no data -->
      </div>
      <!--  <div v-show="data.length == 0">No data available.</div> -->

      <div class="row">
        <div class="col-1">
          <!--   <p>{{ controlNo }}</p> -->
          <!--  <h5 class="q-ml-lg">REQUEST UPDATE</h5> -->
        </div>
        <div class="col-12 col-sm-6 col-md-3 col-lg-2 q-mt-md">
          <q-avatar size="100px" class="shadow-10">
            <q-img :src="imgurl" />
          </q-avatar>
        </div>

        <div class="col-2 col-sm-2 col-md-5 col-lg-8 q-mt-md esbugbai">
          <p><b>Full Name:</b> {{ userinfo[0].fullname }}</p>
          <p class="q-mt-md">
            <b>Designation:</b> {{ userinfo[0].designation }}
          </p>
          <p class="uppadding"><b>Status:</b> {{ userinfo[0].status }}</p>
        </div>
      </div>
    </div>
    <div class="q-pa-md">
      <div class="q-gutter-y-md" style="max-width: 1500px">
        <q-card>
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab name="List" label="Request for Update List" />
            <q-tab name="pds" label="PERSONAL DATA SHEET" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="pds">
              <PDS />
            </q-tab-panel>

            <q-tab-panel name="List">
              <div class="column items-center" style="">
                <div class="col" style="width: 90%">
                  <div v-if="requests.length">
                    <q-card class="q-pa-sm" style="text-align: center">
                      <q-table
                        class="my-sticky-header-table"
                        flat
                        bordered
                        title="Request for Update List"
                        dense
                        :rows="requests"
                        :columns="columns"
                        row-key="id"
                        :rows-per-page-options="[5]"
                      >
                        <template v-slot:body-cell-actions="{ row }">
                          <div class="actionsbtn q-gutter-lg">
                            <q-btn
                              flat
                              round
                              color="green"
                              @click="viewdoc(row)"
                            >
                              View Docu
                            </q-btn>
                            <q-btn
                              v-if="
                                row.status !== 'ACCEPTED' &&
                                row.status !== 'REJECTED'
                              "
                              flat
                              round
                              color="green"
                              @click="accept(row)"
                            >
                              Accept
                            </q-btn>
                            <q-btn
                              v-if="
                                row.status !== 'ACCEPTED' &&
                                row.status !== 'REJECTED'
                              "
                              flat
                              round
                              color="deep-orange"
                              @click="deleteItem(row)"
                            >
                              DENY
                            </q-btn>
                          </div>
                        </template>
                      </q-table>
                    </q-card>
                  </div>

                  <div v-if="requestChildss.length">
                    <q-card class="q-pa-sm" style="text-align: center">
                      <q-table
                        class="my-sticky-header-table"
                        flat
                        bordered
                        title="Request for Adding Children"
                        dense
                        :rows="requestChildss"
                        :columns="columns_child"
                        row-key="id"
                        :rows-per-page-options="[5]"
                      >
                        <template v-slot:body-cell-actions="{ row }">
                          <div class="actionsbtn q-gutter-lg">
                            <q-btn
                              flat
                              round
                              color="green"
                              @click="viewdoc_ADD(row)"
                            >
                              View Docu
                            </q-btn>
                            <q-btn
                              v-if="
                                row.status !== 'ACCEPTED' &&
                                row.status !== 'REJECTED'
                              "
                              flat
                              round
                              color="green"
                              @click="accept_child(row)"
                            >
                              Accept
                            </q-btn>
                            <q-btn
                              v-if="
                                row.status !== 'ACCEPTED' &&
                                row.status !== 'REJECTED'
                              "
                              flat
                              round
                              color="deep-orange"
                              @click="deleteItem_Child(row)"
                            >
                              DENY
                            </q-btn>
                          </div>
                        </template>
                      </q-table>
                    </q-card>
                  </div>

                  <div v-if="requestEducBackground.length">
                    <q-card class="q-pa-sm" style="text-align: center">
                      <q-table
                        class="my-sticky-header-table"
                        flat
                        bordered
                        title="REQUEST FOR ADDING EDUCATIONAL BACKGROUND"
                        dense
                        :rows="requestEducBackground"
                        :columns="columns_Educ_Background"
                        row-key="id"
                        :rows-per-page-options="[5]"
                      >
                        <template v-slot:body-cell-actions="{ row }">
                          <div class="actionsbtn q-gutter-lg">
                            <q-btn
                              flat
                              round
                              color="green"
                              @click="viewdoc_ADD(row)"
                            >
                              View Docu
                            </q-btn>
                            <q-btn
                              v-if="
                                row.status !== 'ACCEPTED' &&
                                row.status !== 'REJECTED'
                              "
                              flat
                              round
                              color="green"
                              @click="accept_Educational_Background(row)"
                            >
                              Accept
                            </q-btn>
                            <q-btn
                              v-if="
                                row.status !== 'ACCEPTED' &&
                                row.status !== 'REJECTED'
                              "
                              flat
                              round
                              color="deep-orange"
                              @click="deleteItem_Educational_Background(row)"
                            >
                              DENY
                            </q-btn>
                          </div>
                        </template>
                      </q-table>
                    </q-card>
                  </div>
                  <div v-if="requestCivilserviceEligibility.length">
                    <q-card class="q-pa-sm" style="text-align: center">
                      <q-table
                        class="my-sticky-header-table"
                        flat
                        bordered
                        title="REQUEST FOR CIVIL SERVICE ELIGIBILITY"
                        dense
                        :rows="requestCivilserviceEligibility"
                        :columns="columns_CivilServiceEligibility"
                        row-key="id"
                        :rows-per-page-options="[5]"
                      >
                        <template v-slot:body-cell-actions="{ row }">
                          <div class="actionsbtn q-gutter-lg">
                            <q-btn
                              flat
                              round
                              color="green"
                              @click="viewdoc_ADD(row)"
                            >
                              View Docu
                            </q-btn>
                            <q-btn
                              v-if="
                                row.status !== 'ACCEPTED' &&
                                row.status !== 'REJECTED'
                              "
                              flat
                              round
                              color="green"
                              @click="accept_CivilService_Eligibility(row)"
                            >
                              Accept
                            </q-btn>
                            <q-btn
                              v-if="
                                row.status !== 'ACCEPTED' &&
                                row.status !== 'REJECTED'
                              "
                              flat
                              round
                              color="deep-orange"
                              @click="deleteItem_Civil_Service(row)"
                            >
                              DENY
                            </q-btn>
                          </div>
                        </template>
                      </q-table>
                    </q-card>
                  </div>

                  <div v-if="requestworkexperience.length">
                    <q-card class="q-pa-sm" style="text-align: center">
                      <q-table
                        class="my-sticky-header-table"
                        flat
                        bordered
                        title="REQUEST FOR WORK EXPERIENCE"
                        dense
                        :rows="requestworkexperience"
                        :columns="columns_WorkExperience"
                        row-key="id"
                        :rows-per-page-options="[5]"
                      >
                        <template v-slot:body-cell-actions="{ row }">
                          <div class="actionsbtn q-gutter-lg">
                            <q-btn
                              flat
                              round
                              color="green"
                              @click="viewdoc_ADD(row)"
                            >
                              View Docu
                            </q-btn>
                            <q-btn
                              v-if="
                                row.status !== 'ACCEPTED' &&
                                row.status !== 'REJECTED'
                              "
                              flat
                              round
                              color="green"
                              @click="accept_WorkExperience(row)"
                            >
                              Accept
                            </q-btn>
                            <q-btn
                              v-if="
                                row.status !== 'ACCEPTED' &&
                                row.status !== 'REJECTED'
                              "
                              flat
                              round
                              color="deep-orange"
                              @click="deleteItem_WorkExperience(row)"
                            >
                              DENY
                            </q-btn>
                          </div>
                        </template>
                      </q-table>
                    </q-card>
                  </div>

                  <div v-if="requestvoluntarywork.length">
                    <q-card class="q-pa-sm" style="text-align: center">
                      <q-table
                        class="my-sticky-header-table"
                        flat
                        bordered
                        title="REQUEST FOR VOLUNTARY WORK"
                        dense
                        :rows="requestvoluntarywork"
                        :columns="columns_VoluntaryWork"
                        row-key="id"
                        :rows-per-page-options="[5]"
                      >
                        <template v-slot:body-cell-actions="{ row }">
                          <div class="actionsbtn q-gutter-lg">
                            <q-btn
                              flat
                              round
                              color="green"
                              @click="viewdoc_ADD(row)"
                            >
                              View Docu
                            </q-btn>
                            <q-btn
                              v-if="
                                row.status !== 'ACCEPTED' &&
                                row.status !== 'REJECTED'
                              "
                              flat
                              round
                              color="green"
                              @click="accept_Voluntary_Work(row)"
                            >
                              Accept
                            </q-btn>
                            <q-btn
                              v-if="
                                row.status !== 'ACCEPTED' &&
                                row.status !== 'REJECTED'
                              "
                              flat
                              round
                              color="deep-orange"
                              @click="deleteItem(row)"
                            >
                              DENY
                            </q-btn>
                          </div>
                        </template>
                      </q-table>
                    </q-card>
                  </div>

                  <div v-if="requestlearningdevelopment.length">
                    <q-card class="q-pa-sm" style="text-align: center">
                      <q-table
                        class="my-sticky-header-table"
                        flat
                        bordered
                        title="REQUEST FOR LEARNING AND DEVELOPMENT (L&D) INTERVENTIONS"
                        dense
                        :rows="requestlearningdevelopment"
                        :columns="columns_Learnin_AND_Development"
                        row-key="id"
                        :rows-per-page-options="[5]"
                      >
                        <template v-slot:body-cell-actions="{ row }">
                          <div class="actionsbtn q-gutter-lg">
                            <q-btn
                              flat
                              round
                              color="green"
                              @click="viewdoc_ADD(row)"
                            >
                              View Docu
                            </q-btn>
                            <q-btn
                              v-if="
                                row.status !== 'ACCEPTED' &&
                                row.status !== 'REJECTED'
                              "
                              flat
                              round
                              color="green"
                              @click="accept_Learning_And_Development(row)"
                            >
                              Accept
                            </q-btn>
                            <q-btn
                              v-if="
                                row.status !== 'ACCEPTED' &&
                                row.status !== 'REJECTED'
                              "
                              flat
                              round
                              color="deep-orange"
                              @click="deleteItem_Learning_Development(row)"
                            >
                              DENY
                            </q-btn>
                          </div>
                        </template>
                      </q-table>
                    </q-card>
                  </div>

                  <div class="row">
                    <div class="col-md-4 col-sm-12 col-xs-12 q-pa-xs">
                      <div v-if="requestSKILL.length">
                        <q-card>
                          <q-card-section class="scroll">
                            <div class="text-h6">
                              SPECIAL SKILLS AND HOBBIES
                              <!--     <q-btn label="Add" @click="SkillDialog = true"></q-btn> -->
                            </div>
                          </q-card-section>
                          <q-table
                            class="my-sticky-header-table"
                            flat
                            bordered
                            title=""
                            dense
                            :rows="requestSKILL"
                            :columns="columnSkills"
                            row-key="id"
                          >
                            <template v-slot:body-cell-actions="{ row }">
                              <div class="actionsbtn q-gutter-lg">
                                <q-btn
                                  v-if="
                                    row.status !== 'ACCEPTED' &&
                                    row.status !== 'REJECTED'
                                  "
                                  flat
                                  round
                                  color="green"
                                  @click="accept_SKills(row)"
                                >
                                  Accept
                                </q-btn>
                                <q-btn
                                  v-if="
                                    row.status !== 'ACCEPTED' &&
                                    row.status !== 'REJECTED'
                                  "
                                  flat
                                  round
                                  color="deep-orange"
                                  @click="deleteItem_Skills(row)"
                                >
                                  DENY
                                </q-btn>
                              </div>
                            </template>
                          </q-table>
                        </q-card>
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-12 col-xs-12 q-pa-xs">
                      <!-- NON-ACADEMIC DISTINCTIONS / RECOGNITION -->
                      <div v-if="requestnonacademic.length">
                        <q-card>
                          <q-card-section class="scroll">
                            <div class="text-h6">
                              NON-ACADEMIC DISTINCTIONS
                              <!-- <q-btn label="Add" @click="NonAcademicDialog = true"></q-btn> -->
                            </div>
                          </q-card-section>
                          <q-table
                            class="my-sticky-header-table"
                            flat
                            bordered
                            title=""
                            dense
                            :rows="requestnonacademic"
                            :columns="columnAcademic"
                            row-key="id"
                          >
                            <template v-slot:body-cell-actions="{ row }">
                              <div class="actionsbtn q-gutter-lg">
                                <q-btn
                                  v-if="
                                    row.status !== 'ACCEPTED' &&
                                    row.status !== 'REJECTED'
                                  "
                                  flat
                                  round
                                  color="green"
                                  @click="accept_NonAcademic(row)"
                                >
                                  Accept
                                </q-btn>
                                <q-btn
                                  v-if="
                                    row.status !== 'ACCEPTED' &&
                                    row.status !== 'REJECTED'
                                  "
                                  flat
                                  round
                                  color="deep-orange"
                                  @click="deleteItem_Non_Academic(row)"
                                >
                                  DENY
                                </q-btn>
                              </div>
                            </template>
                          </q-table>
                        </q-card>
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-12 col-xs-12 q-pa-xs">
                      <!-- MEMBERSHIP IN ASSOCIATION/ORGANIZATION -->
                      <div v-if="requestorganization.length">
                        <q-card>
                          <q-card-section class="scroll">
                            <div class="text-h6">
                              MEMBERSHIP IN ASSOCIATION
                              <!--  <q-btn label="Add" @click="MembershipDialog = true"></q-btn> -->
                            </div>
                          </q-card-section>
                          <q-table
                            class="my-sticky-header-table"
                            flat
                            bordered
                            title=""
                            dense
                            :rows="requestorganization"
                            :columns="columnMembership"
                            row-key="id"
                          >
                            <template v-slot:body-cell-actions="{ row }">
                              <div class="actionsbtn q-gutter-lg">
                                <q-btn
                                  v-if="
                                    row.status !== 'ACCEPTED' &&
                                    row.status !== 'REJECTED'
                                  "
                                  flat
                                  round
                                  color="green"
                                  @click="accept_Organizaition(row)"
                                >
                                  Accept
                                </q-btn>
                                <q-btn
                                  v-if="
                                    row.status !== 'ACCEPTED' &&
                                    row.status !== 'REJECTED'
                                  "
                                  flat
                                  round
                                  color="deep-orange"
                                  @click="deleteItem_MembershipAssociation(row)"
                                >
                                  DENY
                                </q-btn>
                              </div>
                            </template>
                          </q-table>
                        </q-card>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>

        <q-card> </q-card>
      </div>
    </div>

    <div>
      <q-dialog v-model="DialogDeny_MemberAssociation" persistent="">
        <q-card style="width: 35%; height: 40%">
          <q-card-section>
            <div class="text-h6">REQUEST UPDATE DENIED</div>
          </q-card-section>

          <q-separator />

          <q-card-section>
            <p>Reason for Denial of Request Update :</p>
            <q-input v-model="text" filled type="textarea" dense="" />
          </q-card-section>
          <q-separator />

          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="orange" v-close-popup />
            <q-btn
              label="Save"
              color="green"
              v-close-popup
              @click="reject_Membership_Association()"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-dialog v-model="DialogDeny_NonAcademnic" persistent="">
        <q-card style="width: 35%; height: 40%">
          <q-card-section>
            <div class="text-h6">REQUEST UPDATE DENIED</div>
          </q-card-section>

          <q-separator />

          <q-card-section>
            <p>Reason for Denial of Request Update :</p>
            <q-input v-model="text" filled type="textarea" dense="" />
          </q-card-section>
          <q-separator />

          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="orange" v-close-popup />
            <q-btn
              label="Save"
              color="green"
              v-close-popup
              @click="reject_Non_Academic()"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-dialog v-model="DialogDeny_Skills" persistent="">
        <q-card style="width: 35%; height: 40%">
          <q-card-section>
            <div class="text-h6">REQUEST UPDATE DENIED</div>
          </q-card-section>

          <q-separator />

          <q-card-section>
            <p>Reason for Denial of Request Update :</p>
            <q-input v-model="text" filled type="textarea" dense="" />
          </q-card-section>
          <q-separator />

          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="orange" v-close-popup />
            <q-btn
              label="Save"
              color="green"
              v-close-popup
              @click="reject_Skils()"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-dialog v-model="DialogDeny_Learning_Development" persistent="">
        <q-card style="width: 35%; height: 40%">
          <q-card-section>
            <div class="text-h6">REQUEST UPDATE DENIED</div>
          </q-card-section>

          <q-separator />

          <q-card-section>
            <p>Reason for Denial of Request Update :</p>
            <q-input v-model="text" filled type="textarea" dense="" />
          </q-card-section>
          <q-separator />

          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="orange" v-close-popup />
            <q-btn
              label="Save"
              color="green"
              v-close-popup
              @click="reject_Learning_Development()"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-dialog v-model="DialogDeny_Work_Experience" persistent="">
        <q-card style="width: 35%; height: 40%">
          <q-card-section>
            <div class="text-h6">REQUEST UPDATE DENIED</div>
          </q-card-section>

          <q-separator />

          <q-card-section>
            <p>Reason for Denial of Request Update :</p>
            <q-input v-model="text" filled type="textarea" dense="" />
          </q-card-section>
          <q-separator />

          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="orange" v-close-popup />
            <q-btn
              label="Save"
              color="green"
              v-close-popup
              @click="reject_WorkExperience()"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-dialog v-model="DialogDeny_Civil_Service" persistent="">
        <q-card style="width: 35%; height: 40%">
          <q-card-section>
            <div class="text-h6">REQUEST UPDATE DENIED</div>
          </q-card-section>

          <q-separator />

          <q-card-section>
            <p>Reason for Denial of Request Update :</p>
            <q-input v-model="text" filled type="textarea" dense="" />
          </q-card-section>
          <q-separator />

          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="orange" v-close-popup />
            <q-btn
              label="Save"
              color="green"
              v-close-popup
              @click="reject_CivilService()"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-dialog v-model="DialogDeny_EducationalBack_Ground" persistent="">
        <q-card style="width: 35%; height: 40%">
          <q-card-section>
            <div class="text-h6">REQUEST UPDATE DENIED</div>
          </q-card-section>

          <q-separator />

          <q-card-section>
            <p>Reason for Denial of Request Update :</p>
            <q-input v-model="text" filled type="textarea" dense="" />
          </q-card-section>
          <q-separator />

          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="orange" v-close-popup />
            <q-btn
              label="Save"
              color="green"
              v-close-popup
              @click="reject_EducationalBackground()"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-dialog v-model="DialogDeny_Child" persistent="">
        <q-card style="width: 35%; height: 40%">
          <q-card-section>
            <div class="text-h6">REQUEST UPDATE DENIED</div>
          </q-card-section>

          <q-separator />

          <q-card-section>
            <p>Reason for Denial of Request Update :</p>
            <q-input v-model="text" filled type="textarea" dense="" />
          </q-card-section>
          <q-separator />

          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="orange" v-close-popup />
            <q-btn
              label="Save"
              color="green"
              v-close-popup
              @click="reject_Child()"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-dialog v-model="DialogDeny" persistent="">
        <q-card style="width: 35%; height: 40%">
          <q-card-section>
            <div class="text-h6">REQUEST UPDATE DENIED</div>
          </q-card-section>

          <q-separator />

          <q-card-section>
            <p>Reason for Denial of Request Update :</p>
            <q-input v-model="text" filled type="textarea" dense="" />
          </q-card-section>
          <q-separator />

          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="orange" v-close-popup />
            <q-btn label="Save" color="green" v-close-popup @click="reject" />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-dialog v-model="viewdocs" persistent="">
        <q-card style="width: 35%; height: 40%">
          <q-card-section>
            <div class="text-h6">SUPPORTING DOCUMENTS</div>
          </q-card-section>

          <q-separator />

          <q-card-section>
            <div v-if="images.length > 0">
              <q-img
                v-for="(file, index) in images"
                :key="index"
                :src="imagesource(file)"
                alt="Uploaded Image"
                style="
                  height: 2in;
                  max-width: 2in;
                  border-color: black;
                  border-radius: 10%;
                  border-width: 2%;
                  border-style: solid;
                "
              />
            </div>
          </q-card-section>
          <q-separator />

          <q-card-actions align="right">
            <q-btn label="Close" color="green" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-dialog v-model="viewdocs_add" persistent="">
        <q-card style="width: 35%; height: 40%">
          <q-card-section>
            <div class="text-h6">SUPPORTING DOCUMENTS</div>
          </q-card-section>

          <q-separator />

          <q-card-section>
            <div>
              <q-img
                :src="images"
                alt="Uploaded Image"
                style="
                  height: 2in;
                  max-width: 2in;
                  border-color: black;
                  border-radius: 10%;
                  border-width: 2%;
                  border-style: solid;
                "
              />
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="right">
            <q-btn label="Close" color="green" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>
<script>
import { useDashboardStore } from "src/stores/Dashboard";
import { ref } from "vue";
import PDS from "./PDS.vue";
export default {
  data() {
    return {
      viewdocs_add: false,
      DialogDeny_MemberAssociation: false,
      DialogDeny_NonAcademnic: false,
      DialogDeny_Learning_Development: false,
      DialogDeny_Skills: false,
      DialogDeny_Work_Experience: false,
      DialogDeny_EducationalBack_Ground: false,
      DialogDeny: false,
      DialogDeny_Child: false,
      DialogDeny_Civil_Service: false,

      viewdocs: false,
      controlNo: "",
      FUllname: "",
      tab: ref("List"),
      columns: [
        {
          name: "requestfield",
          align: "left",
          label: "REQUEST FIELD",
          field: "label",
          sortable: true,
        },
        {
          name: "datafrom",
          align: "left",
          label: "DATA FROM",
          field: "Dfrom",
          sortable: true,
        },
        {
          name: "datato",
          align: "left",
          label: "DATA TO",
          field: "Dto",
          sortable: true,
        },
        {
          name: "status",
          align: "left",
          label: "STATUS",
          field: "status",
          sortable: true,
        },
        {
          name: "actions",
          label: "ACTIONS",
          field: "actions",
          align: "center",
        },
      ],

      data: [
        /* { name: "sdsd", age: "sd" },
        { name: "sd", age: "sd" }, */
        // Add more data as needed
      ],
      columnsss: [
        // Define your table columns
        {
          name: "name",
          label: "Name",
          align: "left",
          field: "name",
          sortable: true,
        },
        {
          name: "age",
          label: "Age",
          align: "center",
          field: "age",
          sortable: true,
        },
        // Add more columns as needed
      ],

      columns_child: [
        {
          name: "ChildName",
          align: "left",
          label: "CHILD NAME",
          field: "ChildName",
          sortable: true,
        },
        {
          name: "BirthDate",
          align: "left",
          label: "BRITH DAY",
          field: "BirthDate",
          sortable: true,
        },
        {
          name: "status",
          align: "left",
          label: "STATUS",
          field: "status",
          sortable: true,
        },
        {
          name: "actions",
          label: "ACTIONS",
          field: "actions",
          align: "center",
        },
      ],

      columns_Educ_Background: [
        {
          name: "Education",
          align: "left",
          label: "EDUCATION LEVEL",
          field: "Education",
          sortable: true,
        },
        {
          name: "School",
          align: "left",
          label: "SCHOOL NAME",
          field: "School",
          sortable: true,
        },

        {
          name: "Degree",
          align: "left",
          label: "BASIC EDUCATION/DEGREE/COURSE",
          field: "Degree",
          sortable: true,
        },

        {
          name: "From",
          align: "left",
          label: "FROM",
          field: "From",
          sortable: true,
        },

        {
          name: "To",
          align: "left",
          label: "TO",
          field: "To",
          sortable: true,
        },

        {
          name: "Graduated",
          align: "left",
          label: "GRADUATED",
          field: "Graduated",
          sortable: true,
        },
        {
          name: "status",
          align: "left",
          label: "STATUS",
          field: "status",
          sortable: true,
        },

        {
          name: "actions",
          label: "ACTIONS",
          field: "actions",
          align: "center",
        },
      ],

      columns_CivilServiceEligibility: [
        {
          name: "CivilServe",
          align: "left",
          label: "ELIGIBILITY",
          field: "CivilServe",
          sortable: true,
        },
        /*    {
          name: "Rates",
          align: "left",
          label: "RATING (IF APPLICABLE)",
          field: "Rates",
          sortable: true,
        }, */

        {
          name: "Dates",
          align: "left",
          label: "DATE OF EXAMINATION",
          field: "Dates",
          sortable: true,
        },

        {
          name: "Place",
          align: "left",
          label: "PLACE OF EXAMINIATION",
          field: "Place",
          sortable: true,
        },

        {
          name: "Lnumber",
          align: "left",
          label: "LICENSE NUMBER",
          field: "Lnumber",
          sortable: true,
        },

        {
          name: "Ldate",
          align: "left",
          label: "DATE OF VALIDITY",
          field: "Ldate",
          sortable: true,
        },
        {
          name: "status",
          align: "left",
          label: "STATUS",
          field: "status",
          sortable: true,
        },

        {
          name: "actions",
          label: "ACTIONS",
          field: "actions",
          align: "center",
        },
      ],

      columns_WorkExperience: [
        {
          name: "Wfrom",
          align: "left",
          label: "FROM",
          field: "Wfrom",
          sortable: true,
        },
        {
          name: "Wto",
          align: "left",
          label: "TO",
          field: "Wto",
          sortable: true,
        },

        {
          name: "Wposition",
          align: "left",
          label: "POSITION TITTLE",
          field: "Wposition",
          sortable: true,
        },

        {
          name: "Wcompany",
          align: "left",
          label: "DEPARTMENT",
          field: "Wcompany",
          sortable: true,
        },

        {
          name: "Wsalary",
          align: "left",
          label: "MONTHLY SALARY",
          field: "Wsalary",
          sortable: true,
        },

        {
          name: "Wgrade",
          align: "left",
          label: "SALARY GRADE",
          field: "Wgrade",
          sortable: true,
        },

        {
          name: "wstatus",
          align: "left",
          label: "STATUS OF APPOINTMENT",
          field: "wstatus",
          sortable: true,
        },

        {
          name: "Wgov",
          align: "left",
          label: "GOVERNMENT SERVICE",
          field: "Wgov",
          sortable: true,
        },

        {
          name: "status",
          align: "left",
          label: "STATUS",
          field: "status",
          sortable: true,
        },

        {
          name: "actions",
          label: "ACTIONS",
          field: "actions",
          align: "center",
        },
      ],

      columns_VoluntaryWork: [
        {
          name: "Orgname",
          align: "left",
          label: "NAME & ADDRESS OF ORGANIZATION",
          field: "Orgname",
          sortable: true,
        },
        {
          name: "Datefrom",
          align: "left",
          label: "FROM",
          field: "Datefrom",
          sortable: true,
        },

        {
          name: "Dateto",
          align: "left",
          label: "TO",
          field: "Dateto",
          sortable: true,
        },

        {
          name: "Nohours",
          align: "left",
          label: "NUMBER OF HOURS",
          field: "Nohours",
          sortable: true,
        },

        {
          name: "Orgposition",
          align: "left",
          label: "POSITION",
          field: "Orgposition",
          sortable: true,
        },

        {
          name: "status",
          align: "left",
          label: "STATUS",
          field: "status",
          sortable: true,
        },

        {
          name: "actions",
          label: "ACTIONS",
          field: "actions",
          align: "center",
        },
      ],

      columns_Learnin_AND_Development: [
        {
          name: "Training",
          align: "left",
          label: "Training",
          field: "Training",
          sortable: true,
        },
        {
          name: "Datefrom",
          align: "left",
          label: "FROM",
          field: "Datefrom",
          sortable: true,
        },

        {
          name: "Dateto",
          align: "left",
          label: "TO",
          field: "Dateto",
          sortable: true,
        },

        {
          name: "NumHours",
          align: "left",
          label: "NUMBER OF HOURS",
          field: "NumHours",
          sortable: true,
        },

        {
          name: "type",
          align: "left",
          label: "TYPE",
          field: "type",
          sortable: true,
        },

        {
          name: "Conductor",
          align: "left",
          label: "CONDUCTED / SPONSORED BY",
          field: "Conductor",
          sortable: true,
        },

        {
          name: "status",
          align: "left",
          label: "STATUS",
          field: "status",
          sortable: true,
        },

        {
          name: "actions",
          label: "ACTIONS",
          field: "actions",
          align: "center",
        },
      ],

      columnSkills: [
        {
          name: "skill",
          required: true,
          label: "Skills and Hobbies",
          align: "left",
          field: "skill",
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "status",
          align: "left",
          label: "STATUS",
          field: "status",
          sortable: true,
        },

        {
          name: "actions",
          label: "ACTIONS",
          field: "actions",
          align: "center",
        },
      ],

      columnAcademic: [
        {
          name: "NonAcademic",
          required: true,
          label: "Non-Academic Distinction",
          align: "left",
          field: "NonAcademic",
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "status",
          align: "left",
          label: "STATUS",
          field: "status",
          sortable: true,
        },

        {
          name: "actions",
          label: "ACTIONS",
          field: "actions",
          align: "center",
        },
      ],

      columnMembership: [
        {
          name: "Organization",
          required: true,
          label: "Membership in Organization",
          align: "left",
          field: "Organization",
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "status",
          align: "left",
          label: "STATUS",
          field: "status",
          sortable: true,
        },

        {
          name: "actions",
          label: "ACTIONS",
          field: "actions",
          align: "center",
        },
      ],

      rows: [
        {
          /*    Controlno: "019807", */
          requestfield: "RESIDENTIAL PRVINCE",
          datafrom: "Davao Del Norte",
          datato: "Davao Del norte",
          status: "Status",
        },
        {
          /*  Controlno: "019807", */
          requestfield: "RESIDENTIAL PRVINCE",
          datafrom: "Davao Del Norte",
          datato: "Davao Del norte",
          status: "Status",
        },
        {
          /*   Controlno: "019807", */
          requestfield: "RESIDENTIAL PRVINCE",
          datafrom: "Davao Del Norte",
          datato: "Davao Del norte",
          status: "Status",
        },
        {
          /*   Controlno: "019807", */
          requestfield: "RESIDENTIAL PRVINCE",
          datafrom: "Davao Del Norte",
          datato: "Davao Del norte",
          status: "Status",
        },

        {
          /*   Controlno: "0323232", */
          requestfield: "RESIDENTIAL PRVINCE",
          datafrom: "Davao Del Norte",
          datato: "Davao Del norte",
          status: "Status",
        },
        {
          /*    Controlno: "0323232", */
          requestfield: "RESIDENTIAL PRVINCE",
          datafrom: "Davao Del Norte",
          datato: "Davao Del norte",
          status: "Status",
        },
        {
          /*   Controlno: "0323232", */
          requestfield: "RESIDENTIAL PRVINCE",
          datafrom: "Davao Del Norte",
          datato: "Davao Del norte",
          status: "Status",
        },
        {
          /*  Controlno: "0323232", */
          requestfield: "RESIDENTIAL PRVINCE",
          datafrom: "Davao Del Norte",
          datato: "Davao Del norte",
          status: "Status",
        },
      ],
      requests: [],
      userinfo: [],
      imgurl: "",
      images: [],
      id: "",
      text: "",
    };
  },
  components: {
    PDS,
  },

  /*   mounted() {
    this.controlNo = this.$route.params.controlNo;
    this.FUllname = this.$route.params.FUllname;
  }, */

  methods: {
    imagesource(file) {
      const imgsrc = "http://10.0.1.23:82/Pics/" + file.imgname;
      return imgsrc;
    },
    viewdoc(row) {
      const store = useDashboardStore();
      let data = new FormData();
      data.append("ControlNo", this.controlNo);
      data.append("SessionID", row.sessionID);
      store.getimg(data).then((res) => {
        this.images = store.images;
        console.log(this.images);
        this.viewdocs = true;
      });
    },
    viewdoc_ADD(row) {
      // const store = useDashboardStore();
      // let data = new FormData();
      // data.append("ControlNo", this.controlNo);
      // data.append("SessionID", row.sessionID);
      // store.getimg(data).then((res) => {
      this.images = "http://10.0.1.23:82/Pics/" + row.img;
      this.viewdocs_add = true;
      // });
    },

    viewdoc_VOLUNTARY_WORk(row) {
      // const store = useDashboardStore();
      // let data = new FormData();
      // data.append("ControlNo", this.controlNo);
      // data.append("SessionID", row.sessionID);
      // store.getimg(data).then((res) => {
      this.images = "http://10.0.1.23:82/Pics/" + row.Img;
      this.viewdocs_add = true;
      // });
    },

    deleteItem(row) {
      console.log("ROW", row);
      this.id = row.ID;
      this.DialogDeny = true;
    },

    deleteItem_Child(row) {
      console.log("ROW", row);
      this.id = row.ID;
      this.DialogDeny_Child = true;
    },

    deleteItem_Educational_Background(row) {
      console.log("ROW", row);
      this.id = row.ID;
      this.DialogDeny_EducationalBack_Ground = true;
    },

    deleteItem_Civil_Service(row) {
      console.log("ROW", row);
      this.id = row.ID;
      this.DialogDeny_Civil_Service = true;
    },

    deleteItem_WorkExperience(row) {
      console.log("ROW", row);
      this.id = row.ID;
      this.DialogDeny_Work_Experience = true;
    },

    deleteItem_Learning_Development(row) {
      console.log("ROW", row);
      this.id = row.ID;
      this.DialogDeny_Learning_Development = true;
    },

    deleteItem_Skills(row) {
      console.log("ROW", row);
      this.id = row.ID;
      this.DialogDeny_Skills = true;
    },

    deleteItem_Non_Academic(row) {
      console.log("ROW", row);
      this.id = row.ID;
      this.DialogDeny_NonAcademnic = true;
    },

    deleteItem_MembershipAssociation(row) {
      console.log("ROW", row);
      this.id = row.ID;
      this.DialogDeny_MemberAssociation = true;
    },

    accept_child(row) {
      const store = useDashboardStore();
      let data = new FormData();
      data.append("ChildName", row.ChildName);
      data.append("BirthDate", row.BirthDate);
      data.append("controlno", row.Controlno);
      data.append("tablename", "tblPDSUpdatesChild");
      data.append("type", "add");
      data.append("id", row.ID);
      store.accept(data).then((res) => {
        let data2 = new FormData();
        data2.append("ControlNo", row.Controlno);
        store.getsinglerequest(data2).then((res) => {
          // console.log("result=",res)
          this.requests = store.userrequest;
          this.requestChildss = store.requestChild;
          // console.log("userinfo=",this.requests)
        });
      });
    },

    accept_Educational_Background(row) {
      const store = useDashboardStore();
      let data = new FormData();

      data.append("orders", row.Orders);
      data.append("Codes", row.codes);
      data.append("Numunits", row.Numunits);

      data.append("Education", row.Education);
      data.append("School", row.School);
      data.append("codes", row.codes);
      data.append("Degree", row.Degree);
      data.append("numunits", row.Numunits);
      data.append("Yearlevel", row.Yearlevel);
      data.append("DateAttend", row.DateAttend);
      data.append("Honors", row.Honors);
      data.append("Graduated", row.Graduated);
      data.append("orderscount", row.orderscount);

      /* data.append("From", row.From);
      data.append("To", row.To); */

      data.append("controlno", row.ControlNo);
      data.append("tablename", "tblPDSUpdatesEducation");
      data.append("type", "add");
      data.append("id", row.ID);
      store.accept(data).then((res) => {
        let data2 = new FormData();
        data2.append("ControlNo", row.ControlNo);
        store.getsinglerequest(data2).then((res) => {
          // console.log("result=",res)
          this.requests = store.userrequest;
          this.requestEducBackground = store.requestEduc_Background;
          // console.log("userinfo=",this.requests)
        });
      });
    },

    accept_CivilService_Eligibility(row) {
      const store = useDashboardStore();
      let data = new FormData();
      data.append("Codes", row.Codes);
      data.append("CivilServe", row.CivilServe);
      data.append("Dates", row.Dates);
      data.append("Rates", row.Rates);
      data.append("Place", row.Place);
      data.append("LNumber", row.Lnumber);
      data.append("LDate", row.Ldate);

      data.append("controlno", row.ControlNo);
      data.append("tablename", "tblPDSUpdatesCivilService");
      data.append("type", "add");
      data.append("id", row.ID);
      store.accept(data).then((res) => {
        let data2 = new FormData();
        data2.append("ControlNo", row.ControlNo);
        store.getsinglerequest(data2).then((res) => {
          // console.log("result=",res)
          this.requests = store.userrequest;
          // console.log("userinfo=",this.requests)
          this.requestCivilserviceEligibility =
            store.requestCivil_service_Eligibility;
        });
      });
    },

    accept_WorkExperience(row) {
      const store = useDashboardStore();
      let data = new FormData();
      data.append("WFrom", row.Wfrom);
      data.append("WTo", row.Wto);
      data.append("WPosition", row.Wposition);
      data.append("WCompany", row.Wcompany);
      data.append("WSalary", row.Wsalary);
      data.append("WGrade", row.Wgrade);
      data.append("WStatus", row.wstatus);
      data.append("WGov", row.Wgov);
      data.append("controlno", row.controlno);
      data.append("tablename", "tblPDSUpdatesWorkExperience");
      data.append("type", "add");
      data.append("id", row.ID);
      store.accept(data).then((res) => {
        let data2 = new FormData();
        data2.append("ControlNo", row.controlno);
        store.getsinglerequest(data2).then((res) => {
          // console.log("result=",res)
          this.requests = store.userrequest;
          this.requestworkexperience = store.requestwork_experience;
          // console.log("userinfo=",this.requests)
        });
      });
    },

    /*  Kanii suuddddddd */
    accept_Voluntary_Work(row) {
      const store = useDashboardStore();
      let data = new FormData();
      data.append("OrgName", row.Orgname);
      data.append("NoHours", row.Nohours);
      data.append("OrgPosition", row.Orgposition);
      data.append("DateFrom", row.Datefrom);
      data.append("DateTo", row.Dateto);
      data.append("controlno", row.controlno);
      data.append("tablename", "tblPDSUpdatesVoluntary");
      data.append("type", "add");
      data.append("id", row.ID);
      store.accept(data).then((res) => {
        let data2 = new FormData();
        data2.append("ControlNo", row.controlno);
        store.getsinglerequest(data2).then((res) => {
          // console.log("result=",res)
          this.requests = store.userrequest;
          this.requestvoluntarywork = store.requestVoluntary_Work;
          // console.log("userinfo=",this.requests)
        });
      });
    },

    accept_Learning_And_Development(row) {
      const store = useDashboardStore();
      let data = new FormData();
      data.append("Training", row.Training);
      data.append("Dates", row.Dates);
      data.append("NumHours", row.NumHours);
      data.append("Conductor", row.Conductor);
      data.append("DateFrom", row.Datefrom);
      data.append("DateTo", row.Dateto);
      data.append("type", row.type);
      data.append("controlno", row.Controlno);
      data.append("tablename", "tblPDSUpdatesTrainings");
      data.append("type", "add");
      data.append("id", row.ID);
      store.accept(data).then((res) => {
        let data2 = new FormData();
        data2.append("ControlNo", row.Controlno);
        store.getsinglerequest(data2).then((res) => {
          // console.log("result=",res)
          this.requests = store.userrequest;
          this.requestlearningdevelopment =
            store.requestLearning_And_Development;
          // console.log("userinfo=",this.requests)
        });
      });
    },

    accept_SKills(row) {
      const store = useDashboardStore();
      let data = new FormData();
      data.append("Skills", row.skill);
      data.append("controlno", row.Controlno);
      data.append("tablename", "tblPDSUpdatesSkills");
      data.append("type", "add");
      data.append("id", row.ID);
      store.accept(data).then((res) => {
        let data2 = new FormData();
        data2.append("ControlNo", row.Controlno);
        store.getsinglerequest(data2).then((res) => {
          // console.log("result=",res)
          this.requests = store.userrequest;
          this.requestSKILL = store.requestskills;

          // console.log("userinfo=",this.requests)
        });
      });
    },

    accept_NonAcademic(row) {
      const store = useDashboardStore();
      let data = new FormData();
      data.append("NonAcademic", row.NonAcademic);

      data.append("controlno", row.Controlno);
      data.append("tablename", "tblPDSUpdatesNonAcademic");
      data.append("type", "add");
      data.append("id", row.ID);
      store.accept(data).then((res) => {
        let data2 = new FormData();
        data2.append("ControlNo", row.Controlno);
        store.getsinglerequest(data2).then((res) => {
          // console.log("result=",res)
          this.requests = store.userrequest;
          this.requestnonacademic = store.requestNon_Academic;
          // console.log("userinfo=",this.requests)
        });
      });
    },

    accept_Organizaition(row) {
      const store = useDashboardStore();
      let data = new FormData();
      data.append("Organization", row.Organization);

      data.append("controlno", row.Controlno);
      data.append("tablename", "tblPDSUpdatesOrganization");
      data.append("type", "add");
      data.append("id", row.ID);
      store.accept(data).then((res) => {
        let data2 = new FormData();
        data2.append("ControlNo", row.Controlno);
        store.getsinglerequest(data2).then((res) => {
          // console.log("result=",res)
          this.requests = store.userrequest;
          this.requestorganization = store.request_Organization;
          // console.log("userinfo=",this.requests)
        });
      });
    },

    accept(row) {
      const store = useDashboardStore();
      let data = new FormData();
      data.append("column", row.col);
      data.append("value", row.Dto);
      data.append("controlno", this.controlNo);
      data.append("type", "edit");
      data.append("tablename", "tblPDSUpdates");
      data.append("id", row.ID);
      store.accept(data).then((res) => {
        let data2 = new FormData();
        data2.append("ControlNo", this.controlNo);
        store.getsinglerequest(data2).then((res) => {
          // console.log("result=",res)
          this.requests = store.userrequest;
          // console.log("userinfo=",this.requests)
        });
      });
    },
    opendialog(row) {
      this.text = "";
      this.id = row.ID;
      this.DialogDeny = true;
    },
    reject() {
      console.log("ID", this.id);
      const store = useDashboardStore();
      let data = new FormData();

      data.append("id", this.id);
      data.append("remarks", this.text);
      data.append("tablename", "tblPDSUpdates");
      store.reject(data).then((res) => {
        let data2 = new FormData();
        data2.append("ControlNo", this.controlNo);
        store.getsinglerequest(data2).then((res) => {
          this.requests = store.userrequest;
          console.log("userinfo=", this.requests);
        });
      });
    },

    reject_Child() {
      console.log("ID", this.id);
      const store = useDashboardStore();
      let data = new FormData();

      data.append("id", this.id);
      data.append("remarks", this.text);
      data.append("tablename", "tblPDSUpdatesChild");
      store.reject(data).then((res) => {
        let data2 = new FormData();
        data2.append("ControlNo", this.controlNo);
        store.getsinglerequest(data2).then((res) => {
          this.requests = store.userrequest;
          this.requestChildss = store.requestChild;
          console.log("userinfo=", this.requests);
        });
      });
    },

    reject_EducationalBackground() {
      console.log("ID", this.id);
      const store = useDashboardStore();
      let data = new FormData();

      data.append("id", this.id);
      data.append("remarks", this.text);
      data.append("tablename", "tblPDSUpdatesEducation");
      store.reject(data).then((res) => {
        let data2 = new FormData();
        data2.append("ControlNo", this.controlNo);
        store.getsinglerequest(data2).then((res) => {
          this.requests = store.userrequest;
          this.requestEducBackground = store.requestEduc_Background;
          console.log("userinfo=", this.requests);
        });
      });
    },

    reject_CivilService() {
      console.log("ID", this.id);
      const store = useDashboardStore();
      let data = new FormData();

      data.append("id", this.id);
      data.append("remarks", this.text);
      data.append("tablename", "tblPDSUpdatesCivilService");
      store.reject(data).then((res) => {
        let data2 = new FormData();
        data2.append("ControlNo", this.controlNo);
        store.getsinglerequest(data2).then((res) => {
          this.requests = store.userrequest;
          this.requestCivilserviceEligibility =
            store.requestCivil_service_Eligibility;
          console.log("userinfo=", this.requests);
        });
      });
    },

    reject_WorkExperience() {
      console.log("ID", this.id);
      const store = useDashboardStore();
      let data = new FormData();

      data.append("id", this.id);
      data.append("remarks", this.text);
      data.append("tablename", "tblPDSUpdatesWorkExperience");
      store.reject(data).then((res) => {
        let data2 = new FormData();
        data2.append("ControlNo", this.controlNo);
        store.getsinglerequest(data2).then((res) => {
          this.requests = store.userrequest;
          this.requestworkexperience = store.requestwork_experience;
          console.log("userinfo=", this.requests);
        });
      });
    },

    reject_Learning_Development() {
      console.log("ID", this.id);
      const store = useDashboardStore();
      let data = new FormData();

      data.append("id", this.id);
      data.append("remarks", this.text);
      data.append("tablename", "tblPDSUpdatesTrainings");
      store.reject(data).then((res) => {
        let data2 = new FormData();
        data2.append("ControlNo", this.controlNo);
        store.getsinglerequest(data2).then((res) => {
          this.requests = store.userrequest;
          this.requestlearningdevelopment =
            store.requestLearning_And_Development;
          console.log("userinfo=", this.requests);
        });
      });
    },

    reject_Skils() {
      console.log("ID", this.id);
      const store = useDashboardStore();
      let data = new FormData();

      data.append("id", this.id);
      data.append("remarks", this.text);
      data.append("tablename", "tblPDSUpdatesSkills");
      store.reject(data).then((res) => {
        let data2 = new FormData();
        data2.append("ControlNo", this.controlNo);
        store.getsinglerequest(data2).then((res) => {
          this.requests = store.userrequest;
          this.requestSKILL = store.requestskills;
          console.log("userinfo=", this.requests);
        });
      });
    },

    reject_Non_Academic() {
      console.log("ID", this.id);
      const store = useDashboardStore();
      let data = new FormData();

      data.append("id", this.id);
      data.append("remarks", this.text);
      data.append("tablename", "tblPDSUpdatesNonAcademic");
      store.reject(data).then((res) => {
        let data2 = new FormData();
        data2.append("ControlNo", this.controlNo);
        store.getsinglerequest(data2).then((res) => {
          this.requests = store.userrequest;
          this.requestnonacademic = store.requestNon_Academic;
          console.log("userinfo=", this.requests);
        });
      });
    },

    reject_Membership_Association() {
      console.log("ID", this.id);
      const store = useDashboardStore();
      let data = new FormData();

      data.append("id", this.id);
      data.append("remarks", this.text);
      data.append("tablename", "tblPDSUpdatesOrganization");
      store.reject(data).then((res) => {
        let data2 = new FormData();
        data2.append("ControlNo", this.controlNo);
        store.getsinglerequest(data2).then((res) => {
          this.requests = store.userrequest;
          this.requestorganization = store.request_Organization;
          console.log("userinfo=", this.requests);
        });
      });
    },
  },

  created() {
    // Access the controlNumber from the Vuex store
    this.controlNo = this.$route.params.controlNo;
    const store = useDashboardStore();
    let data = new FormData();
    data.append("controlno", this.controlNo);
    store.getuserinfo(data).then((res) => {
      this.userinfo = store.userinfo;

      console.log(this.userinfo);

      this.imgurl = "http://10.0.1.23:82/pics/" + store.img;
    });
    let data2 = new FormData();
    data2.append("ControlNo", this.controlNo);
    store.getsinglerequest(data2).then((res) => {
      this.requests = store.userrequest;
      console.log("userinfo=", this.requests);

      this.request_reference = store.requestReference;
      console.log("Reference123", this.request_reference);

      this.request_pic = store.requestPic;
      console.log("PIC", this.request_pic);

      this.requestChildss = store.requestChild;
      console.log("CHILD REQUEST", this.requestChildss);

      this.requestEducBackground = store.requestEduc_Background;
      console.log("EDUCATIONAL BACKGROUND", this.requestEducBackground);

      this.requestCivilserviceEligibility =
        store.requestCivil_service_Eligibility;
      console.log("CIVIL SERVICE", this.requestCivilserviceEligibility);

      this.requestworkexperience = store.requestwork_experience;
      console.log("WORK EXPERIENCE", this.requestworkexperience);

      this.requestvoluntarywork = store.requestVoluntary_Work;
      console.log("VOLUNTARY WORK", this.requestvoluntarywork);

      this.requestlearningdevelopment = store.requestLearning_And_Development;
      console.log("LEARNING AND DEVELOPMENT", this.requestlearningdevelopment);

      this.requestSKILL = store.requestskills;
      console.log("SKILL", this.requestSKILL);

      this.requestnonacademic = store.requestNon_Academic;
      console.log("Non Academid", this.requestnonacademic);

      this.requestorganization = store.request_Organization;
      console.log("Membership in Association", this.requestorganization);
    });
  },
};
</script>

<style scoped>
.uppadding {
  padding-top: -20px;
}
.esbugbai {
  margin-left: -60px;
}
</style>
