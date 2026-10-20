/* ============================================================================
   Park & Co Lawyers — Australian Parent Visas (103, 143, 173, 804, 864, 884 & 870)
   Queue Release, Waiting Period Survival & AoS Navigator (app.js)
   ============================================================================ */

const QUEUE_DATA = {"generated_at":"2026-10-20T23:40:02+10:00","last_polled_date":"2026-10-20","official_contact":"enquiry@parkcolawyers.com","live_queue_state":{"as_at_date":"31 August 2026","last_updated_str":"6/10/2026 10:27 AM","queue_release_bullets":{"Contributory Parent":"November 2018","Contributory Aged Parent":"November 2020","Parent":"March 2014","Aged Parent":"October 2014"},"milestone_table":[{"visa_type":"Temporary to Permanent (173 to 143 and 884 to 864)","acknowledge_new_application":"Approx. 4 weeks","queue_assessment":"N/A","visa_assessment_queue_release_date":"May 2026"},{"visa_type":"Contributory Parent (143)","acknowledge_new_application":"Approx. 4 weeks","queue_assessment":"Lodged April 2024","visa_assessment_queue_release_date":"Lodged/queued up to November 2018"},{"visa_type":"Contributory Parent (Temp) (173)","acknowledge_new_application":"Approx. 4 weeks","queue_assessment":"Lodged April 2024","visa_assessment_queue_release_date":"Lodged/queued up to November 2018"},{"visa_type":"Contributory Aged Parent (864)","acknowledge_new_application":"Approx. 4 weeks","queue_assessment":"Lodged April 2023","visa_assessment_queue_release_date":"Lodged/queued up to November 2020"},{"visa_type":"Contributory Aged Parent (Temp) (884)","acknowledge_new_application":"Approx. 4 weeks","queue_assessment":"Lodged April 2023","visa_assessment_queue_release_date":"Lodged/queued up to November 2020"},{"visa_type":"Parent (103)","acknowledge_new_application":"Approx. 4 weeks","queue_assessment":"Lodged February 2023","visa_assessment_queue_release_date":"Queued up to March 2014"},{"visa_type":"Aged Parent (804)","acknowledge_new_application":"Approx. 4 weeks","queue_assessment":"Lodged January 2023","visa_assessment_queue_release_date":"Queued up to October 2014"}],"new_application_estimates":{"Contributory Parent visas":"18 years","Parent & Aged Parent visas":"42 years"}},"queue_lags_months_as_at_aug_2026":[{"id":"step_up","label_ko":"2단계 영주 전환 (173→143 / 884→864)","label_en":"2-Stage Temp→Perm (173→143 / 884→864)","stage1_assessment_str":"N/A (대기열 면제)","stage1_assessment_str_en":"N/A (Exempt from Queue)","stage1_lag_months":0,"stage2_release_str":"May 2026","stage2_lag_months":3,"official_wait_years":0.3,"empirical_velocity_months_per_year":12.0},{"id":"sub_864_884","label_ko":"기여제 고령부모 (864 / 884 · Onshore 67+)","label_en":"Contributory Aged Parent (864 / 884 · Onshore 67+)","stage1_assessment_str":"2023년 4월 접수분","stage1_assessment_str_en":"Lodged April 2023","stage1_lag_months":40,"stage2_release_str":"November 2020","stage2_lag_months":69,"official_wait_years":18,"empirical_velocity_months_per_year":9.13},{"id":"sub_143_173","label_ko":"기여제 부모 (143 / 173 · 일반)","label_en":"Contributory Parent (143 / 173 · General)","stage1_assessment_str":"2024년 4월 접수분","stage1_assessment_str_en":"Lodged April 2024","stage1_lag_months":28,"stage2_release_str":"November 2018","stage2_lag_months":93,"official_wait_years":18,"empirical_velocity_months_per_year":5.07},{"id":"sub_804","label_ko":"일반 고령부모 (804 · Onshore 67+)","label_en":"Aged Parent (804 · Onshore 67+)","stage1_assessment_str":"2023년 1월 접수분","stage1_assessment_str_en":"Lodged January 2023","stage1_lag_months":43,"stage2_release_str":"October 2014","stage2_lag_months":142,"official_wait_years":42,"empirical_velocity_months_per_year":2.35},{"id":"sub_103","label_ko":"일반 부모 (103 · Offshore/일반)","label_en":"Parent (103 · General)","stage1_assessment_str":"2023년 2월 접수분","stage1_assessment_str_en":"Lodged February 2023","stage1_lag_months":42,"stage2_release_str":"March 2014","stage2_lag_months":149,"official_wait_years":42,"empirical_velocity_months_per_year":4.18}],"historical_velocity_series":[{"period":"2020-09","c_143_year":2016.42,"c_143_label":"May 2016","c_864_year":2016.42,"c_864_label":"May 2016","p_103_year":2010.83,"p_103_label":"Oct 2010"},{"period":"2021-09","c_143_year":2016.42,"c_143_label":"May 2016","c_864_year":2016.58,"c_864_label":"Jul 2016","p_103_year":2010.83,"p_103_label":"Oct 2010"},{"period":"2022-09","c_143_year":2016.83,"c_143_label":"Oct 2016","c_864_year":2017.0,"c_864_label":"Jan 2017","p_103_year":2011.42,"p_103_label":"May 2011"},{"period":"2023-09","c_143_year":2017.42,"c_143_label":"May 2017","c_864_year":2017.42,"c_864_label":"May 2017","p_103_year":2011.83,"p_103_label":"Oct 2011"},{"period":"2024-09","c_143_year":2017.75,"c_143_label":"Sep 2017","c_864_year":2017.75,"c_864_label":"Sep 2017","p_103_year":2012.67,"p_103_label":"Aug 2012"},{"period":"2025-09","c_143_year":2018.42,"c_143_label":"May 2018","c_864_year":2018.42,"c_864_label":"May 2018","p_103_year":2013.33,"p_103_label":"Apr 2013"},{"period":"2026-08","c_143_year":2018.92,"c_143_label":"Nov 2018","c_864_year":2020.92,"c_864_label":"Nov 2020","p_103_year":2014.25,"p_103_label":"Mar 2014"}],"capping_and_backlog":{"instrument_id":"LIN 26/042 (F2026L00724)","s85_contributory_cap":6800,"s85_contributory_aged_earmark":1125,"s85_non_contributory_cap":1700,"s85_total_cap":8500,"fy26_27_planning_level":7060,"backlog_as_at":"31 December 2025 (FOI DA 26/01/00017 & DA 25/07/00301)","backlog_contributory_persons":100762,"backlog_non_contributory_persons":57706,"backlog_total_persons":158468,"subclass_804_onhand":27013,"subclass_804_annual_grants_fy24_25":37,"subclass_804_annual_withdrawals_refusals_fy24_25":475},"fee_schedule_fy26_27":{"103":{"first_base":5280,"first_adult":2640,"first_child":1325,"second_per_person":2065,"aos_years":4,"aos_bond_1":5000,"aos_bond_2":7000},"804":{"first_base":5280,"first_adult":2640,"first_child":1325,"second_per_person":2065,"aos_years":4,"aos_bond_1":5000,"aos_bond_2":7000},"143":{"first_base":5040,"first_adult":1700,"first_child":855,"second_per_person":43600,"aos_years":10,"aos_bond_1":10000,"aos_bond_2":14000},"173":{"first_base":3395,"first_adult":1145,"first_child":575,"second_per_person":29130,"aos_years":0,"aos_bond_1":0,"aos_bond_2":0},"173_to_143":{"first_base":440,"first_adult":195,"first_child":100,"second_per_person":19420,"aos_years":10,"aos_bond_1":10000,"aos_bond_2":14000},"864":{"first_base":5040,"first_adult":2515,"first_child":1260,"second_per_person":43600,"aos_years":10,"aos_bond_1":10000,"aos_bond_2":14000},"884":{"first_base":4990,"first_adult":2490,"first_child":1250,"second_per_person":29130,"aos_years":0,"aos_bond_1":0,"aos_bond_2":0},"884_to_864":{"first_base":440,"first_adult":195,"first_child":100,"second_per_person":19420,"aos_years":10,"aos_bond_1":10000,"aos_bond_2":14000},"870_3yr":{"sponsorship":420,"first_base":1180,"second_per_person":4715,"total_per_parent":6315,"sponsor_income":83454.8},"870_5yr":{"sponsorship":420,"first_base":1180,"second_per_person":10605,"total_per_parent":12205,"sponsor_income":83454.8}},"aos_formula_fy26_27":{"authority":"Social Security (Assurance of Support) Determination 2018 (F2024C00296) ss 15-16 & DSS Social Security Guide 9.4.3","jsp_annual_base_aud":22578,"ftb_child_add_aud":2942,"corporate_bond_contributory_aud":20000,"corporate_bond_non_contributory_aud":10000,"examples":{"single_assurer_1_parent":45156,"single_assurer_2_parents":67734,"single_assurer_2_parents_1_child":70676,"single_assurer_2_parents_2_children":73618,"joint_2_assurers_1_parent":67734,"joint_2_assurers_2_parents":90312,"joint_2_assurers_2_parents_2_children":96195}}};
const POLLING_DATA = {"last_polled_at":"2026-10-20T23:40:02+10:00","last_polled_date":"2026-10-20","total_sources":15,"live_verified_count":15,"changed_count":12,"official_contact":"enquiry@parkcolawyers.com","monitored_rules":{"parent_visas_queue_state":{"as_at_date":"31 August 2026","last_updated_str":"6/10/2026 10:27 AM","release_dates":{"Contributory Parent":"November 2018","Contributory Aged Parent":"November 2020","Parent":"March 2014","Aged Parent":"October 2014"},"new_application_estimates":{"Contributory Parent visas":"18 years","Parent & Aged Parent visas":"42 years"}},"section_85_cap_and_backlog":{"instrument_id":"LIN 26/042 (F2026L00724)","s85_contributory_cap":6800,"s85_contributory_aged_earmark":1125,"s85_non_contributory_cap":1700,"s85_total_cap":8500,"fy26_27_planning_level":7060,"backlog_as_at":"31 December 2025 (FOI DA 26/01/00017 & DA 25/07/00301)","backlog_contributory_persons":100762,"backlog_non_contributory_persons":57706,"backlog_total_persons":158468,"subclass_804_onhand":27013,"subclass_804_annual_grants_fy24_25":37,"subclass_804_annual_withdrawals_refusals_fy24_25":475},"aos_formula_fy26_27":{"authority":"Social Security (Assurance of Support) Determination 2018 (F2024C00296) ss 15-16 & DSS Social Security Guide 9.4.3","jsp_annual_base_aud":22578,"ftb_child_add_aud":2942,"corporate_bond_contributory_aud":20000,"corporate_bond_non_contributory_aud":10000,"examples":{"single_assurer_1_parent":45156,"single_assurer_2_parents":67734,"single_assurer_2_parents_1_child":70676,"single_assurer_2_parents_2_children":73618,"joint_2_assurers_1_parent":67734,"joint_2_assurers_2_parents":90312,"joint_2_assurers_2_parents_2_children":96195}},"statutory_vac_fy26_27":{"103":{"first_base":5280,"first_adult":2640,"first_child":1325,"second_per_person":2065,"aos_years":4,"aos_bond_1":5000,"aos_bond_2":7000},"804":{"first_base":5280,"first_adult":2640,"first_child":1325,"second_per_person":2065,"aos_years":4,"aos_bond_1":5000,"aos_bond_2":7000},"143":{"first_base":5040,"first_adult":1700,"first_child":855,"second_per_person":43600,"aos_years":10,"aos_bond_1":10000,"aos_bond_2":14000},"173":{"first_base":3395,"first_adult":1145,"first_child":575,"second_per_person":29130,"aos_years":0,"aos_bond_1":0,"aos_bond_2":0},"173_to_143":{"first_base":440,"first_adult":195,"first_child":100,"second_per_person":19420,"aos_years":10,"aos_bond_1":10000,"aos_bond_2":14000},"864":{"first_base":5040,"first_adult":2515,"first_child":1260,"second_per_person":43600,"aos_years":10,"aos_bond_1":10000,"aos_bond_2":14000},"884":{"first_base":4990,"first_adult":2490,"first_child":1250,"second_per_person":29130,"aos_years":0,"aos_bond_1":0,"aos_bond_2":0},"884_to_864":{"first_base":440,"first_adult":195,"first_child":100,"second_per_person":19420,"aos_years":10,"aos_bond_1":10000,"aos_bond_2":14000},"870_3yr":{"sponsorship":420,"first_base":1180,"second_per_person":4715,"total_per_parent":6315,"sponsor_income":83454.8},"870_5yr":{"sponsorship":420,"first_base":1180,"second_per_person":10605,"total_per_parent":12205,"sponsor_income":83454.8}},"waiting_period_statutory_rules":{"immiaccount_online_mandate_date":"2026-04-22","online_subclasses":["103","143","804","864"],"paper_subclasses":["173","884"],"aged_parent_pension_age":67,"aged_parent_schedule1_validity_date":"2024-12-17","pic_4005_significant_cost_threshold_aud":86000,"pic_4005_health_waiver_available":false,"rhca_countries_count":11,"korea_rhca_eligible":false,"temp_173_884_medicare_eligible":true}},"internal_policy_references":[{"id":"pam3_vm_3058","cite":"PAM3 (Procedural Instruction): Parent Visa Processing & Queue Administration — VM-3058","sourceKind":"internal_policy_reference","notPubliclyPollable":true,"fetchStatus":"internal_legendcom_mirror","contentCheckStatus":"verified_against_local_mirror","ruleMatchStatus":"matched","reviewStatus":"verified_2026-10-20","localMirrorReference":"/mnt/T7/LegendCom (VM-3058 — Queue Date assignment, post-17 Dec 2024 Age 67 validity & death of primary applicant)","publicCompanionUrl":"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-processing-times/visa-processing-priorities/parent-visas"},{"id":"pam3_vm_6327","cite":"PAM3 (Procedural Instruction): Sponsored Parent (Temporary) Visa (Subclass 870) — VM-6327","sourceKind":"internal_policy_reference","notPubliclyPollable":true,"fetchStatus":"internal_legendcom_mirror","contentCheckStatus":"verified_against_local_mirror","ruleMatchStatus":"matched","reviewStatus":"verified_2026-10-20","localMirrorReference":"/mnt/T7/LegendCom (VM-6327 s 3.6.6 — Asymmetric lockout bar between Subclass 870 and permanent parent visas)","publicCompanionUrl":"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/sponsored-parent-temporary-870"},{"id":"direction_103","cite":"Ministerial Direction No. 103 — Order of Consideration: Certain Family Visas (Queue Date & 173->143 / 884->864 Deeming)","sourceKind":"internal_policy_reference","notPubliclyPollable":true,"fetchStatus":"internal_legendcom_mirror","contentCheckStatus":"verified_against_local_mirror","ruleMatchStatus":"matched","reviewStatus":"verified_2026-10-20","localMirrorReference":"/mnt/T7/LegendCom (Direction No. 103 s 6(2)(c) upfront aged assessment & s 7(2)(b) Stage 1 lodgement date deeming)","publicCompanionUrl":"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-processing-times/visa-processing-priorities/parent-visas"},{"id":"direction_117","cite":"Ministerial Direction No. 117 — Priority Processing for Onshore Aged Parent Applications (effective 25 July 2026)","sourceKind":"internal_policy_reference","notPubliclyPollable":true,"fetchStatus":"internal_legendcom_mirror","contentCheckStatus":"verified_against_local_mirror","ruleMatchStatus":"matched","reviewStatus":"verified_2026-10-20","localMirrorReference":"/mnt/T7/LegendCom (Direction No. 117 s 8(2)(a) — Onshore Contributory Aged Parent 864/884 priority release)","publicCompanionUrl":"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-processing-times/visa-processing-priorities/parent-visas"}],"sources":[{"id":"ha_parent_queue","authority":"호주 연방 이민성 (Department of Home Affairs)","authority_ko":"호주 연방 이민성 (Department of Home Affairs)","authority_en":"Department of Home Affairs","title":"Parent Visas Queue Assessment & Queue Release Dates Official Page","title_ko":"부모초청 비자 월별 Queue Assessment & Queue Release Dates 공시 페이지","title_en":"Parent Visas Queue Assessment & Queue Release Dates Official Page","check_scope_ko":"기준일(2026.08.31) · 7대 비자 1단계/2단계 컷오프 · 신규 신청 예상 대기연수(18년/42년) 파싱","check_scope_en":"Live parsing of 7x4 queue milestone table, release dates & 18yr/42yr wait estimates","cadence_ko":"매주 월·목 폴링 (이민성 월 1회 ~5주 시차 업데이트)","cadence_en":"Polled twice weekly (DHA updates monthly with ~5-week lag)","url":"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-processing-times/visa-processing-priorities/parent-visas","sourceKind":"public_policy_guidance","status":"live","fetchStatus":"http_200_ok","contentCheckStatus":"substantive_content_verified","ruleMatchStatus":"matched","reviewStatus":"verified_2026-10-20","http_code":200,"sha256":"e011be9146c5160414b6f28829218e72e0bfdb1693a181befd165e0c2b3f4f49","bytes":1410199,"method":"insane-search-live","changed_since_last_poll":true,"checked_at":"2026-10-20T23:40:02+10:00"},{"id":"ha_pricing_api","authority":"호주 연방 이민성 (Department of Home Affairs)","authority_ko":"호주 연방 이민성 (Department of Home Affairs)","authority_en":"Department of Home Affairs","title":"DHA Visa Pricing JSON API (GetPriceList — All 15 Parent Visa Fee Tiers)","title_ko":"이민성 내부 비자 수수료 API (GetPriceList — 부모비자 15개 스트림 1·2차 VAC)","title_en":"DHA Visa Pricing JSON API (GetPriceList — All 15 Parent Visa Fee Tiers)","check_scope_ko":"103/143/173/804/864/884/870 1차 신청비(Base/18+/<18) 및 2차 기여금($43,600 등) 실시간 대조","check_scope_en":"Live verification of 1st & 2nd VAC across all 15 Parent Visa fee schedules","cadence_ko":"매월 1일 및 매년 7월 1일 회계연도 개시일 집중 감시","cadence_en":"Monthly & 1 July FY indexation check","url":"https://immi.homeaffairs.gov.au/_layouts/15/api/data.aspx/GetPriceList","sourceKind":"public_policy_guidance","status":"live","fetchStatus":"http_200_ok","contentCheckStatus":"substantive_content_verified","ruleMatchStatus":"matched","reviewStatus":"verified_2026-10-20","http_code":200,"sha256":"361fc744ca4e3b9651d10dc6f632bfc2064e4cb662133d9e20067ec893473ae7","bytes":246288,"method":"dha-json-api-post","changed_since_last_poll":false,"checked_at":"2026-10-20T23:40:02+10:00"},{"id":"ha_subclass_143","authority":"호주 연방 이민성 (Department of Home Affairs)","authority_ko":"호주 연방 이민성 (Department of Home Affairs)","authority_en":"Department of Home Affairs","title":"Subclass 143 — Contributory Parent (Permanent) Visa","title_ko":"Subclass 143 — 기여제 부모 영주비자 (Contributory Parent Visa)","title_en":"Subclass 143 — Contributory Parent (Permanent) Visa","check_scope_ko":"ImmiAccount 온라인 접수 의무화(2026.4.22) · 1차/2차 VAC($43,600) · 10년 AoS 요건 파싱","check_scope_en":"PageSchemaHiddenField verification of 143 online lodgement, VAC & 10-yr AoS","cadence_ko":"매월 정기 폴링","cadence_en":"Monthly check","url":"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/contributory-parent-143","sourceKind":"public_policy_guidance","status":"live","fetchStatus":"http_200_ok","contentCheckStatus":"substantive_content_verified","ruleMatchStatus":"matched","reviewStatus":"verified_2026-10-20","http_code":200,"sha256":"48e10664255c63bd0e2a79a34dcfb262cc5e17372219d484b4b31bc04bdfdb57","bytes":1503796,"method":"insane-search-live","changed_since_last_poll":true,"checked_at":"2026-10-20T23:40:02+10:00"},{"id":"ha_subclass_173","authority":"호주 연방 이민성 (Department of Home Affairs)","authority_ko":"호주 연방 이민성 (Department of Home Affairs)","authority_en":"Department of Home Affairs","title":"Subclass 173 — Contributory Parent (Temporary) Visa","title_ko":"Subclass 173 — 기여제 부모 임시비자 (2년 · 메디케어 부여 · 2차 VAC 분할)","title_en":"Subclass 173 — Contributory Parent (Temporary) Visa","check_scope_ko":"종이 우편 접수 유지 · 2차 VAC 1단계분($29,130) · 메디케어 자격 및 AoS 유예 확인","check_scope_en":"PageSchemaHiddenField verification of 173 paper lodgement & $29,130 2nd VAC","cadence_ko":"매월 정기 폴링","cadence_en":"Monthly check","url":"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/contributory-parent-temporary-173","sourceKind":"public_policy_guidance","status":"live","fetchStatus":"http_200_ok","contentCheckStatus":"substantive_content_verified","ruleMatchStatus":"matched","reviewStatus":"verified_2026-10-20","http_code":200,"sha256":"8defa8de23df3e3b9ca947956986b2c6fe5c754176e5935861ae4565c2dd5b70","bytes":1483496,"method":"insane-search-live","changed_since_last_poll":true,"checked_at":"2026-10-20T23:40:02+10:00"},{"id":"ha_subclass_864","authority":"호주 연방 이민성 (Department of Home Affairs)","authority_ko":"호주 연방 이민성 (Department of Home Affairs)","authority_en":"Department of Home Affairs","title":"Subclass 864 — Contributory Aged Parent (Residence) Visa","title_ko":"Subclass 864 — 기여제 고령부모 영주비자 (Onshore 만 67세+ · BVA 부여)","title_en":"Subclass 864 — Contributory Aged Parent (Residence) Visa","check_scope_ko":"만 67세 유효접수 요건 · 온쇼어 BVA 부여 · ImmiAccount 온라인 접수 · 2차 VAC($43,600) 확인","check_scope_en":"PageSchemaHiddenField verification of 864 Age 67 rule, BVA & VAC","cadence_ko":"매월 정기 폴링","cadence_en":"Monthly check","url":"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/contributory-aged-parent-864","sourceKind":"public_policy_guidance","status":"live","fetchStatus":"http_200_ok","contentCheckStatus":"substantive_content_verified","ruleMatchStatus":"matched","reviewStatus":"verified_2026-10-20","http_code":200,"sha256":"29e1103f95566bf56b3e5894674003348817b5907416e2336026fdb55ec89895","bytes":1495160,"method":"insane-search-live","changed_since_last_poll":true,"checked_at":"2026-10-20T23:40:02+10:00"},{"id":"ha_subclass_884","authority":"호주 연방 이민성 (Department of Home Affairs)","authority_ko":"호주 연방 이민성 (Department of Home Affairs)","authority_en":"Department of Home Affairs","title":"Subclass 884 — Contributory Aged Parent (Temporary) Visa","title_ko":"Subclass 884 — 기여제 고령부모 임시비자 (Onshore 만 67세+ · 2단계 전환)","title_en":"Subclass 884 — Contributory Aged Parent (Temporary) Visa","check_scope_ko":"만 67세 요건 · 종이 우편 접수 · 2차 VAC($29,130) · 884->864 전환 규칙 확인","check_scope_en":"PageSchemaHiddenField verification of 884 paper lodgement & step-up rules","cadence_ko":"매월 정기 폴링","cadence_en":"Monthly check","url":"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/contributory-aged-parent-temporary-884","sourceKind":"public_policy_guidance","status":"live","fetchStatus":"http_200_ok","contentCheckStatus":"substantive_content_verified","ruleMatchStatus":"matched","reviewStatus":"verified_2026-10-20","http_code":200,"sha256":"44f8d915c371b3e6c8e598aef73bcb13799272e96391ec1eb28a1dbff7738de6","bytes":1481404,"method":"insane-search-live","changed_since_last_poll":true,"checked_at":"2026-10-20T23:40:02+10:00"},{"id":"ha_subclass_103","authority":"호주 연방 이민성 (Department of Home Affairs)","authority_ko":"호주 연방 이민성 (Department of Home Affairs)","authority_en":"Department of Home Affairs","title":"Subclass 103 — Parent (Migrant) Visa","title_ko":"Subclass 103 — 일반 부모 영주비자 (Parent Visa)","title_en":"Subclass 103 — Parent (Migrant) Visa","check_scope_ko":"ImmiAccount 온라인 접수 · 1차 VAC($5,280) · 2차 VAC($2,065) · 4년 AoS 확인","check_scope_en":"PageSchemaHiddenField verification of 103 online lodgement, VAC & 4-yr AoS","cadence_ko":"매월 정기 폴링","cadence_en":"Monthly check","url":"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/parent-103","sourceKind":"public_policy_guidance","status":"live","fetchStatus":"http_200_ok","contentCheckStatus":"substantive_content_verified","ruleMatchStatus":"matched","reviewStatus":"verified_2026-10-20","http_code":200,"sha256":"ac297de359acb300fc9735341b0aa2b476deca86c4322cd56f983bde6d31bb22","bytes":1498846,"method":"insane-search-live","changed_since_last_poll":true,"checked_at":"2026-10-20T23:40:02+10:00"},{"id":"ha_subclass_804","authority":"호주 연방 이민성 (Department of Home Affairs)","authority_ko":"호주 연방 이민성 (Department of Home Affairs)","authority_en":"Department of Home Affairs","title":"Subclass 804 — Aged Parent (Residence) Visa","title_ko":"Subclass 804 — 일반 고령부모 영주비자 (Aged Parent Visa · Onshore 67+)","title_en":"Subclass 804 — Aged Parent (Residence) Visa","check_scope_ko":"만 67세 유효접수 요건 · 온쇼어 BVA 부여 · 42년 대기 및 PIC 4005 2회 신검 요건 확인","check_scope_en":"PageSchemaHiddenField verification of 804 Age 67 rule, BVA & PIC 4005","cadence_ko":"매월 정기 폴링","cadence_en":"Monthly check","url":"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/aged-parent-804","sourceKind":"public_policy_guidance","status":"live","fetchStatus":"http_200_ok","contentCheckStatus":"substantive_content_verified","ruleMatchStatus":"matched","reviewStatus":"verified_2026-10-20","http_code":200,"sha256":"623aa000721458f1eaaf48d316daf47dc59922c14378b227a3966472fb11b847","bytes":1492532,"method":"insane-search-live","changed_since_last_poll":true,"checked_at":"2026-10-20T23:40:02+10:00"},{"id":"ha_subclass_870","authority":"호주 연방 이민성 (Department of Home Affairs)","authority_ko":"호주 연방 이민성 (Department of Home Affairs)","authority_en":"Department of Home Affairs","title":"Subclass 870 — Sponsored Parent (Temporary) Visa","title_ko":"Subclass 870 — 스폰서 임시 부모비자 (3년 $5,895 / 5년 $11,785 · 최대 10년)","title_en":"Subclass 870 — Sponsored Parent (Temporary) Visa","check_scope_ko":"가족균형테스트 면제 · 스폰서 과세소득($83,454.80) · 870 소지 중 영주 부모비자 접수 금지(Item 1124/1130) 파싱","check_scope_en":"PageSchemaHiddenField verification of 870 fees, income threshold & permanent bar","cadence_ko":"매월 정기 폴링","cadence_en":"Monthly check","url":"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/sponsored-parent-temporary-870","sourceKind":"public_policy_guidance","status":"live","fetchStatus":"http_200_ok","contentCheckStatus":"substantive_content_verified","ruleMatchStatus":"matched","reviewStatus":"verified_2026-10-20","http_code":200,"sha256":"f438bab32a333647e4a95d6ad0ae6b94e30a118b5f11f1acb82f7358b83ee8b8","bytes":1492037,"method":"insane-search-live","changed_since_last_poll":true,"checked_at":"2026-10-20T23:40:02+10:00"},{"id":"ha_bof_test","authority":"호주 연방 이민성 (Department of Home Affairs)","authority_ko":"호주 연방 이민성 (Department of Home Affairs)","authority_en":"Department of Home Affairs","title":"Balance of Family Test Official Rules (reg 1.05)","title_ko":"가족균형테스트 (Balance of Family Test — Migration Regulations reg 1.05)","title_en":"Balance of Family Test Official Rules (reg 1.05)","check_scope_ko":"자녀 1~10명 구간별 호주 영주권·시민권 자녀 최소 요건표 및 의붓/입양 자녀 산입 규칙 확인","check_scope_en":"Verification of Balance of Family Test 1-10 children mathematical matrix","cadence_ko":"분기별 폴링","cadence_en":"Quarterly check","url":"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/parent-103/balance-of-family-test","sourceKind":"public_policy_guidance","status":"live","fetchStatus":"http_200_ok","contentCheckStatus":"substantive_content_verified","ruleMatchStatus":"matched","reviewStatus":"verified_2026-10-20","http_code":200,"sha256":"6d0e5c4ac3ef279ba926d6e794a089dddc8fab6ef85be88781ebb3954f21a55e","bytes":1415707,"method":"insane-search-live","changed_since_last_poll":true,"checked_at":"2026-10-20T23:40:02+10:00"},{"id":"ha_planning_levels","authority":"호주 연방 이민성 (Department of Home Affairs)","authority_ko":"호주 연방 이민성 (Department of Home Affairs)","authority_en":"Department of Home Affairs","title":"Migration Program Planning Levels (Parent Stream Ceiling)","title_ko":"연간 이민 프로그램 계획 수준 (Migration Program Planning Levels)","title_en":"Migration Program Planning Levels (Parent Stream Ceiling)","check_scope_ko":"연간 부모비자 배정 쿼터(8,500석 -> FY26-27 계획치 7,060석 변동) 파싱","check_scope_en":"Verification of annual Parent visa stream planning ceiling (7,060 / 8,500 places)","cadence_ko":"매년 5월 연방 예산안 발표 및 7월 1일 폴링","cadence_en":"Annual May Budget & 1 July check","url":"https://immi.homeaffairs.gov.au/what-we-do/migration-program-planning-levels","sourceKind":"public_policy_guidance","status":"live","fetchStatus":"http_200_ok","contentCheckStatus":"substantive_content_verified","ruleMatchStatus":"matched","reviewStatus":"verified_2026-10-20","http_code":200,"sha256":"7248f5e9c92de48f3ab20aa86eaf7a3f7f269b7547670142c6611b19b87fd73d","bytes":18172,"method":"insane-search-verified-snapshot","changed_since_last_poll":false,"checked_at":"2026-10-20T23:40:02+10:00"},{"id":"leg_lin_26_042","authority":"호주 연방 법제처 (Federal Register of Legislation)","authority_ko":"호주 연방 법제처 (Federal Register of Legislation)","authority_en":"Federal Register of Legislation","title":"Migration (Granting of Parent and Other Family Visas) Instrument 2026 — LIN 26/042 (s 85 Cap)","title_ko":"Migration (Granting of Parent and Other Family Visas) Instrument 2026 — LIN 26/042 (F2026L00724)","title_en":"Migration (Granting of Parent and Other Family Visas) Instrument 2026 — LIN 26/042 (s 85 Cap)","check_scope_ko":"Migration Act s 85 연간 최대 발급 상한 고시(기여제 6,800석 + 일반 부모 1,700석 = 8,500석) 감시","check_scope_en":"OData v4 & statutory text check of s 85 Parent Visa Maximum Grant Determination","cadence_ko":"매월 법제처 OData API 폴링","cadence_en":"Monthly Federal Register OData API check","url":"https://www.legislation.gov.au/F2026L00724/latest/text","sourceKind":"public_legislation","status":"live","fetchStatus":"http_200_ok","contentCheckStatus":"substantive_content_verified","ruleMatchStatus":"matched","reviewStatus":"verified_2026-10-20","http_code":200,"sha256":"8bf5f32c9d3fffeed6198e45858e8eb75f785aa18ca5849dee6d6388c6daada6","bytes":85209,"method":"insane-search-live","changed_since_last_poll":true,"checked_at":"2026-10-20T23:40:02+10:00"},{"id":"sa_aos_policy","authority":"호주 서비스청 (Services Australia)","authority_ko":"호주 서비스청 (Services Australia)","authority_en":"Services Australia","title":"Services Australia — Assurance of Support (AoS) Policy & Bank Guarantee Rules","title_ko":"Assurance of Support (AoS) — 재정보증 제도·기간(10년/4년)·은행보증금($10k/$14k/$20k)","title_en":"Services Australia — Assurance of Support (AoS) Policy & Bank Guarantee Rules","check_scope_ko":"기여제 10년($10,000/$14,000) · 비기여제 4년($5,000/$7,000) · 법인 보증($20,000) 규정 확인","check_scope_en":"Verification of AoS bond durations, individual & corporate security amounts","cadence_ko":"분기별 및 매년 7월 1일 폴링","cadence_en":"Quarterly & 1 July check","url":"https://www.servicesaustralia.gov.au/assurance-support","sourceKind":"public_policy_guidance","status":"live","fetchStatus":"http_200_ok","contentCheckStatus":"substantive_content_verified","ruleMatchStatus":"matched","reviewStatus":"verified_2026-10-20","http_code":200,"sha256":"1282939d374cb9759fffab64f19214d8840b85d7e71d57a1e228222dffffec89","bytes":206055,"method":"insane-search-live","changed_since_last_poll":true,"checked_at":"2026-10-20T23:40:02+10:00"},{"id":"sa_medicare_rhca","authority":"호주 서비스청 (Services Australia)","authority_ko":"호주 서비스청 (Services Australia)","authority_en":"Services Australia","title":"Services Australia — Enrolling in Medicare & Reciprocal Health Care Agreements (RHCA)","title_ko":"메디케어 가입 자격 및 상호의료협정(RHCA 11개국) · 부모비자 대기자 배제 규정","title_en":"Services Australia — Enrolling in Medicare & Reciprocal Health Care Agreements (RHCA)","check_scope_ko":"부모비자 BVA 대기자 Interim Medicare 배제 · 173/884 임시비자 메디케어 허용 · RHCA 11개국 명단 확인","check_scope_en":"Verification of Parent Visa interim Medicare exclusion, 173/884 inclusion & 11 RHCA nations","cadence_ko":"분기별 폴링","cadence_en":"Quarterly check","url":"https://www.servicesaustralia.gov.au/reciprocal-health-care-agreements","sourceKind":"public_policy_guidance","status":"live","fetchStatus":"http_200_ok","contentCheckStatus":"substantive_content_verified","ruleMatchStatus":"matched","reviewStatus":"verified_2026-10-20","http_code":200,"sha256":"57ffa518cbc56d0f2fa067473f711d3bfddde45e2641b0d9811203e7e87ee669","bytes":7108,"method":"insane-search-verified-snapshot","changed_since_last_poll":false,"checked_at":"2026-10-20T23:40:02+10:00"},{"id":"dss_guide_aos","authority":"호주 사회서비스부 (Department of Social Services)","authority_ko":"호주 사회서비스부 (Department of Social Services)","authority_en":"Department of Social Services (DSS)","title":"DSS Social Security Guide 9.4.3 (AoS Income Formula) & 10.27 (Korea-Australia Agreement)","title_ko":"Social Security Guide 9.4.3 & 10.27 — AoS 보증인 과세소득 산식 & 한-호 사회보장협정","title_en":"DSS Social Security Guide 9.4.3 (AoS Income Formula) & 10.27 (Korea-Australia Agreement)","check_scope_ko":"JobSeeker 기준액($22,578) 기반 AoS 소득 공식($45,156 / $67,734) 및 한-호 국민연금/노령연금 합산 규정 확인","check_scope_en":"Verification of JSP cut-off AoS income threshold formula & Korea-AU pension totalisation","cadence_ko":"매년 3월 20일 · 7월 1일 · 9월 20일 연금/수당 연동일 폴링","cadence_en":"20 March, 1 July & 20 September indexation check","url":"https://guides.dss.gov.au/social-security-guide/9/4/3","sourceKind":"public_policy_guidance","status":"live","fetchStatus":"http_200_ok","contentCheckStatus":"substantive_content_verified","ruleMatchStatus":"matched","reviewStatus":"verified_2026-10-20","http_code":200,"sha256":"87a0c1f1cd6651afb8b712070008d7c4ad355b9cc1101eb3361730025241dd68","bytes":32159,"method":"insane-search-live","changed_since_last_poll":true,"checked_at":"2026-10-20T23:40:02+10:00"}]};

let currentLang = "ko";
let currentSurvivalFilter = "all";
let currentLinksCat = "all";

const I18N = {
  ko: {
    brandTag: "IMMIGRATION LAW · PARENT VISAS (103 · 143 · 173 · 804 · 864 · 884 · 870)",
    pollBadge: "출처 모니터 (2026-10-20 · 실시간 15/15 검증 완료)",
    navEnquiry: "박앤코 상담·문의하기 →",
    urgentBadge: "2026.10.06 최신 대기열 공시 & 법령 업데이트",
    urgentText: "연방 이민성 최신 공시(2026.08.31 기준, 2026.10.06 발표): 기여제(143/173) 2018년 11월 · 기여제 고령(864/884) 2020년 11월(Direction 117 온쇼어 우선심사로 2년 추월) · 2단계 전환(173→143 / 884→864) 2026년 5월(약 3~4개월 소요) · 일반(103) 2014년 3월 · 고령(804) 2014년 10월 심사 중 [1] / 2026.04.22부터 103·143·804·864 ImmiAccount 온라인 접수 의무화(173·884는 종이 우편 유지) [3–8] / 2024.12.17부터 고령부모(804/864/884) 만 67세 요건이 접수 유효 요건(Sch 1)으로 격상 [5,8] / FY2026–27 재정보증(AoS) 보증인 소득 기준: 1인 보증+부모 1명 $45,156 · 부모 2명 $67,734 [13,15].",
    urgentLink: "[1]–[18] 1차 출처 각주 ↓",
    heroOverline: "AUSTRALIAN PARENT VISAS (SUBCLASSES 103 · 143 · 173 · 804 · 864 · 884 · 870) NAVIGATOR",
    heroTitle: "호주 부모초청 비자 대기열(Queue) 속도 분석 · 15~42년 대기기간 생존 가이드 & 총비용·AoS 통합 네비게이터",
    heroLead: "호주 연방 이민성(Department of Home Affairs)의 부모비자 대기열 공시 페이지, 내부 비자 수수료 API, 연방 법제처 쿼터 고시(LIN 26/042 · F2026L00724), FOI 공개 통계(총 대기인원 158,468명), PAM3 심사지침(VM-3058 · VM-6327 · Direction 103 & 117), 그리고 호주 서비스청(Services Australia) 재정보증(AoS)·메디케어·노인요양 규정을 한곳에 집대성한 인터랙티브 플랫폼이에요. 시각화 그래프와 시뮬레이터를 통해 우리 부모님의 예상 승인 시점, 총 소요 비용, 재정보증인(Assurer) 자격·소득 기준, 대기 중 지원되는 권리와 배제되는 혜택(메디케어·요양원·PIC 4005 2차 신체검사 리스크), 그리고 22개 필수 정부 링크를 한눈에 확인해 보세요.",
    heroPrimaryCta: "내 대기순번 & 영주권 승인 연도 시뮬레이터 ↓",
    heroSecondaryCta: "총비용(TCO) & AoS 보증인 자격·소득 계산기 ↓",
    pillM1: "01 · 실시간 대기열 & 3대 분석 그래프",
    pillM2: "02 · 내 순번 & 승인 연도 시뮬레이터",
    pillM3: "03 · 7대 비자 맞춤 경로 & 가족균형 진단기",
    pillM4: "04 · 총비용(TCO) & AoS 보증인 소득 계산기",
    pillM5: "05 · 대기기간 생존 가이드 (메디케어·요양·신검)",
    pillM6: "06 · 22개 원스톱 공식 링크 & Poller",
    specName: "박창민 대표변호사 (Chang Min Park)",
    specRole: "QLS Accredited Specialist in Immigration Law",
    specSlogan: "\"삶에 집중하세요, 법률은 저희가 맡겠습니다.\"",
    specMeta: "법무법인 박앤코 (Park & Co Lawyers · Underwood QLD) | 공식 이메일: enquiry@parkcolawyers.com",
    specBtn: "온라인 문의 바로가기 (parklawyers.com.au) →",
    stat1Over: "CONTRIBUTORY RELEASE",
    stat1Val: "18.11 / 20.11",
    stat1Sub: "143/173(2018.11) vs 864/884(2020.11) [1]",
    stat2Over: "2-STAGE STEP-UP (173→143)",
    stat2Val: "약 3~4개월",
    stat2Sub: "2026.05 심사 중 · Direction 103 대기열 면제 [1]",
    stat3Over: "NEW WAIT ESTIMATE",
    stat3Val: "18년 / 42년",
    stat3Sub: "기여제 약 18년 · 일반(103/804) 약 42년 [1]",
    stat4Over: "BACKLOG vs ANNUAL CAP",
    stat4Val: "158,468명",
    stat4Sub: "LIN 26/042 상한 8,500석 · 계획 7,060석 [11,12]",
    stat5Over: "2ND VAC & AOS BOND",
    stat5Val: "$43,600 / $14k",
    stat5Sub: "기여제 1인당 2차 VAC · 부부 10년 AoS 본드 [2,13]",
    stat6Over: "AOS INCOME (FY26–27)",
    stat6Val: "$45,156 / $67,734",
    stat6Sub: "1인 보증 기준 부모 1명 / 2명 과세소득 [15]",
    m1Overline: "MODULE 01 · LIVE QUEUE RELEASE DASHBOARD, VISUAL CHARTS & LEGAL INFERENCES",
    m1Title: "연방 이민성 부모비자 2단계 대기열 구조, 공식 현황표 & 3대 핵심 시각화 그래프",
    m1Sub: "Migration Act 1958 s 85(연간 발급 쿼터 캡) 및 ss 87/87A에 따라 모든 영주·임시 부모초청 비자(870 제외)는 1단계 대기열 편입 심사(Queue Assessment)와 2단계 최종 비자 발급 심사(Visa Assessment / Queue Release)의 2단계로 처리돼요.",
    qTableHeading: "공식 부모비자 단계별 심사 기준일 현황표 (기준일: 2026.08.31 · 공시일: 2026.10.06)",
    qLiveStamp: "실시간 SharePoint #contentBox 파싱 완료",
    qCol1: "비자 종류 (Subclass)",
    qCol2: "신규 접수 수령 확인",
    qCol3: "1단계: Queue Assessment (대기열 편입 심사 중인 접수월)",
    qCol4: "1단계 적체 시차",
    qCol5: "2단계: Visa Assessment (최종 심사 중인 Queue Release Date)",
    qCol6: "신규 신청 예상 대기기간",
    chart1Title: "그래프 1 · 서브클래스별 1단계(대기열 편입) 적체 vs 2단계(최종 발급) 기준일 시차 (단위: 개월)",
    chart1Sub: "2026년 8월 기준, 접수 후 Queue Date를 받기까지 걸리는 1단계 적체(28~43개월)와 최종 비자 발급 컷오프까지의 시차(69~149개월)를 비교해요.",
    c1Leg1: "1단계 Queue Assessment 적체 (개월)",
    c1Leg2: "2단계 Queue Release 시차 (개월)",
    chart2Title: "그래프 2 · 실제 큐 전진 속도(Queue Velocity) 실증 추적 (2020.09 ~ 2026.08)",
    chart2Sub: "현실 시간 1년(12개월)이 지날 때 기여제(143) 대기열은 연평균 5.07개월만 전진해요. 반면 고령 기여제(864)는 Direction 117 온쇼어 우선심사로 2020년 11월까지 24개월 도약했어요.",
    c2Leg1: "기여제 고령 864/884 (Nov 2020)",
    c2Leg2: "기여제 일반 143/173 (Nov 2018 · 연 5.07개월 전진)",
    c2Leg3: "일반 부모 103 (Mar 2014)",
    chart3Title: "그래프 3 · 대기 적체 인원(158,468명) vs 연간 쿼터(8,500석 / 7,060석) 및 804 비자 실태",
    chart3Sub: "FOI(DA 26/01/00017 & DA 25/07/00301) 실측 데이터: 기여제 100,762명 vs 연간 6,800석 / 비기여제 57,706명 vs 연간 1,700석(804 비자는 연 37건 승인 vs 475건 이탈).",
    c3Leg1: "현재 대기 인원 (On-hand Backlog)",
    c3Leg2: "연간 법정 상한 (LIN 26/042 s 85 Cap)",
    infHeading: "이민성 대기열 공시 행간에서 도출되는 5대 핵심 법률·통계 추론",
    infSub: "단순히 날짜만 보는 것을 넘어, Ministerial Direction No. 103 · No. 117 및 PAM3 지침을 결합하면 다음 5가지 결정적 실무 전략이 도출돼요.",
    m2Overline: "MODULE 02 · INTERACTIVE QUEUE POSITION & RELEASE YEAR SIMULATOR",
    m2Title: "내 부모비자 대기순번 & 1·2단계 예상 도달 연도 정밀 시뮬레이터",
    m2Sub: "2018년 6월 1일 이후 신청분은 접수일(Lodgement Date)이 아니라 1차 심사 완료일(Queue Assessment Date)이 공식 대기열 기준일(Queue Date)이 돼요.",
    simFormTitle: "대기열 시뮬레이션 조건 입력",
    simResultTitle: "시뮬레이션 진단 결과",
    m3Overline: "MODULE 03 · 7-SUBCLASS PATHWAY SELECTOR & BALANCE OF FAMILY TEST (REG 1.05)",
    m3Title: "우리 가족 맞춤 부모비자 경로 진단기 & 가족균형테스트(Reg 1.05) 자동 판정",
    m3Sub: "부모님 두 분의 연세(만 67세 이상 여부 및 2024.12.17 유효접수 규칙), 현재 체류지, 소지 비자 조건, 자녀 구성을 선택하면 가족균형테스트 통과 여부와 최적 신청 순서를 진단해 드려요.",
    wizFormTitle: "부모님 연령 · 체류 상태 & 자녀 구성 입력",
    wizResultTitle: "맞춤 경로 & 가족균형테스트(Reg 1.05) 판정 결과",
    subMatrixTitle: "호주 부모초청 비자 7대 서브클래스 요건·수수료·권리 총괄 비교표 (FY2026–27)",
    m4Overline: "MODULE 04 · 20-YEAR TOTAL COST (TCO), ASSURER ELIGIBILITY & SERVICES AUSTRALIA AOS CALCULATOR",
    m4Title: "부모초청 총비용(1·2차 VAC + AoS 본드) & 재정보증인(Assurer) 자격·최소 과세소득 정밀 계산기",
    m4Sub: "이민성 내부 가격 API(GetPriceList) 기준 1·2차 비자신청비와 Social Security (Assurance of Support) Determination 2018 ss 7–18 · DSS Guide 9.4 공식을 기반으로 보증인 적격 여부, 과세소득 달성 여부, 공동 보증·법인 보증 대안, 870 스폰서 소득($83,454.80)을 한 번에 진단해요.",
    costFormTitle: "비용 및 재정보증인(Assurer) 자격·소득 시뮬레이션 입력",
    costResultTitle: "총비용(TCO) · 보증인 자격 & AoS 과세소득 판정 결과",
    chart4Title: "그래프 4 · 선택 인원 기준 경로별 정부 납부 총액(1차 VAC + 2차 VAC + AoS 본드) 비교 (단위: AUD)",
    chart4Sub: "부모님 인원(1인/2인) 선택에 따라 5대 주요 경로의 1차 신청비, 2차 기여금, AoS 은행보증금 구성을 실시간 비교해요.",
    c4Leg1: "1차 비자신청비 (1st VAC)",
    c4Leg2: "2차 기여금/신청비 (2nd VAC)",
    c4Leg3: "재정보증 은행본드 (AoS Bond — 만기 환급형)",
    aosDeepHeading: "재정보증인(Assurer) 자격 요건 · 인정 소득 범위 · 법인 보증 & 870 스폰서 소득 총정리",
    aosDeepSub: "Social Security (Assurance of Support) Determination 2018 (ss 7–18) 및 DSS Social Security Guide 9.4 원문에 따른 핵심 실무 기준이에요.",
    m5Overline: "MODULE 05 · 15–42 YEAR WAITING PERIOD SURVIVAL GUIDE: ELIGIBLE VS NOT SUPPORTED",
    m5Title: "15~42년 대기기간 생존 가이드: 지원되는 권리(Eligible) vs 배제되는 복지(Exclusions) & 8대 실무 함정",
    m5Sub: "대기 기간 동안 브리징 비자 취업권, 해외 출국 시 BVB 트랩, 메디케어 전면 배제 및 173/884 우회 전략, PIC 4005($86,000) 2차 신체검사 리스크, 정부 노인요양원 배제, 한-호 사회보장협정 연금 합산까지 정리했어요.",
    survTableTitle: "대기 단계별 체류 · 취업 · 메디케어 · 요양 · 연금 지원 여부 총괄 매트릭스",
    m6Overline: "MODULE 06 · ONE-STOP OFFICIAL LINKS DIRECTORY (22 BOOKMARKS) & POLLER OPERATIONS",
    m6Title: "부모비자 대기자·스폰서를 위한 22개 원스톱 공식 링크 허브 & 정기 모니터링(Poller) 아키텍처",
    m6Sub: "대기열 조회, PVC 서류 변경 웹폼, ImmiAccount, VEVO, BVB 신청, Services Australia AoS, 메디케어, 한-호 사회보장협정, My Aged Care까지 22개 정부 공식 사이트 링크와 15개 1차 출처 감시 스케줄이에요.",
    pollerSchedTitle: "본 시스템의 15대 1차 출처(Primary Source) 자동 폴링(Poller) 및 데이터 집계 주기",
    modalTitle: "공식 1차 출처 실시간 모니터 (15/15 Live Verified)"
  },
  en: {
    brandTag: "IMMIGRATION LAW · PARENT VISAS (103 · 143 · 173 · 804 · 864 · 884 · 870)",
    pollBadge: "Source Monitor (2026-10-20 · 15/15 Live Verified)",
    navEnquiry: "Book a Consultation →",
    urgentBadge: "6 OCT 2026 QUEUE RELEASE & STATUTORY UPDATE",
    urgentText: "Latest Home Affairs Queue Release (as at 31 Aug 2026, published 6 Oct 2026): Contributory (143/173) Nov 2018 · Contributory Aged (864/884) Nov 2020 (2 yrs ahead under Direction 117 onshore priority) · 2-Stage Step-up (173→143 / 884→864) May 2026 (~3–4 mos) · Parent (103) Mar 2014 · Aged Parent (804) Oct 2014 [1] / From 22 Apr 2026, 103·143·804·864 must be lodged online via ImmiAccount (173·884 remain paper) [3–8] / From 17 Dec 2024, Age 67 is a Schedule 1 validity requirement for 804/864/884 [5,8] / FY2026–27 AoS Assurer Income: $45,156 (1 parent) · $67,734 (2 parents) [13,15].",
    urgentLink: "[1]–[18] Primary Sources ↓",
    heroOverline: "AUSTRALIAN PARENT VISAS (SUBCLASSES 103 · 143 · 173 · 804 · 864 · 884 · 870) NAVIGATOR",
    heroTitle: "Australian Parent Visa Queue Velocity, 15–42 Year Waiting Period Survival Guide & TCO / AoS Navigator",
    heroLead: "Built directly from Department of Home Affairs Queue Release tables, internal Visa Pricing APIs, Federal Register s 85 capping instruments (LIN 26/042), FOI backlog disclosures (158,468 waiting), PAM3 guidelines (VM-3058, VM-6327, Directions 103 & 117), and Services Australia Assurance of Support (AoS), Medicare & Aged Care rules. Explore interactive visual charts, simulate your queue release date, verify Assurer eligibility and income thresholds, review waiting-period exclusions (Medicare, Aged Care, PIC 4005 second medical exam), and access 22 official government bookmarks.",
    heroPrimaryCta: "Simulate Queue Position & Release Year ↓",
    heroSecondaryCta: "Calculate 20-Year TCO & AoS Assurer Income ↓",
    pillM1: "01 · Live Queue & 3 Visual Charts",
    pillM2: "02 · Queue Position Simulator",
    pillM3: "03 · 7-Subclass Wizard & Balance of Family",
    pillM4: "04 · TCO & AoS Assurer Calculator",
    pillM5: "05 · Waiting Period Survival Matrix",
    pillM6: "06 · 22 Official Links & Poller",
    specName: "Chang Min Park (Principal Solicitor)",
    specRole: "QLS Accredited Specialist in Immigration Law",
    specSlogan: "\"Focus on your life; we will take care of the law.\"",
    specMeta: "Park & Co Lawyers (Underwood QLD) | Official Contact: enquiry@parkcolawyers.com",
    specBtn: "Enquire Online (parklawyers.com.au) →",
    stat1Over: "CONTRIBUTORY RELEASE",
    stat1Val: "Nov 18 / Nov 20",
    stat1Sub: "143/173 (Nov 2018) vs 864/884 (Nov 2020) [1]",
    stat2Over: "2-STAGE STEP-UP (173→143)",
    stat2Val: "~3–4 Months",
    stat2Sub: "Assessing May 2026 · Direction 103 Queue Exempt [1]",
    stat3Over: "NEW WAIT ESTIMATE",
    stat3Val: "18 Yrs / 42 Yrs",
    stat3Sub: "Contributory ~18 yrs · Non-Contributory ~42 yrs [1]",
    stat4Over: "BACKLOG vs ANNUAL CAP",
    stat4Val: "158,468 Queued",
    stat4Sub: "LIN 26/042 Cap 8,500 · FY26–27 Plan 7,060 [11,12]",
    stat5Over: "2ND VAC & AOS BOND",
    stat5Val: "$43,600 / $14k",
    stat5Sub: "2nd VAC per adult · Couple 10-yr AoS Bond [2,13]",
    stat6Over: "AOS INCOME (FY26–27)",
    stat6Val: "$45,156 / $67,734",
    stat6Sub: "Single Assurer for 1 Parent / 2 Parents [15]",
    m1Overline: "MODULE 01 · LIVE QUEUE RELEASE DASHBOARD, VISUAL CHARTS & LEGAL INFERENCES",
    m1Title: "Two-Stage Parent Visa Queue Architecture, Official Table & 3 Visual Analytical Charts",
    m1Sub: "Under Migration Act 1958 s 85 (annual cap) and ss 87/87A, all permanent and temporary parent visas (except 870) are processed in two stages: Stage 1 Queue Assessment and Stage 2 Final Visa Assessment (Queue Release).",
    qTableHeading: "Official Parent Visa Milestone & Queue Release Table (As at 31 Aug 2026 · Updated 6 Oct 2026)",
    qLiveStamp: "Live Parsed from SharePoint #contentBox",
    qCol1: "Visa Subclass",
    qCol2: "Acknowledgement",
    qCol3: "Stage 1: Queue Assessment (Currently Assessing Lodgement Month)",
    qCol4: "Stage 1 Lag",
    qCol5: "Stage 2: Visa Assessment (Queue Release Date Cutoff)",
    qCol6: "New Application Estimate",
    chart1Title: "Chart 1 · Stage 1 (Queue Assessment) Lag vs Stage 2 (Queue Release) Cutoff Gap (Months)",
    chart1Sub: "As at August 2026, comparing the 28–43 month backlog just to receive a Queue Date against the 69–149 month gap to final Queue Release.",
    c1Leg1: "Stage 1 Queue Assessment Lag (Months)",
    c1Leg2: "Stage 2 Queue Release Gap (Months)",
    chart2Title: "Chart 2 · Empirical Queue Advancement Velocity (Sep 2020 – Aug 2026)",
    chart2Sub: "Per 12 calendar months, Contributory (143) Queue Release advances only ~5.07 months, whereas Onshore Aged (864) jumped +24 months to Nov 2020 under Direction 117.",
    c2Leg1: "Contributory Aged 864/884 (Nov 2020)",
    c2Leg2: "Contributory General 143/173 (Nov 2018 · 5.07 mos/yr)",
    c2Leg3: "Parent 103 (Mar 2014)",
    chart3Title: "Chart 3 · On-hand Backlog (158,468) vs Annual Cap (8,500 / 7,060) & Subclass 804 Reality",
    chart3Sub: "FOI (DA 26/01/00017 & DA 25/07/00301): 100,762 Contributory vs 6,800 cap / 57,706 Non-Contributory vs 1,700 cap (Subclass 804 had only 37 grants vs 475 exits in FY24–25).",
    c3Leg1: "On-hand Backlog (Persons)",
    c3Leg2: "Annual Statutory Cap (LIN 26/042 s 85)",
    infHeading: "5 Critical Legal & Statistical Inferences Drawn from the Official Queue Page",
    infSub: "Combining the published queue dates with Ministerial Directions No. 103 & No. 117 and PAM3 reveals five essential strategic insights.",
    m2Overline: "MODULE 02 · INTERACTIVE QUEUE POSITION & RELEASE YEAR SIMULATOR",
    m2Title: "Interactive Queue Position & Stage 1 / Stage 2 Release Year Simulator",
    m2Sub: "For applications lodged on or after 1 June 2018, the Queue Date is assigned when Stage 1 Queue Assessment completes—NOT on the initial lodgement date.",
    simFormTitle: "Enter Your Application Parameters",
    simResultTitle: "Queue & Medical Risk Simulation Result",
    m3Overline: "MODULE 03 · 7-SUBCLASS PATHWAY SELECTOR & BALANCE OF FAMILY TEST (REG 1.05)",
    m3Title: "Interactive 7-Subclass Pathway Selector & Balance of Family Test (Reg 1.05) Calculator",
    m3Sub: "Evaluate Age 67 Schedule 1 validity rules (effective 17 Dec 2024), onshore Bridging Visa eligibility, the Subclass 870 asymmetric lockout bar, and Balance of Family math.",
    wizFormTitle: "Enter Parent Ages, Location & Family Composition",
    wizResultTitle: "Recommended Pathway & Balance of Family Verdict",
    subMatrixTitle: "Complete 7-Subclass Parent Visa Comparison Matrix (FY2026–27)",
    m4Overline: "MODULE 04 · 20-YEAR TOTAL COST (TCO), ASSURER ELIGIBILITY & SERVICES AUSTRALIA AOS CALCULATOR",
    m4Title: "Total Cost (1st/2nd VAC + AoS Bond) & Assurer Eligibility / Taxable Income Calculator",
    m4Sub: "Calculates exact 1st & 2nd VACs and applies the Social Security (Assurance of Support) Determination 2018 ss 7–18 formula ($22,578 × [Assurers + Assured Parents] + $2,942 per child) to verify Assurer eligibility, joint/corporate options, and Subclass 870 sponsor income ($83,454.80).",
    costFormTitle: "Enter Pathway & Assurer Parameters",
    costResultTitle: "Total Cost (TCO), Assurer Eligibility & AoS Income Verdict",
    chart4Title: "Chart 4 · Total Government Cost Breakdown by Pathway (1st VAC + 2nd VAC + AoS Bond, AUD)",
    chart4Sub: "Real-time comparison across the 5 major parent visa pathways for your selected number of parents.",
    c4Leg1: "1st Installment VAC",
    c4Leg2: "2nd Installment VAC",
    c4Leg3: "AoS Bank Guarantee Bond (Refundable after 10/4 yrs)",
    aosDeepHeading: "Assurer Eligibility Rules, Assessable Income Components, Corporate Bond & 870 Sponsor Income",
    aosDeepSub: "Statutory rules under Social Security (Assurance of Support) Determination 2018 (ss 7–18) and DSS Social Security Guide 9.4.",
    m5Overline: "MODULE 05 · 15–42 YEAR WAITING PERIOD SURVIVAL GUIDE: ELIGIBLE VS NOT SUPPORTED",
    m5Title: "15–42 Year Waiting Period Survival Guide: Eligible Rights vs Welfare Exclusions & 8 Traps",
    m5Sub: "Everything waiting applicants and sponsors must know: Bridging Visa work & travel rules, Medicare exclusion vs RHCA & 173/884 unlock, PIC 4005 ($86,000) second medical exam, My Aged Care subsidies, and Korea-Australia pension totalisation.",
    survTableTitle: "Waiting Period Rights & Welfare Eligibility Matrix Across 4 Stages",
    m6Overline: "MODULE 06 · ONE-STOP OFFICIAL LINKS DIRECTORY (22 BOOKMARKS) & POLLER OPERATIONS",
    m6Title: "One-Stop Directory of 22 Official Government Links & 15-Source Poller Schedule",
    m6Sub: "Direct access to all 22 essential government portals for waiting parent visa families plus our automated primary-source monitoring schedule.",
    pollerSchedTitle: "Automated Primary-Source Poller Schedule (15 Official Endpoints)",
    modalTitle: "Live Primary-Source Monitor (15/15 Verified)"
  }
};

function fmtAud(n) {
  return "$" + Math.round(Number(n) || 0).toLocaleString("en-AU");
}

function renderPipelineFlow() {
  const box = document.getElementById("pipeline-flow-container");
  if (!box) return;
  const stages = currentLang === "ko" ? [
    {
      step: "STAGE 0 · 접수 (Lodgement)",
      title: "ImmiAccount 온라인 vs 종이 접수",
      body: "<strong>2026.04.22</strong>부터 <code>103·143·804·864</code>는 ImmiAccount 온라인 접수가 의무화되었어요. 반면 임시 비자인 <code>173·884</code>는 여전히 서호주 Perth 부모비자센터(PVC)로 종이 우편 접수해야 해요 [3–8]."
    },
    {
      step: "STAGE 1 · 대기열 편입 심사 (Queue Assessment)",
      title: "28~43개월 적체 & 2018.06.01 함정",
      body: "스폰서십·가족균형(Reg 1.05)·고령(67세+) 요건을 1차 심사해 <strong>Queue Date</strong>를 부여해요. ⚠️ <strong>2018.06.01 이후 신청분은 '접수일'이 아니라 '1차 심사 완료일'이 Queue Date</strong>가 되어 28~43개월이 추가 소요돼요 [1,16]."
    },
    {
      step: "STAGE 2 · 대기열 동결 (s 85 Cap Queue)",
      title: "대기 158,468명 vs 연간 8,500석(계획 7,060석)",
      body: "Migration Act s 85 연간 상한(<code>LIN 26/042</code> 기여제 6,800석 + 일반 1,700석; FY26–27 계획 7,060석)에 묶여 순번을 기다려요. 현실 1년당 기여제 큐는 약 <strong>5.07개월</strong> 전진해요 [11,12]."
    },
    {
      step: "STAGE 3 · 최종 심사 (Queue Release)",
      title: "2차 신검(PIC 4005) + AoS + 2차 VAC",
      body: "Queue Release Date 도달 시 개시돼요. ① <strong>2차 신체검사(PIC 4005 · $86,000 상한 · 면제 불가)</strong>, ② <strong>Services Australia AoS 승인 및 CBA 본드($10k/$14k)</strong>, ③ <strong>2차 기여금($43,600/인)</strong> 납부 후 승인돼요 [2,13]."
    }
  ] : [
    {
      step: "STAGE 0 · Lodgement",
      title: "ImmiAccount Online vs Paper Post",
      body: "From <strong>22 Apr 2026</strong>, <code>103·143·804·864</code> must be lodged online via ImmiAccount. Temporary <code>173·884</code> still require paper post to the Perth Parent Visa Centre (PVC) [3–8]."
    },
    {
      step: "STAGE 1 · Queue Assessment",
      title: "28–43m Backlog & 1 June 2018 Trap",
      body: "Core criteria (sponsorship, Balance of Family, Age 67+) are checked to assign a <strong>Queue Date</strong>. ⚠️ Post-1 June 2018 applications receive the <strong>assessment completion date</strong>—not lodgement date—as their Queue Date [1,16]."
    },
    {
      step: "STAGE 2 · Section 85 Cap Queue",
      title: "158,468 Backlog vs 8,500 Cap (7,060 Plan)",
      body: "Applications wait under the annual s 85 cap (<code>LIN 26/042</code>: 6,800 Contributory + 1,700 Parent; FY26–27 planning ceiling 7,060). Contributory queue advances ~<strong>5.07 queue-months per year</strong> [11,12]."
    },
    {
      step: "STAGE 3 · Final Visa Assessment",
      title: "2nd Medical (PIC 4005) + AoS + 2nd VAC",
      body: "Triggered at Queue Release: ① <strong>2nd Medical Exam (PIC 4005 · $86,000 threshold · no waiver)</strong>, ② <strong>Services Australia AoS & CBA Bank Guarantee ($10k/$14k)</strong>, and ③ <strong>2nd VAC ($43,600/adult)</strong> [2,13]."
    }
  ];
  box.innerHTML = stages.map(s => `
    <div class="pv-stage-box">
      <div class="st-step">${s.step}</div>
      <h4>${s.title}</h4>
      <p>${s.body}</p>
    </div>
  `).join("");
}

function renderOfficialQueueTable() {
  const tbody = document.getElementById("official-queue-tbody");
  if (!tbody) return;
  const rows = [
    {
      ko: ["<strong>2단계 영주 전환 (173→143 / 884→864)</strong>", "약 4주", "<span class='badge-ok'>N/A (대기열 면제)</span>", "0개월", "<strong>2026년 5월 접수분</strong>", "<span class='badge-ok'>약 3~4개월</span>"],
      en: ["<strong>2-Stage Step-Up (173→143 / 884→864)</strong>", "Approx. 4 weeks", "<span class='badge-ok'>N/A (Queue Exempt)</span>", "0 mos", "<strong>May 2026</strong>", "<span class='badge-ok'>~3–4 months</span>"]
    },
    {
      ko: ["<strong>기여제 부모 영주 (Subclass 143)</strong>", "약 4주", "2024년 4월 접수분", "<span class='badge-warn'>28개월 적체</span>", "<strong>2018년 11월 이전 편입분</strong>", "<strong>약 18년</strong>"],
      en: ["<strong>Contributory Parent (Subclass 143)</strong>", "Approx. 4 weeks", "Lodged April 2024", "<span class='badge-warn'>28 mos lag</span>", "<strong>Up to November 2018</strong>", "<strong>Approx. 18 years</strong>"]
    },
    {
      ko: ["<strong>기여제 부모 임시 (Subclass 173)</strong>", "약 4주", "2024년 4월 접수분", "<span class='badge-warn'>28개월 적체</span>", "<strong>2018년 11월 이전 편입분</strong>", "<strong>약 18년</strong>"],
      en: ["<strong>Contributory Parent Temp (Subclass 173)</strong>", "Approx. 4 weeks", "Lodged April 2024", "<span class='badge-warn'>28 mos lag</span>", "<strong>Up to November 2018</strong>", "<strong>Approx. 18 years</strong>"]
    },
    {
      ko: ["<strong>기여제 고령부모 영주 (Subclass 864 · Onshore 67+)</strong>", "약 4주", "2023년 4월 접수분", "<span class='badge-warn'>40개월 적체</span>", "<strong>2020년 11월 이전 편입분 (+2년 우선)</strong>", "<strong>약 18년</strong>"],
      en: ["<strong>Contributory Aged Parent (Subclass 864 · 67+)</strong>", "Approx. 4 weeks", "Lodged April 2023", "<span class='badge-warn'>40 mos lag</span>", "<strong>Up to November 2020 (+2 yrs ahead)</strong>", "<strong>Approx. 18 years</strong>"]
    },
    {
      ko: ["<strong>기여제 고령부모 임시 (Subclass 884 · Onshore 67+)</strong>", "약 4주", "2023년 4월 접수분", "<span class='badge-warn'>40개월 적체</span>", "<strong>2020년 11월 이전 편입분 (+2년 우선)</strong>", "<strong>약 18년</strong>"],
      en: ["<strong>Contributory Aged Temp (Subclass 884 · 67+)</strong>", "Approx. 4 weeks", "Lodged April 2023", "<span class='badge-warn'>40 mos lag</span>", "<strong>Up to November 2020 (+2 yrs ahead)</strong>", "<strong>Approx. 18 years</strong>"]
    },
    {
      ko: ["<strong>일반 부모 영주 (Subclass 103)</strong>", "약 4주", "2023년 2월 접수분", "<span class='badge-no'>42개월 적체</span>", "<strong>2014년 3월 이전 편입분</strong>", "<span class='badge-no'>약 42년</span>"],
      en: ["<strong>Parent (Subclass 103)</strong>", "Approx. 4 weeks", "Lodged February 2023", "<span class='badge-no'>42 mos lag</span>", "<strong>Queued up to March 2014</strong>", "<span class='badge-no'>Approx. 42 years</span>"]
    },
    {
      ko: ["<strong>일반 고령부모 영주 (Subclass 804 · Onshore 67+)</strong>", "약 4주", "2023년 1월 접수분", "<span class='badge-no'>43개월 적체</span>", "<strong>2014년 10월 이전 편입분</strong>", "<span class='badge-no'>약 42년 (연 37건 승인)</span>"],
      en: ["<strong>Aged Parent (Subclass 804 · Onshore 67+)</strong>", "Approx. 4 weeks", "Lodged January 2023", "<span class='badge-no'>43 mos lag</span>", "<strong>Queued up to October 2014</strong>", "<span class='badge-no'>Approx. 42 years (37/yr)</span>"]
    }
  ];
  tbody.innerHTML = rows.map(r => {
    const cols = currentLang === "ko" ? r.ko : r.en;
    return `<tr>${cols.map(c => `<td>${c}</td>`).join("")}</tr>`;
  }).join("");
}

function renderSvgChartsModule1() {
  // Chart 1: Stage 1 vs Stage 2 Lag (Months)
  const c1 = document.getElementById("svg-chart-lags");
  if (c1) {
    const items = [
      { label: currentLang === "ko" ? "173→143 전환" : "173→143 Step-up", s1: 0, s2: 3 },
      { label: currentLang === "ko" ? "864/884 (고령 기여)" : "864/884 (Aged Contrib)", s1: 40, s2: 69 },
      { label: currentLang === "ko" ? "143/173 (일반 기여)" : "143/173 (Contrib)", s1: 28, s2: 93 },
      { label: currentLang === "ko" ? "804 (고령 일반)" : "804 (Aged Parent)", s1: 43, s2: 142 },
      { label: currentLang === "ko" ? "103 (일반 부모)" : "103 (Parent)", s1: 42, s2: 149 }
    ];
    const W = 540, H = 250, L = 145, R = 48, T = 16, B = 28;
    const maxVal = 160;
    const rowH = (H - T - B) / items.length;
    let svg = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Stage 1 vs Stage 2 Lag Chart">`;
    [0, 40, 80, 120, 160].forEach(v => {
      const x = L + ((W - L - R) * v) / maxVal;
      svg += `<line x1="${x}" y1="${T}" x2="${x}" y2="${H - B}" stroke="#E5DFD5" stroke-dasharray="3,3"/>`;
      svg += `<text x="${x}" y="${H - 8}" text-anchor="middle" font-size="11" fill="#71717A">${v}m</text>`;
    });
    items.forEach((it, idx) => {
      const yBase = T + idx * rowH;
      const w1 = Math.max(2, ((W - L - R) * it.s1) / maxVal);
      const w2 = Math.max(2, ((W - L - R) * it.s2) / maxVal);
      svg += `<text x="${L - 8}" y="${yBase + 22}" text-anchor="end" font-size="12" font-weight="700" fill="#27272A">${it.label}</text>`;
      svg += `<rect x="${L}" y="${yBase + 6}" width="${w1}" height="12" rx="3" fill="#D97706"><title>Stage 1: ${it.s1} mos</title></rect>`;
      svg += `<text x="${L + w1 + 5}" y="${yBase + 16}" font-size="11" font-weight="700" fill="#B45309">${it.s1}m</text>`;
      svg += `<rect x="${L}" y="${yBase + 20}" width="${w2}" height="12" rx="3" fill="#6E252D"><title>Stage 2: ${it.s2} mos</title></rect>`;
      svg += `<text x="${L + w2 + 5}" y="${yBase + 30}" font-size="11" font-weight="700" fill="#6E252D">${it.s2}m</text>`;
    });
    svg += `</svg>`;
    c1.innerHTML = svg;
  }

  // Chart 2: Empirical Queue Advancement Velocity (2020.09 - 2026.08)
  const c2 = document.getElementById("svg-chart-velocity");
  if (c2) {
    const pts = [
      { p: "20.09", v143: 2016.42, v864: 2016.42, v103: 2010.83 },
      { p: "21.09", v143: 2016.42, v864: 2016.58, v103: 2010.83 },
      { p: "22.09", v143: 2016.83, v864: 2017.00, v103: 2011.42 },
      { p: "23.09", v143: 2017.42, v864: 2017.42, v103: 2011.83 },
      { p: "24.09", v143: 2017.75, v864: 2017.75, v103: 2012.67 },
      { p: "25.09", v143: 2018.42, v864: 2018.42, v103: 2013.33 },
      { p: "26.08", v143: 2018.92, v864: 2020.92, v103: 2014.25 }
    ];
    const W = 540, H = 250, L = 54, R = 24, T = 18, B = 32;
    const minY = 2010, maxY = 2022;
    const xPos = i => L + (i * (W - L - R)) / (pts.length - 1);
    const yPos = val => T + (H - T - B) * (1 - (val - minY) / (maxY - minY));

    let svg = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Historical Queue Velocity Chart">`;
    [2010, 2013, 2016, 2019, 2022].forEach(yr => {
      const yy = yPos(yr);
      svg += `<line x1="${L}" y1="${yy}" x2="${W - R}" y2="${yy}" stroke="#E5DFD5" stroke-dasharray="3,3"/>`;
      svg += `<text x="${L - 6}" y="${yy + 4}" text-anchor="end" font-size="11" fill="#71717A">${yr}</text>`;
    });
    pts.forEach((d, i) => {
      svg += `<text x="${xPos(i)}" y="${H - 10}" text-anchor="middle" font-size="11" fill="#52525B">${d.p}</text>`;
    });

    const line864 = pts.map((d, i) => `${xPos(i)},${yPos(d.v864)}`).join(" ");
    const line143 = pts.map((d, i) => `${xPos(i)},${yPos(d.v143)}`).join(" ");
    const line103 = pts.map((d, i) => `${xPos(i)},${yPos(d.v103)}`).join(" ");

    svg += `<polyline fill="none" stroke="#3B82F6" stroke-width="2.5" points="${line103}"/>`;
    svg += `<polyline fill="none" stroke="#6E252D" stroke-width="3" points="${line143}"/>`;
    svg += `<polyline fill="none" stroke="#10B981" stroke-width="3" stroke-dasharray="5,3" points="${line864}"/>`;

    pts.forEach((d, i) => {
      svg += `<circle cx="${xPos(i)}" cy="${yPos(d.v864)}" r="4" fill="#10B981"><title>864 (${d.p}): ${d.v864.toFixed(1)}</title></circle>`;
      svg += `<circle cx="${xPos(i)}" cy="${yPos(d.v143)}" r="4" fill="#6E252D"><title>143 (${d.p}): ${d.v143.toFixed(1)}</title></circle>`;
      svg += `<circle cx="${xPos(i)}" cy="${yPos(d.v103)}" r="3.5" fill="#3B82F6"><title>103 (${d.p}): ${d.v103.toFixed(1)}</title></circle>`;
    });
    svg += `</svg>`;
    c2.innerHTML = svg;
  }

  // Chart 3: Backlog vs Cap
  const c3 = document.getElementById("svg-chart-backlog");
  if (c3) {
    const groups = [
      {
        label: currentLang === "ko" ? "기여제 (143/173/864/884)" : "Contributory Stream",
        backlog: 100762,
        cap: 6800
      },
      {
        label: currentLang === "ko" ? "비기여제 (103/804)" : "Non-Contributory Stream",
        backlog: 57706,
        cap: 1700
      },
      {
        label: currentLang === "ko" ? "고령 804 (대기 vs 연 승인)" : "Subclass 804 (Wait vs Grants)",
        backlog: 27013,
        cap: 37
      }
    ];
    const W = 540, H = 250, L = 165, R = 68, T = 20, B = 28;
    const maxV = 110000;
    const rowH = (H - T - B) / groups.length;
    let svg = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Backlog vs Cap Chart">`;
    [0, 25000, 50000, 75000, 100000].forEach(v => {
      const x = L + ((W - L - R) * v) / maxV;
      svg += `<line x1="${x}" y1="${T}" x2="${x}" y2="${H - B}" stroke="#E5DFD5" stroke-dasharray="3,3"/>`;
      svg += `<text x="${x}" y="${H - 8}" text-anchor="middle" font-size="10.5" fill="#71717A">${(v / 1000)}k</text>`;
    });
    groups.forEach((g, idx) => {
      const yBase = T + idx * rowH;
      const wB = Math.max(3, ((W - L - R) * g.backlog) / maxV);
      const wC = Math.max(3, ((W - L - R) * g.cap) / maxV);
      svg += `<text x="${L - 8}" y="${yBase + 26}" text-anchor="end" font-size="12" font-weight="700" fill="#27272A">${g.label}</text>`;
      svg += `<rect x="${L}" y="${yBase + 8}" width="${wB}" height="14" rx="3" fill="#6E252D"/>`;
      svg += `<text x="${L + wB + 5}" y="${yBase + 19}" font-size="11" font-weight="700" fill="#6E252D">${g.backlog.toLocaleString()}</text>`;
      svg += `<rect x="${L}" y="${yBase + 25}" width="${wC}" height="14" rx="3" fill="#10B981"/>`;
      svg += `<text x="${L + wC + 5}" y="${yBase + 36}" font-size="11" font-weight="700" fill="#047857">${g.cap.toLocaleString()}/yr</text>`;
    });
    svg += `</svg>`;
    c3.innerHTML = svg;
  }
}

function renderInferencesGrid() {
  const box = document.getElementById("inferences-grid");
  if (!box) return;
  const items = currentLang === "ko" ? [
    {
      title: "1. 왜 173→143 / 884→864 전환만 Queue Assessment가 'N/A'이고 3~4개월 만에 나오는가?",
      body: "Ministerial Direction No. 103 s 7(2)(b)에 의해 1단계 임시비자(173/884) 소지자가 2년 내 영주비자(143/864)를 신청하면 <strong>최초 임시비자 접수일(약 18년 전)을 영주비자 접수일로 법정 의제(deemed)</strong>해요. 따라서 이미 Queue Release Date를 통과한 상태이므로 대기열 없이 즉시 심사돼요 [1,16]."
    },
    {
      title: "2. 왜 온쇼어 고령 기여제(864)는 최종 심사가 2년 빠른데(2020.11 vs 2018.11), 1차 심사는 1년 느린가?",
      body: "<strong>2단계가 2년 빠른 이유</strong>: 2026.07.25 발효 Ministerial Direction No. 117 s 8(2)(a)가 온쇼어 고령 기여제(864/884)에 최우선 순위를 부여하고 LIN 26/042에서 1,125석을 별도 배정했기 때문이에요. <strong>1단계가 1년 느린 이유(2023.04)</strong>: 오프쇼어 143과 달리 온쇼어 864는 대기열 편입 전에 1차 신체검사를 필수 완료해야 하고 팬데믹 이후 신청이 급증했기 때문이에요 [1,12,17]."
    },
    {
      title: "3. 2018년 6월 1일 Queue Date 규칙 변경이 만든 '보이지 않는 28~43개월 추가 대기' 함정",
      body: "2018.06.01 이전 신청분은 '접수일 = Queue Date'였으나, 이후 신청분은 <strong>'1차 심사(Queue Assessment) 통과일 = Queue Date'</strong>예요. 즉 2024년 4월에 143을 접수한 분은 2026년 8월에야 심사를 받아 <strong>2026년 8월 Queue Date</strong>를 부여받으므로 체감 대기기간이 훨씬 길어져요 [1,16]."
    },
    {
      title: "4. 왜 2026년 10월 6일 업데이트에서 예상 대기기간이 15→18년, 33→42년으로 급등했는가?",
      body: "법정 상한 고시(LIN 26/042)는 8,500석(기여제 6,800 + 일반 1,700)이나, 연방정부의 <strong>FY2026–27 Migration Program Planning Levels에서 부모비자 계획 배정치를 7,060석(-16.94% 삭감)</strong>으로 낮추면서(8,500 / 7,060 = 1.204배), 기존 15년 추정치가 18년, 비기여제는 42년으로 상향 공시되었어요 [1,11,12]."
    },
    {
      title: "5. Subclass 804(온쇼어 일반 고령부모)의 통계적 현실: 연 37건 승인 vs 475건 이탈",
      body: "FOI(DA 25/07/00301) 확인 결과, 27,013명이 804 비자를 대기 중이지만 FY2024–25 한 해 실제 발급 건수는 <strong>단 37건</strong>이었고 사망·철회·거절 이탈이 <strong>475건</strong>이었어요. 사실상 영주권 취득이 아닌 BVA 장기 체류 수단으로 기능하므로 메디케어 부재와 노인요양비 리스크를 반드시 대비해야 해요 [8,12]."
    }
  ] : [
    {
      title: "1. Why is 173→143 / 884→864 Queue Assessment 'N/A' with ~3–4 Months Turnaround?",
      body: "Under Ministerial Direction No. 103 s 7(2)(b), a Stage 2 permanent application (143/864) lodged by a Stage 1 temporary visa holder (173/884) is <strong>deemed to have been lodged on the date the Stage 1 visa was applied for</strong>. Because that date is already well past the Queue Release Date, it bypasses the queue [1,16]."
    },
    {
      title: "2. Why is Onshore Aged 864 Release 2 Years Ahead (Nov 2020 vs Nov 2018) Yet Queue Assessment 1 Year Behind?",
      body: "<strong>Release is 2 yrs ahead</strong> because Ministerial Direction No. 117 s 8(2)(a) (effective 25 Jul 2026) prioritises onshore aged applications and LIN 26/042 earmarks 1,125 places. <strong>Assessment is 1 yr behind (Apr 2023)</strong> because Direction 103 s 6(2)(c) requires upfront medical/police checks before queueing onshore aged visas [1,12,17]."
    },
    {
      title: "3. The 1 June 2018 Queue Date Rule Shift: The Hidden 28–43 Month Front-End Delay",
      body: "Before 1 June 2018, Queue Date equalled Lodgement Date. On/after 1 June 2018, <strong>Queue Date equals the date Queue Assessment is completed</strong>. An applicant who lodged a 143 in April 2024 and is assessed in August 2026 receives an <strong>August 2026 Queue Date</strong> [1,16]."
    },
    {
      title: "4. Why Did New Wait Estimates Jump from 15→18 Years and 33→42 Years on 6 October 2026?",
      body: "While LIN 26/042 sets the s 85 cap at 8,500 (6,800 Contributory + 1,700 Parent), the Government cut the <strong>FY2026–27 Migration Program Planning Level for Parent visas by 16.94% from 8,500 to 7,060 places</strong> (8,500 / 7,060 = 1.204x), pushing the 15-year Contributory estimate to 18 years and Non-Contributory to 42 years [1,11,12]."
    },
    {
      title: "5. Subclass 804 Statistical Reality: 27,013 Waiting, Only 37 Annual Grants vs 475 Exits",
      body: "FOI disclosure DA 25/07/00301 shows 27,013 applicants waiting in the Subclass 804 pipeline, but only <strong>37 visas were granted in all of FY2024–25</strong> while 475 exited via withdrawal, death, or refusal. Subclass 804 operates primarily as an onshore BVA residence mechanism with high uninsured medical/aged care exposure [8,12]."
    }
  ];
  box.innerHTML = items.map(it => `
    <div class="pv-inference-card">
      <h4>${it.title}</h4>
      <p>${it.body}</p>
    </div>
  `).join("");
}

/* ============================================================================
   MODULE 02: INTERACTIVE QUEUE POSITION & RELEASE YEAR SIMULATOR
   ============================================================================ */
function runQueueSimulator() {
  const out = document.getElementById("sim-output-content");
  if (!out) return;
  const sub = document.getElementById("sim-subclass")?.value || "143";
  const stage = document.getElementById("sim-stage")?.value || "lodged_unqueued";
  const yr = parseInt(document.getElementById("sim-year")?.value || "2024", 10);
  const mo = parseInt(document.getElementById("sim-month")?.value || "4", 10);
  const curAge = parseInt(document.getElementById("sim-age")?.value || "68", 10);

  const NOW_DEC = 2026 + 8 / 12; // Aug 2026 baseline
  const inputDec = stage === "planning" ? (2026 + 10 / 12) : (yr + mo / 12);

  // Subclass parameters as at Aug 2026
  const PARAMS = {
    "173_to_143": { s1LagYrs: 0, releaseCutoffDec: 2026.42, officialWaitYrs: 0.35, velocityMosPerYr: 12.0, name: "173 → 143 Step-up" },
    "884_to_864": { s1LagYrs: 0, releaseCutoffDec: 2026.42, officialWaitYrs: 0.35, velocityMosPerYr: 12.0, name: "884 → 864 Step-up" },
    "143": { s1LagYrs: 28 / 12, releaseCutoffDec: 2018.92, officialWaitYrs: 18, velocityMosPerYr: 5.07, name: "Subclass 143" },
    "173": { s1LagYrs: 28 / 12, releaseCutoffDec: 2018.92, officialWaitYrs: 18, velocityMosPerYr: 5.07, name: "Subclass 173" },
    "864": { s1LagYrs: 40 / 12, releaseCutoffDec: 2020.92, officialWaitYrs: 18, velocityMosPerYr: 7.50, name: "Subclass 864 (Onshore 67+)" },
    "884": { s1LagYrs: 40 / 12, releaseCutoffDec: 2020.92, officialWaitYrs: 18, velocityMosPerYr: 7.50, name: "Subclass 884 (Onshore 67+)" },
    "103": { s1LagYrs: 42 / 12, releaseCutoffDec: 2014.25, officialWaitYrs: 42, velocityMosPerYr: 4.18, name: "Subclass 103" },
    "804": { s1LagYrs: 43 / 12, releaseCutoffDec: 2014.83, officialWaitYrs: 42, velocityMosPerYr: 2.35, name: "Subclass 804 (Onshore 67+)" }
  };

  const p = PARAMS[sub] || PARAMS["143"];
  const isStepUp = sub === "173_to_143" || sub === "884_to_864";

  let estQueueDateDec = inputDec;
  let s1StatusKo = "";
  let s1StatusEn = "";

  if (isStepUp) {
    estQueueDateDec = inputDec;
    s1StatusKo = "대기열 면제 (Direction 103 s 7(2)(b))";
    s1StatusEn = "Queue Exempt (Direction 103 s 7(2)(b))";
  } else if (stage === "queued") {
    estQueueDateDec = inputDec;
    s1StatusKo = `${yr}년 ${mo}월 확정 완료`;
    s1StatusEn = `Assigned ${yr}-${String(mo).padStart(2, "0")}`;
  } else {
    // Post-1 June 2018 rule: Queue Date is assigned when Stage 1 assessment completes
    estQueueDateDec = Math.max(NOW_DEC + 0.15, inputDec + p.s1LagYrs);
    const qYr = Math.floor(estQueueDateDec);
    const qMo = Math.max(1, Math.min(12, Math.round((estQueueDateDec - qYr) * 12)));
    s1StatusKo = `예상 ${qYr}년 ${qMo}월 (접수 후 ~${Math.round(p.s1LagYrs * 12)}개월 뒤)`;
    s1StatusEn = `Est. ${qYr}-${String(qMo).padStart(2, "0")} (~${Math.round(p.s1LagYrs * 12)}m after lodgement)`;
  }

  let estReleaseOfficialYr = 2027;
  let estReleaseVelocityYr = 2027;
  let remainingYrs = 0.35;

  if (isStepUp) {
    estReleaseOfficialYr = Math.floor(NOW_DEC + 0.35);
    estReleaseVelocityYr = estReleaseOfficialYr;
    remainingYrs = 0.35;
  } else {
    const queueGapYears = Math.max(0, estQueueDateDec - p.releaseCutoffDec);
    // Empirical velocity: how many real years to clear queueGapYears when queue moves velocityMosPerYr per real year
    const velYearsFromNow = (queueGapYears * 12) / p.velocityMosPerYr;
    estReleaseVelocityYr = Math.round(NOW_DEC + velYearsFromNow);
    estReleaseOfficialYr = Math.round(inputDec + p.officialWaitYrs);
    remainingYrs = Math.max(0.5, ((estReleaseOfficialYr + estReleaseVelocityYr) / 2) - 2026.8);
  }

  const ageAtRelease = Math.round(curAge + remainingYrs);
  const highMedicalRisk = ageAtRelease >= 80 && !isStepUp;

  if (currentLang === "ko") {
    out.innerHTML = `
      <div class="pv-sim-kpi-grid">
        <div class="pv-sim-kpi">
          <div class="kpi-label">1단계 Queue Date 부여 시점</div>
          <div class="kpi-val" style="font-size:17px;">${s1StatusKo}</div>
          <div class="kpi-sub">2018.06.01 이후 심사완료일 = Queue Date</div>
        </div>
        <div class="pv-sim-kpi">
          <div class="kpi-label">이민성 공식 추계 기준 승인 연도</div>
          <div class="kpi-val">${isStepUp ? "2026~2027년 (3~4개월)" : `약 ${estReleaseOfficialYr}년`}</div>
          <div class="kpi-sub">신규 신청 공식 추정치 (${isStepUp ? "즉시 심사" : `${p.officialWaitYrs}년`}) 적용</div>
        </div>
        <div class="pv-sim-kpi">
          <div class="kpi-label">실증 큐 속도(Velocity) 기준 승인 연도</div>
          <div class="kpi-val">${isStepUp ? "2026~2027년" : `약 ${estReleaseVelocityYr}년`}</div>
          <div class="kpi-sub">현재 컷오프(${p.releaseCutoffDec.toFixed(1)}) 대비 연 ${p.velocityMosPerYr}개월 전진 반영</div>
        </div>
        <div class="pv-sim-kpi">
          <div class="kpi-label">2차 신체검사(PIC 4005) 시점 예상 연세</div>
          <div class="kpi-val" style="color:${highMedicalRisk ? "#991B1B" : "#065F46"};">만 ${ageAtRelease}세</div>
          <div class="kpi-sub">${highMedicalRisk ? "⚠️ 고령 2차 신체검사($86,000 상한) 고위험군" : "✅ 상대적 안정 구간 (단, PIC 4005 면제 불가)"}</div>
        </div>
      </div>
      <div class="pv-inference-card" style="margin-top:12px;">
        <h4>박앤코 법률 시뮬레이션 진단 노트 (${p.name})</h4>
        <p>
          ${isStepUp
            ? "1단계 임시 기여제 비자(173 또는 884)를 이미 취득하신 후 2년 유효기간 내에 영주 전환(143 또는 864)을 신청하시는 경우, <strong>Ministerial Direction No. 103 s 7(2)(b)</strong>에 따라 최초 임시비자 접수일이 그대로 승계되어 대기열(Queue Assessment)을 거치지 않고 <strong>약 3~4개월 내</strong>에 최종 심사(AoS 및 2차 기여금 $19,420 납부)가 완료돼요."
            : `현재 선택하신 <strong>${p.name}</strong> 경로는 1단계 Queue Assessment에서만 약 <strong>${Math.round(p.s1LagYrs * 12)}개월</strong>이 소요되며, 최종 2단계 Queue Release 시점에는 주신청자 부모님 연세가 <strong>약 만 ${ageAtRelease}세</strong>에 도달할 것으로 예상돼요. 부모비자는 건강요건 면제(Health Waiver)가 없는 <strong>PIC 4005($86,000 의료·요양비 상한)</strong>를 최종 발급 직전에 다시 통과해야 하므로, 대기 중 치매·중증 질환 대비(영속적 위임장 EPOA 및 메디케어/사보험 설계)가 필수예요.`}
        </p>
      </div>
    `;
  } else {
    out.innerHTML = `
      <div class="pv-sim-kpi-grid">
        <div class="pv-sim-kpi">
          <div class="kpi-label">Stage 1 Queue Date Assignment</div>
          <div class="kpi-val" style="font-size:17px;">${s1StatusEn}</div>
          <div class="kpi-sub">Post-1 Jun 2018: Assessment Date = Queue Date</div>
        </div>
        <div class="pv-sim-kpi">
          <div class="kpi-label">Official DHA Estimate Release Year</div>
          <div class="kpi-val">${isStepUp ? "2026–2027 (~3–4 mos)" : `~${estReleaseOfficialYr}`}</div>
          <div class="kpi-sub">Based on published ${isStepUp ? "Step-up priority" : `${p.officialWaitYrs}-year estimate`}</div>
        </div>
        <div class="pv-sim-kpi">
          <div class="kpi-label">Empirical Velocity Release Year</div>
          <div class="kpi-val">${isStepUp ? "2026–2027" : `~${estReleaseVelocityYr}`}</div>
          <div class="kpi-sub">Advancing ${p.velocityMosPerYr} queue-months per calendar year</div>
        </div>
        <div class="pv-sim-kpi">
          <div class="kpi-label">Projected Age at 2nd Medical (PIC 4005)</div>
          <div class="kpi-val" style="color:${highMedicalRisk ? "#991B1B" : "#065F46"};">Age ${ageAtRelease}</div>
          <div class="kpi-sub">${highMedicalRisk ? "⚠️ High PIC 4005 ($86,000 threshold) refusal risk" : "✅ Moderate age band (No health waiver under PIC 4005)"}</div>
        </div>
      </div>
      <div class="pv-inference-card" style="margin-top:12px;">
        <h4>Park &amp; Co Legal Advisory Note (${p.name})</h4>
        <p>
          ${isStepUp
            ? "When stepping up from a Subclass 173 or 884 temporary visa to permanent Subclass 143 or 864, <strong>Ministerial Direction No. 103 s 7(2)(b)</strong> deems your permanent application to have been lodged on the Stage 1 temporary application date, bypassing the queue (~3–4 months total processing)."
            : `For <strong>${p.name}</strong>, Stage 1 Queue Assessment currently lags by <strong>~${Math.round(p.s1LagYrs * 12)} months</strong>, and the primary applicant is projected to be <strong>~Age ${ageAtRelease}</strong> at final Queue Release. Because all parent visas are subject to <strong>PIC 4005 ($86,000 cost threshold with NO health waiver)</strong> at final grant, families must plan ahead for private health cover, Enduring Powers of Attorney (EPOA), and aged care contingencies.`}
        </p>
      </div>
    `;
  }
}

/* ============================================================================
   MODULE 03: 7-SUBCLASS PATHWAY WIZARD & BALANCE OF FAMILY TEST (REG 1.05)
   ============================================================================ */
function runPathwayWizard() {
  const out = document.getElementById("wiz-output-content");
  if (!out) return;
  const mainAge = document.getElementById("wiz-main-age")?.value || "67plus";
  const spouseAge = document.getElementById("wiz-spouse-age")?.value || "under67";
  const loc = document.getElementById("wiz-location")?.value || "onshore";
  const cond = document.getElementById("wiz-visa-cond")?.value || "clean";
  const totalKids = parseInt(document.getElementById("wiz-total-children")?.value || "2", 10);
  const auKids = Math.min(totalKids, parseInt(document.getElementById("wiz-au-children")?.value || "1", 10));
  const budget = document.getElementById("wiz-budget")?.value || "contrib_direct";

  // Balance of Family Test (Migration Regulations 1994 reg 1.05):
  // Passes if eligible AU children >= 50% of total children (or more eligible AU children than in any other single country — simplified 50% primary test: ceil(totalKids / 2))
  const minAuRequired = Math.ceil(totalKids / 2);
  const bofPass = auKids >= minAuRequired;

  const isAged = mainAge === "67plus";
  const spouseMortalityTrap = isAged && spouseAge === "under67";
  const holding870 = cond === "holding_870";
  const has8503 = cond === "8503";

  let recTitleKo = "";
  let recTitleEn = "";
  let recBodyKo = "";
  let recBodyEn = "";

  if (!bofPass) {
    recTitleKo = "가족균형테스트 미충족 → Subclass 870 (임시 부모비자 3년/5년, 최대 10년) 유일 가능";
    recTitleEn = "Balance of Family Test Not Met → Subclass 870 (Sponsored Parent Temporary) Only";
    recBodyKo = `전체 자녀 ${totalKids}명 중 최소 ${minAuRequired}명 이상이 호주 시민권·영주권자여야 영주/임시 부모비자(103/143/173/804/864/884)를 신청할 수 있어요(Reg 1.05). 현재 ${auKids}명이므로 <strong>가족균형테스트가 면제되는 Subclass 870(3년 또는 5년, 최대 10년 체류 · 스폰서 과세소득 $83,454.80 이상)</strong>만 신청 가능해요.`;
    recBodyEn = `With ${auKids} of ${totalKids} children settled in Australia (minimum ${minAuRequired} required under reg 1.05), permanent parent visas are unavailable. However, <strong>Subclass 870 (Sponsored Parent Temporary, 3 or 5 years up to 10 years) does NOT require the Balance of Family Test</strong> (requires sponsor taxable income ≥ $83,454.80).`;
  } else if (holding870) {
    recTitleKo = "⚠️ 긴급 경고: 현재 Subclass 870 소지 중 — 모든 영주 부모비자 접수 법정 차단 (Schedule 1 Bar)";
    recTitleEn = "⚠️ CRITICAL LOCKOUT: Currently Holding Subclass 870 — Permanent Parent Visas Barred";
    recBodyKo = `Migration Regulations 1994 Schedule 1 (Items 1124(3)(e), 1130(3)(e), 1124A(3)(f), 1130A(3)(f))에 따라 <strong>현재 Subclass 870 비자를 소지 중이거나(또는 마지막 비자가 870이고 아직 출국하지 않은 경우) 103·143·173·804·864·884 비자 접수가 원천 무효(Invalid)</strong>가 돼요. 반드시 870 비자가 소멸하고 호주 밖으로 출국(또는 다른 실체비자 취득)한 뒤에야 영주 부모비자를 접수할 수 있어요 [9,18].`;
    recBodyEn = `Under Schedule 1 (Items 1124(3)(e), 1130(3)(e), 1124A(3)(f), 1130A(3)(f)), <strong>holding (or having last held without departing Australia) a Subclass 870 visa strictly bars lodging any 103, 143, 173, 804, 864, or 884 visa</strong> [9,18].`;
  } else if (isAged && loc === "onshore" && !has8503) {
    if (budget === "non_contrib") {
      recTitleKo = "온쇼어 고령 일반 경로: Subclass 804 (ImmiAccount 온라인 접수 + BVA 부여)";
      recTitleEn = "Onshore Aged Non-Contributory Pathway: Subclass 804 (+ Bridging Visa A)";
    } else if (budget === "contrib_2stage") {
      recTitleKo = "온쇼어 고령 기여제 2단계: Subclass 884 (종이 접수) → Subclass 864 (메디케어 조기 개시)";
      recTitleEn = "Onshore Aged 2-Stage Pathway: Subclass 884 (Paper) → Subclass 864 (Early Medicare)";
    } else {
      recTitleKo = "최우선 추천 경로: Subclass 864 (기여제 고령부모 영주 직행 · Onshore BVA + Direction 117 우선심사)";
      recTitleEn = "Primary Recommendation: Subclass 864 (Onshore Contributory Aged Parent + BVA + Direction 117 Priority)";
    }
    recBodyKo = `주신청자께서 만 67세 이상이고 호주 국내에서 8503 조건 없는 유효 비자를 소지 중이시므로, 온쇼어에서 <strong>864(또는 884/804)</strong>를 접수하여 <strong>취업제한 없는 Bridging Visa A (010)</strong>를 받아 호주에 계속 거주하실 수 있어요. 특히 864/884는 <strong>Ministerial Direction No. 117</strong> 온쇼어 우선심사 덕분에 최종 발급 기준일이 일반 143보다 2년 앞선 <strong>2020년 11월</strong>이에요 [1,5,17].`;
    recBodyEn = `Because the primary applicant is aged 67+ and onshore without Condition 8503, lodging <strong>Subclass 864 (or 884/804)</strong> grants an onshore <strong>Bridging Visa A (010) with unrestricted work rights</strong>. Under <strong>Ministerial Direction No. 117</strong>, Subclass 864/884 Queue Release (Nov 2020) is currently 2 years ahead of offshore Subclass 143 (Nov 2018) [1,5,17].`;
  } else {
    recTitleKo = budget === "non_contrib"
      ? "일반 부모비자 경로: Subclass 103 (ImmiAccount 온라인 접수 · 42년 대기)"
      : "기여제 부모비자 황금 경로: Subclass 143 (또는 173→143) 선접수 + 대기 중 600 장기방문 또는 870 병행";
    recTitleEn = budget === "non_contrib"
      ? "General Parent Pathway: Subclass 103 (Online via ImmiAccount · 42-Year Wait)"
      : "Golden Sequence: Lodge Subclass 143 (or 173→143) First + Combine with Subclass 600 (3–5yr) or Subclass 870";
    recBodyKo = `만 67세 미만이시거나 해외 체류 중(또는 8503 조건 보유)이시므로 <strong>Subclass 143(온라인) 또는 173(종이 우편)</strong>을 먼저 접수해 Queue Date 순번을 확보하세요. ⚠️ <strong>황금 순서(PAM3 VM-6327 s 3.6.6)</strong>: 143/103을 <strong>먼저 접수한 뒤</strong> 대기기간 동안 600 장기 방문비자(최대 3~5년 유효)나 Subclass 870 임시 부모비자를 신청해 호주에서 함께 지내시는 것은 적법하게 허용돼요!`;
    recBodyEn = `Lodge <strong>Subclass 143 (online) or Subclass 173 (paper)</strong> first to lock in your Queue Date. ⚠️ <strong>Golden Sequence (PAM3 VM-6327 s 3.6.6)</strong>: While holding an 870 bars lodging a 143, <strong>lodging Subclass 143/103 FIRST and subsequently applying for a Subclass 870 or 3–5 year Visitor Visa (600) while waiting IS legally permitted</strong>!`;
  }

  const mortalityHtml = spouseMortalityTrap ? (currentLang === "ko" ? `
    <div class="pv-inference-card" style="border-left-color:#DC2626;background:#FEF2F2;margin-top:10px;">
      <h4 style="color:#991B1B;">⚠️ [2024.12.17 개정법 경고] 동반 배우자 만 67세 미만 시 '주신청자 유고 승계 불가' 리스크</h4>
      <p style="color:#7F1D1D;">
        2024년 12월 17일부터 고령부모 비자(804/864/884)의 '만 67세 이상(Aged Parent)' 요건이 <strong>접수 시점 필수 유효 요건(Schedule 1 Validity Requirement)</strong>으로 격상되었어요. 만약 67세 이상인 주신청자께서 18년 대기 중 별세하시면, <strong>접수 당시 만 67세 미만이었던 동반 배우자는 주신청자 지위를 승계할 수 없어 비자가 거절(PAM3 VM-3058 s 3.9.1)</strong>돼요. 이런 경우 만 67세 제한이 없는 <strong>Subclass 143</strong>으로 접수하거나 배우자도 만 67세가 된 후 접수하는 전략을 검토해야 해요.
      </p>
    </div>
  ` : `
    <div class="pv-inference-card" style="border-left-color:#DC2626;background:#FEF2F2;margin-top:10px;">
      <h4 style="color:#991B1B;">⚠️ [17 Dec 2024 Reform Warning] Surviving Spouse Under 67 Cannot Succeed as Primary Applicant</h4>
      <p style="color:#7F1D1D;">
        Since 17 December 2024, being aged 67+ at time of application is a <strong>Schedule 1 validity requirement</strong> for Subclasses 804, 864, and 884. If the 67+ primary applicant passes away during the queue, a secondary spouse who was under 67 at lodgement <strong>cannot succeed as primary applicant and the visa must be refused (PAM3 VM-3058 s 3.9.1)</strong>. Consider lodging Subclass 143 (no age requirement) to eliminate this mortality risk.
      </p>
    </div>
  `) : "";

  out.innerHTML = `
    <div class="pv-sim-kpi-grid">
      <div class="pv-sim-kpi">
        <div class="kpi-label">${currentLang === "ko" ? "가족균형테스트 (Reg 1.05)" : "Balance of Family Test (Reg 1.05)"}</div>
        <div class="kpi-val" style="color:${bofPass ? "#065F46" : "#991B1B"};">${bofPass ? (currentLang === "ko" ? "통과 (PASS)" : "PASS") : (currentLang === "ko" ? "미충족 (FAIL)" : "FAIL")}</div>
        <div class="kpi-sub">${currentLang === "ko" ? `전체 ${totalKids}명 중 호주 ${auKids}명 (최소 ${minAuRequired}명 필요)` : `${auKids} of ${totalKids} in AU (Min ${minAuRequired} required)`}</div>
      </div>
      <div class="pv-sim-kpi">
        <div class="kpi-label">${currentLang === "ko" ? "온쇼어 고령부모(804/864/884) 자격" : "Onshore Aged (804/864/884) Eligibility"}</div>
        <div class="kpi-val" style="font-size:16.5px;">${isAged && loc === "onshore" && !has8503 && !holding870 && bofPass ? (currentLang === "ko" ? "✅ 적격 (BVA 발급)" : "✅ Eligible (+BVA)") : (currentLang === "ko" ? "❌ 미해당 (143/103/870)" : "❌ Ineligible")}</div>
        <div class="kpi-sub">${currentLang === "ko" ? "만 67세+ · 호주 국내 · 8503/870 없을 것" : "Requires Age 67+, Onshore & No 8503/870"}</div>
      </div>
    </div>
    <div class="pv-inference-card">
      <h4>${currentLang === "ko" ? recTitleKo : recTitleEn}</h4>
      <p>${currentLang === "ko" ? recBodyKo : recBodyEn}</p>
    </div>
    ${mortalityHtml}
  `;
}

function renderSubclassComparisonTable() {
  const tbody = document.getElementById("subclass-comparison-tbody");
  if (!tbody) return;
  const rows = [
    {
      ko: ["<strong>비자 성격 & 체류기간</strong>", "영주권 (PR)", "영주권 (PR)", "영주권 (PR)", "임시(2년) → 영주(PR)", "영주권 (PR)", "임시(2년) → 영주(PR)", "임시 (3/5년, 최대 10년)"],
      en: ["<strong>Visa Type & Stay</strong>", "Permanent (PR)", "Permanent (PR)", "Permanent (PR)", "Temp (2yr) → PR", "Permanent (PR)", "Temp (2yr) → PR", "Temp (3/5yr, max 10yr)"]
    },
    {
      ko: ["<strong>주신청자 연령 요건</strong>", "제한 없음", "<strong>만 67세 이상</strong> (Sch 1)", "제한 없음", "제한 없음", "<strong>만 67세 이상</strong> (Sch 1)", "<strong>만 67세 이상</strong> (Sch 1)", "제한 없음"],
      en: ["<strong>Age Requirement</strong>", "None", "<strong>Age 67+</strong> (Sch 1)", "None", "None", "<strong>Age 67+</strong> (Sch 1)", "<strong>Age 67+</strong> (Sch 1)", "None"]
    },
    {
      ko: ["<strong>접수 방식 (2026.04.22~)</strong>", "ImmiAccount 온라인", "ImmiAccount 온라인", "ImmiAccount 온라인", "173: 종이 / 143: 온라인", "ImmiAccount 온라인", "884: 종이 / 864: 온라인", "ImmiAccount 온라인"],
      en: ["<strong>Lodgement Channel</strong>", "ImmiAccount Online", "ImmiAccount Online", "ImmiAccount Online", "173: Paper / 143: Online", "ImmiAccount Online", "884: Paper / 864: Online", "ImmiAccount Online"]
    },
    {
      ko: ["<strong>온쇼어 BVA 및 취업권</strong>", "미부여 (원칙)", "<span class='badge-ok'>BVA 부여 (취업 자유)</span>", "미부여 (원칙)", "미부여 (원칙)", "<span class='badge-ok'>BVA 부여 (취업 자유)</span>", "<span class='badge-ok'>BVA 부여 (취업 자유)</span>", "미부여 (취업 금지 8103)"],
      en: ["<strong>Onshore BVA & Work</strong>", "No BVA", "<span class='badge-ok'>BVA (Unrestricted Work)</span>", "No BVA", "No BVA", "<span class='badge-ok'>BVA (Unrestricted Work)</span>", "<span class='badge-ok'>BVA (Unrestricted Work)</span>", "No BVA (No Work 8103)"]
    },
    {
      ko: ["<strong>가족균형테스트 (Reg 1.05)</strong>", "필수", "필수", "필수", "필수", "필수", "필수", "<span class='badge-ok'>면제 (불요)</span>"],
      en: ["<strong>Balance of Family Test</strong>", "Mandatory", "Mandatory", "Mandatory", "Mandatory", "Mandatory", "Mandatory", "<span class='badge-ok'>Exempt (Not Required)</span>"]
    },
    {
      ko: ["<strong>1차 신청비 (주신청자 / 배우자)</strong>", "$5,280 / $2,640", "$5,280 / $2,640", "$5,040 / $1,700", "173: $3,395/$1,145<br/>143: $440/$195", "$5,040 / $2,515", "884: $4,990/$2,490<br/>864: $440/$195", "스폰서 $420 + 1차 $1,180"],
      en: ["<strong>1st VAC (Main / Spouse)</strong>", "$5,280 / $2,640", "$5,280 / $2,640", "$5,040 / $1,700", "173: $3,395/$1,145<br/>143: $440/$195", "$5,040 / $2,515", "884: $4,990/$2,490<br/>864: $440/$195", "Sponsor $420 + 1st $1,180"]
    },
    {
      ko: ["<strong>2차 기여금/신청비 (성인 1인당)</strong>", "<strong>$2,065</strong>", "<strong>$2,065</strong>", "<strong>$43,600</strong>", "173: <strong>$29,130</strong><br/>143: <strong>$19,420</strong> (합 $48,550)", "<strong>$43,600</strong>", "884: <strong>$29,130</strong><br/>864: <strong>$19,420</strong> (합 $48,550)", "3년: <strong>$4,715</strong><br/>5년: <strong>$10,605</strong>"],
      en: ["<strong>2nd VAC (Per Adult)</strong>", "<strong>$2,065</strong>", "<strong>$2,065</strong>", "<strong>$43,600</strong>", "173: <strong>$29,130</strong><br/>143: <strong>$19,420</strong> ($48,550)", "<strong>$43,600</strong>", "884: <strong>$29,130</strong><br/>864: <strong>$19,420</strong> ($48,550)", "3yr: <strong>$4,715</strong><br/>5yr: <strong>$10,605</strong>"]
    },
    {
      ko: ["<strong>재정보증(AoS) 기간 & 본드(1인/2인)</strong>", "4년 · $5,000 / $7,000", "4년 · $5,000 / $7,000", "10년 · $10,000 / $14,000", "173 면제 → 143 단계 10년 ($10k/$14k)", "10년 · $10,000 / $14,000", "884 면제 → 864 단계 10년 ($10k/$14k)", "AoS 없음 (스폰서 소득 $83,454.80)"],
      en: ["<strong>AoS Duration & Bond (1 / 2 Parents)</strong>", "4 yrs · $5,000 / $7,000", "4 yrs · $5,000 / $7,000", "10 yrs · $10,000 / $14,000", "Exempt at 173 → 10 yrs at 143 ($10k/$14k)", "10 yrs · $10,000 / $14,000", "Exempt at 884 → 10 yrs at 864 ($10k/$14k)", "No AoS (Sponsor Income $83,454.80)"]
    },
    {
      ko: ["<strong>메디케어 (Medicare) 개시 시점</strong>", "영주권 승인 후", "영주권 승인 후 (BVA 중 불가)", "영주권 승인 후", "<span class='badge-ok'>173 승인 즉시 메디케어 가입!</span>", "영주권 승인 후 (BVA 중 불가)", "<span class='badge-ok'>884 승인 즉시 메디케어 가입!</span>", "불가 (전 기간 사보험 필수)"],
      en: ["<strong>Medicare Eligibility Start</strong>", "Upon PR Grant", "Upon PR Grant (Excluded on BVA)", "Upon PR Grant", "<span class='badge-ok'>Immediate upon 173 Grant!</span>", "Upon PR Grant (Excluded on BVA)", "<span class='badge-ok'>Immediate upon 884 Grant!</span>", "Ineligible (Private cover required)"]
    }
  ];
  tbody.innerHTML = rows.map(r => {
    const cols = currentLang === "ko" ? r.ko : r.en;
    return `<tr>${cols.map(c => `<td>${c}</td>`).join("")}</tr>`;
  }).join("");
}

/* ============================================================================
   MODULE 04: 20-YEAR TCO, ASSURER ELIGIBILITY & AOS INCOME CALCULATOR + CHART 4
   ============================================================================ */
function computePathwayCost(pathway, parentsCount, isCorp) {
  const p = parentsCount;
  const sec = p > 1 ? (p - 1) : 0;
  let vac1 = 0, vac2 = 0, bond = 0, aosYears = 10;

  if (pathway === "143") {
    vac1 = 5040 + sec * 1700;
    vac2 = p * 43600;
    bond = isCorp ? 20000 : (p === 1 ? 10000 : 14000);
    aosYears = 10;
  } else if (pathway === "173_143") {
    vac1 = (3395 + sec * 1145) + (440 + sec * 195);
    vac2 = p * (29130 + 19420);
    bond = isCorp ? 20000 : (p === 1 ? 10000 : 14000);
    aosYears = 10;
  } else if (pathway === "864") {
    vac1 = 5040 + sec * 2515;
    vac2 = p * 43600;
    bond = isCorp ? 20000 : (p === 1 ? 10000 : 14000);
    aosYears = 10;
  } else if (pathway === "884_864") {
    vac1 = (4990 + sec * 2490) + (440 + sec * 195);
    vac2 = p * (29130 + 19420);
    bond = isCorp ? 20000 : (p === 1 ? 10000 : 14000);
    aosYears = 10;
  } else if (pathway === "103" || pathway === "804") {
    vac1 = 5280 + sec * 2640;
    vac2 = p * 2065;
    bond = isCorp ? 10000 : (p === 1 ? 5000 : 7000);
    aosYears = 4;
  } else if (pathway === "870_5") {
    vac1 = 420 + p * 1180;
    vac2 = p * 10605;
    bond = 0;
    aosYears = 0;
  } else if (pathway === "870_10") {
    vac1 = 420 + p * (1180 * 2);
    vac2 = p * (10605 * 2);
    bond = 0;
    aosYears = 0;
  }
  return { vac1, vac2, bond, aosYears, govTotal: vac1 + vac2 + bond };
}

function runCostAosCalculator() {
  const out = document.getElementById("cost-output-content");
  if (!out) return;
  const pathway = document.getElementById("cost-pathway")?.value || "143";
  const parentsCount = parseInt(document.getElementById("cost-parents")?.value || "2", 10);
  const assurerRaw = document.getElementById("cost-assurers")?.value || "1";
  const isCorp = assurerRaw === "corp";
  const numAssurers = isCorp ? 0 : parseInt(assurerRaw, 10);
  const assurerKids = Math.max(0, parseInt(document.getElementById("cost-assurer-kids")?.value || "0", 10));
  const existingAssured = parseInt(document.getElementById("cost-existing-assured")?.value || "0", 10);
  const actualIncome = Math.max(0, parseFloat(document.getElementById("cost-actual-income")?.value || "75000"));
  const ovhcYears = Math.max(0, parseInt(document.getElementById("cost-ovhc-years")?.value || "0", 10));

  const is870 = pathway === "870_5" || pathway === "870_10";
  const c = computePathwayCost(pathway, parentsCount, isCorp);
  const ovhcTotal = ovhcYears * parentsCount * 2400;
  const grandTotal = c.govTotal + ovhcTotal;

  // AoS Income Formula under Social Security (Assurance of Support) Determination 2018 ss 15-16 (FY2026-27):
  // JSP Base = $22,578 * (numAssurers + parentsCount) + $2,942 * assurerKids
  const JSP_BASE = 22578;
  const FTB_CHILD = 2942;
  let requiredIncome = 0;
  if (is870) {
    requiredIncome = 83455; // $83,454.80 under LIN 19/146
  } else if (isCorp) {
    requiredIncome = 0; // Corporate Assurer is exempt from the taxable income test!
  } else {
    requiredIncome = JSP_BASE * (numAssurers + parentsCount) + FTB_CHILD * assurerKids;
  }

  const totalAdultAssurees = existingAssured + parentsCount;
  const capExceeded = !is870 && totalAdultAssurees > 2;
  const incomeDelta = actualIncome - requiredIncome;
  const incomePass = isCorp || actualIncome >= requiredIncome;

  let verdictBadge = "";
  if (capExceeded) {
    verdictBadge = `<span class="badge-no">${currentLang === "ko" ? "❌ 피보증 성인 2명 한도 초과 (보증인 변경 필요)" : "❌ Exceeds 2 Adult Assurees Cap"}</span>`;
  } else if (incomePass) {
    verdictBadge = `<span class="badge-ok">${currentLang === "ko" ? `✅ 적격 통과 (+${fmtAud(incomeDelta)} 여유)` : `✅ ELIGIBLE (+${fmtAud(incomeDelta)} surplus)`}</span>`;
  } else {
    verdictBadge = `<span class="badge-no">${currentLang === "ko" ? `⚠️ 소득 부족 (${fmtAud(Math.abs(incomeDelta))} 미달 → 공동/법인 보증 권장)` : `⚠️ Shortfall of ${fmtAud(Math.abs(incomeDelta))}`}</span>`;
  }

  if (currentLang === "ko") {
    out.innerHTML = `
      <div class="pv-sim-kpi-grid">
        <div class="pv-sim-kpi">
          <div class="kpi-label">1차 + 2차 비자신청비 합계</div>
          <div class="kpi-val">${fmtAud(c.vac1 + c.vac2)}</div>
          <div class="kpi-sub">1차 ${fmtAud(c.vac1)} + 2차 ${fmtAud(c.vac2)}</div>
        </div>
        <div class="pv-sim-kpi">
          <div class="kpi-label">재정보증 본드 (CBA Bank Guarantee)</div>
          <div class="kpi-val">${fmtAud(c.bond)}</div>
          <div class="kpi-sub">${c.aosYears > 0 ? `${c.aosYears}년 예치 (${isCorp ? "법인 단일 본드" : "만기 후 환급형"})` : "Subclass 870 해당 없음"}</div>
        </div>
        <div class="pv-sim-kpi">
          <div class="kpi-label">${is870 ? "870 스폰서 법정 최소 소득" : "AoS 보증인 최소 요구 과세소득"}</div>
          <div class="kpi-val">${isCorp && !is870 ? "$0 (소득심사 면제)" : fmtAud(requiredIncome)}</div>
          <div class="kpi-sub">${is870 ? "LIN 19/146 ($83,454.80)" : (isCorp ? "법인 보증($20k/$10k 본드) 특례" : `$22,578×(${numAssurers}+${parentsCount}) + $2,942×${assurerKids}`)}</div>
        </div>
        <div class="pv-sim-kpi">
          <div class="kpi-label">총 소요 자금 (사보험 포함 TCO)</div>
          <div class="kpi-val">${fmtAud(grandTotal)}</div>
          <div class="kpi-sub">정부/본드 ${fmtAud(c.govTotal)} + 사보험 ${fmtAud(ovhcTotal)}</div>
        </div>
      </div>
      <div class="pv-inference-card" style="margin-top:12px;">
        <h4>보증인(Assurer) 자격 및 소득 판정: ${verdictBadge}</h4>
        <p>
          ${capExceeded
            ? `Social Security (AoS) Determination 2018 s 11에 따라 한 보증인(개인 또는 법인)은 <strong>동시에 최대 성인 2명(2 adult assurees)</strong>까지만 보증할 수 있어요. 이미 ${existingAssured}명을 보증 중이시라면 부모님 ${parentsCount}분을 합쳐 총 ${totalAdultAssurees}명이 되므로 제3자(배우자 단독, 형제, 지인 또는 별도 법인)를 보증인으로 지정하셔야 해요.`
            : (incomePass
                ? `입력하신 실제 과세소득(<strong>${fmtAud(actualIncome)}</strong>)이 법정 최소 기준(<strong>${fmtAud(requiredIncome)}</strong>)을 충족해요! 실무상 Services Australia는 <strong>직전 회계연도 국세청 소득세 확정통지서(ATO Notice of Assessment)</strong>와 <strong>현재 회계연도 연속 2장 이상의 급여명세서(Payslips)</strong> 두 시점 모두에서 위 금액 이상임을 확인해요.`
                : `입력하신 소득(<strong>${fmtAud(actualIncome)}</strong>)이 요구 기준(<strong>${fmtAud(requiredIncome)}</strong>)보다 <strong>${fmtAud(Math.abs(incomeDelta))} 부족</strong>해요. 해결책: ① 배우자·형제·친척·지인을 <strong>공동 보증인(최대 3인 합산)</strong>으로 추가하거나, ② 2년 이상 호주에서 운영된 <strong>법인(Pty Ltd)을 보증인으로 세우면 과세소득 심사 없이 $20,000(기여제) 은행본드만으로 AoS 통과</strong>가 가능해요!`)}
        </p>
      </div>
    `;
  } else {
    out.innerHTML = `
      <div class="pv-sim-kpi-grid">
        <div class="pv-sim-kpi">
          <div class="kpi-label">1st + 2nd VAC Total</div>
          <div class="kpi-val">${fmtAud(c.vac1 + c.vac2)}</div>
          <div class="kpi-sub">1st ${fmtAud(c.vac1)} + 2nd ${fmtAud(c.vac2)}</div>
        </div>
        <div class="pv-sim-kpi">
          <div class="kpi-label">AoS Bank Guarantee Bond (CBA)</div>
          <div class="kpi-val">${fmtAud(c.bond)}</div>
          <div class="kpi-sub">${c.aosYears > 0 ? `${c.aosYears}-year term (${isCorp ? "Corporate bond" : "Refundable after term"})` : "Not applicable to 870"}</div>
        </div>
        <div class="pv-sim-kpi">
          <div class="kpi-label">${is870 ? "870 Sponsor Min Taxable Income" : "Min Assurer Assessable Income"}</div>
          <div class="kpi-val">${isCorp && !is870 ? "$0 (Income Exempt)" : fmtAud(requiredIncome)}</div>
          <div class="kpi-sub">${is870 ? "LIN 19/146 ($83,454.80)" : (isCorp ? "Corporate Assurer exemption" : `$22,578×(${numAssurers}+${parentsCount}) + $2,942×${assurerKids}`)}</div>
        </div>
        <div class="pv-sim-kpi">
          <div class="kpi-label">Grand Total (incl. OVHC)</div>
          <div class="kpi-val">${fmtAud(grandTotal)}</div>
          <div class="kpi-sub">Gov/Bond ${fmtAud(c.govTotal)} + OVHC ${fmtAud(ovhcTotal)}</div>
        </div>
      </div>
      <div class="pv-inference-card" style="margin-top:12px;">
        <h4>Assurer Eligibility &amp; Income Verdict: ${verdictBadge}</h4>
        <p>
          ${capExceeded
            ? `Under Social Security (AoS) Determination 2018 s 11, an individual or corporate assurer may assure a <strong>maximum of 2 adults concurrently</strong>. With ${existingAssured} existing + ${parentsCount} new = ${totalAdultAssurees} adults, you must nominate another eligible individual or corporation as Assurer.`
            : (incomePass
                ? `Your combined assessable income (<strong>${fmtAud(actualIncome)}</strong>) meets the statutory threshold (<strong>${fmtAud(requiredIncome)}</strong>). Services Australia verifies this across <strong>both your latest ATO Notice of Assessment (NOA) AND current financial year payslips</strong>.`
                : `Your income (<strong>${fmtAud(actualIncome)}</strong>) is <strong>${fmtAud(Math.abs(incomeDelta))} below</strong> the required <strong>${fmtAud(requiredIncome)}</strong>. Solutions: ① Add a 2nd or 3rd <strong>Joint Assurer</strong> (friend, relative, or partner), or ② Use an eligible <strong>Australian Corporation (Pty Ltd trading 2+ yrs)</strong> which has <strong>NO taxable income test</strong> ($20,000 bond for Contributory).`)}
        </p>
      </div>
    `;
  }

  renderSvgChartCosts(parentsCount, isCorp);
}

function renderSvgChartCosts(parentsCount, isCorp) {
  const box = document.getElementById("svg-chart-costs");
  if (!box) return;
  const list = [
    { id: "103", label: currentLang === "ko" ? "103/804 (일반 영주)" : "103/804 (Non-Contrib)" },
    { id: "870_10", label: currentLang === "ko" ? "870 (5년×2회=10년)" : "870 (5yr×2 = 10yr)" },
    { id: "143", label: currentLang === "ko" ? "143 (기여제 직행)" : "143 (Direct Contrib)" },
    { id: "864", label: currentLang === "ko" ? "864 (고령 기여 직행)" : "864 (Direct Aged)" },
    { id: "173_143", label: currentLang === "ko" ? "173→143 (2단계 분할)" : "173→143 (2-Stage)" }
  ].map(item => ({ ...item, ...computePathwayCost(item.id, parentsCount, isCorp) }));

  const W = 680, H = 240, L = 165, R = 95, T = 16, B = 28;
  const maxVal = 130000;
  const rowH = (H - T - B) / list.length;

  let svg = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Pathway Total Cost Stacked Bar Chart">`;
  [0, 30000, 60000, 90000, 120000].forEach(v => {
    const x = L + ((W - L - R) * v) / maxVal;
    svg += `<line x1="${x}" y1="${T}" x2="${x}" y2="${H - B}" stroke="#E5DFD5" stroke-dasharray="3,3"/>`;
    svg += `<text x="${x}" y="${H - 8}" text-anchor="middle" font-size="11" fill="#71717A">$${v / 1000}k</text>`;
  });

  list.forEach((it, idx) => {
    const y = T + idx * rowH + 8;
    const w1 = ((W - L - R) * it.vac1) / maxVal;
    const w2 = ((W - L - R) * it.vac2) / maxVal;
    const w3 = ((W - L - R) * it.bond) / maxVal;
    svg += `<text x="${L - 10}" y="${y + 14}" text-anchor="end" font-size="12" font-weight="700" fill="#27272A">${it.label}</text>`;
    svg += `<rect x="${L}" y="${y}" width="${w1}" height="18" fill="#3B82F6"><title>1st VAC: ${fmtAud(it.vac1)}</title></rect>`;
    svg += `<rect x="${L + w1}" y="${y}" width="${w2}" height="18" fill="#6E252D"><title>2nd VAC: ${fmtAud(it.vac2)}</title></rect>`;
    svg += `<rect x="${L + w1 + w2}" y="${y}" width="${w3}" height="18" fill="#D97706"><title>AoS Bond: ${fmtAud(it.bond)}</title></rect>`;
    svg += `<text x="${L + w1 + w2 + w3 + 6}" y="${y + 14}" font-size="11.5" font-weight="800" fill="#18181B">${fmtAud(it.govTotal)}</text>`;
  });
  svg += `</svg>`;
  box.innerHTML = svg;
}

function renderAosDeepCards() {
  const box = document.getElementById("aos-deep-cards");
  if (!box) return;
  const cards = currentLang === "ko" ? [
    {
      title: "1. 누가 재정보증인(Assurer)이 될 수 있나요? (자녀가 아니어도 가능!)",
      body: "<strong>비자 스폰서(자녀)와 재정보증인(Assurer)은 동일인일 필요가 없어요!</strong> 만 18세 이상 호주 시민권자·영주권자·보호특례 NZ 시민권자(호주 통상 거주)라면 친척, 친구, 지인 누구나 보증인이 될 수 있으며, <strong>최대 3인까지 공동 보증(Joint Assurers)</strong>으로 소득을 합산할 수 있어요. 단, 한 사람은 동시에 성인 최대 2명까지만 보증 가능해요 [13,15]."
    },
    {
      title: "2. 보증인의 '인정 소득(Assessable Income)' 범위와 2개 시점 입증 규칙",
      body: "Services Australia는 ① <strong>직전 회계연도 ATO 소득세 확정통지서(NOA)</strong>와 ② <strong>현재 회계연도 연속 2장 이상의 급여명세서(Payslips)</strong> 두 시점 모두에서 최소 소득 충족을 요구해요. 인정 소득에는 과세소득(Taxable Income) 외에 비과세 해외소득, 투자 순손실 환원분(Negative Gearing), 고용주 복리후생(Fringe Benefits), 추가 연금 납입분(Reportable Super)이 모두 합산돼요 [15]."
    },
    {
      title: "3. 소득이 부족할 때의 치트키: 호주 법인(Corporate) 재정보증 특례",
      body: "자녀의 개인 과세소득이 부족하거나 은퇴·육아휴직 중인 경우, 호주에서 <strong>2년 이상 실질적으로 영업 중인 법인(Pty Ltd 등)</strong>이 보증인으로 나서면 <strong>과세소득 심사가 전면 면제</strong>돼요! 대신 은행보증금(CBA Bank Guarantee)을 개인($10k/$14k)보다 높은 <strong>단일 $20,000(기여제 10년) / $10,000(일반 4년)</strong>로 예치하면 승인돼요 [13,15]."
    },
    {
      title: "4. 영주비자 AoS 소득($45k~$67k) vs Subclass 870 스폰서 소득($83,454.80) 비교",
      body: "영주 부모비자의 AoS는 접수 시가 아니라 <strong>18년 뒤 비자 발급 직전</strong>에 Services Australia에 증명하며 1인 보증+부모 2명 기준 <strong>$67,734</strong>예요. 반면 임시 부모비자인 <strong>Subclass 870은 비자 신청 전 스폰서십 단계에서 즉시 이민성에 직전 연도 과세소득 $83,454.80 이상</strong>(스폰서 본인+배우자+공동 후원 자녀 1인 합산 가능, LIN 19/146)을 증명해야 해요 [9,15]."
    }
  ] : [
    {
      title: "1. Who Can Be an Assurer? (Does NOT Need to Be the Sponsor Child!)",
      body: "<strong>The Assurer does not need to be the visa sponsor or even a family member.</strong> Any Australian Citizen, PR, or Protected SCV holder aged 18+ usually resident in Australia can act as Assurer, and up to <strong>3 Joint Assurers</strong> can pool their income. Each individual can assure at most <strong>2 adults concurrently</strong> [13,15]."
    },
    {
      title: "2. Assessable Income Definition & Dual-Timeframe Proof (ATO NOA + Current Payslips)",
      body: "Services Australia requires meeting the income threshold across <strong>both your latest ATO Notice of Assessment (NOA) AND current financial year evidence (2+ consecutive payslips)</strong>. Assessable income includes taxable income, target foreign income, net investment losses added back, reportable fringe benefits, and reportable super contributions [15]."
    },
    {
      title: "3. The Corporate Assurer Exemption ($20,000 Bond with Zero Income Test)",
      body: "If personal taxable income is insufficient, an <strong>Australian registered company (Pty Ltd actively trading in Australia for 2+ years)</strong> can act as a Corporate Assurer with <strong>NO taxable income test</strong>, subject to lodging a flat <strong>$20,000 Bank Guarantee (10-yr Contributory) or $10,000 (4-yr Parent)</strong> with CBA [13,15]."
    },
    {
      title: "4. Permanent Visa AoS ($45k–$67k at Release) vs Subclass 870 Sponsor Income ($83,454.80 Upfront)",
      body: "Permanent visa AoS is assessed by Services Australia <strong>at Queue Release (~18 yrs later)</strong> ($67,734 for 1 assurer + 2 parents). By contrast, <strong>Subclass 870 requires proving $83,454.80 taxable income upfront</strong> at sponsorship application (combinable with partner/1 other child under LIN 19/146) [9,15]."
    }
  ];
  box.innerHTML = cards.map(c => `
    <div class="pv-inference-card">
      <h4>${c.title}</h4>
      <p>${c.body}</p>
    </div>
  `).join("");
}

/* ============================================================================
   MODULE 05: WAITING PERIOD SURVIVAL MATRIX & 8 CRITICAL TRAPS
   ============================================================================ */
function renderSurvivalMatrixTable() {
  const tbody = document.getElementById("survival-matrix-tbody");
  if (!tbody) return;
  const rows = [
    {
      ko: ["<strong>호주 합법 체류권</strong>", "<span class='badge-ok'>✅ 가능 (최종 결정 시까지 BVA 체류)</span>", "<span class='badge-no'>❌ 자동 체류권 없음 (600/870 별도 필요)</span>", "<span class='badge-ok'>✅ 가능 (2년간 자유 체류·출입국)</span>", "<span class='badge-ok'>✅ 영구 체류권 (5년 RRV 단위)</span>"],
      en: ["<strong>Lawful Stay in Australia</strong>", "<span class='badge-ok'>✅ Yes (Onshore BVA until decision)</span>", "<span class='badge-no'>❌ No (Requires separate 600 or 870)</span>", "<span class='badge-ok'>✅ Yes (2-yr stay & travel)</span>", "<span class='badge-ok'>✅ Permanent Residence</span>"]
    },
    {
      ko: ["<strong>취업 권리 (Work Rights)</strong>", "<span class='badge-ok'>✅ 무제한 취업 가능 (BVA/BVB Nil 조건)</span><br/><small>(단, BVC 030은 8101 취업금지)</small>", "<span class='badge-no'>❌ 불가 (방문비자 8101 조건)</span>", "<span class='badge-ok'>✅ 무제한 취업 가능</span>", "<span class='badge-ok'>✅ 무제한 취업 가능</span>"],
      en: ["<strong>Work Rights</strong>", "<span class='badge-ok'>✅ Unrestricted (Nil condition on BVA/BVB)</span><br/><small>(BVC 030 has mandatory 8101 No Work)</small>", "<span class='badge-no'>❌ No Work (Visitor 8101)</span>", "<span class='badge-ok'>✅ Unrestricted Work Rights</span>", "<span class='badge-ok'>✅ Unrestricted Work Rights</span>"]
    },
    {
      ko: ["<strong>메디케어 (Medicare)</strong>", "<span class='badge-no'>❌ 전면 배제 (한국 국적자 불가)</span><br/><small>사보험(OVHC) 필수 · RHCA 11개국만 예외</small>", "<span class='badge-no'>❌ 불가</span>", "<span class='badge-ok'>✅ 메디케어 즉시 가입 가능!</span><br/><small>Health Insurance Act 장관 명령</small>", "<span class='badge-ok'>✅ 정식 메디케어 가입</span>"],
      en: ["<strong>Medicare Access</strong>", "<span class='badge-no'>❌ Excluded (Korean citizens ineligible)</span><br/><small>Must hold OVHC · Only 11 RHCA nations exempt</small>", "<span class='badge-no'>❌ Ineligible</span>", "<span class='badge-ok'>✅ Immediate Medicare Enrolment!</span><br/><small>Ministerial Order under Health Insurance Act</small>", "<span class='badge-ok'>✅ Full Medicare Access</span>"]
    },
    {
      ko: ["<strong>해외 출입국 (Travel)</strong>", "<span class='badge-warn'>⚠️ 출국 전 반드시 BVB(020) 승인 필수!</span><br/><small>BVA 상태로 출국 시 비자 즉시 소멸</small>", "<span class='badge-ok'>✅ 자유 (방문비자 조건 내)</span>", "<span class='badge-ok'>✅ 2년간 자유 출입국</span>", "<span class='badge-ok'>✅ 5년간 자유 출입국</span>"],
      en: ["<strong>Overseas Travel</strong>", "<span class='badge-warn'>⚠️ Must Obtain BVB (020) Before Departure!</span><br/><small>Departing on BVA ceases visa immediately</small>", "<span class='badge-ok'>✅ Free (subject to 600 visa)</span>", "<span class='badge-ok'>✅ Unlimited 2-yr travel</span>", "<span class='badge-ok'>✅ 5-yr travel facility</span>"]
    },
    {
      ko: ["<strong>정부 보조 노인요양 (My Aged Care)</strong>", "<span class='badge-no'>❌ 정부 보조금 배제 (연 $100,000+ 자비)</span>", "<span class='badge-no'>❌ 불가</span>", "<span class='badge-warn'>⚠️ 메디케어 소지자로 ACAT 평가 가능</span>", "<span class='badge-ok'>✅ 정부 보조 요양원·홈케어 가능</span>"],
      en: ["<strong>Subsidised Aged Care (My Aged Care)</strong>", "<span class='badge-no'>❌ Excluded ($100,000+/yr private cost)</span>", "<span class='badge-no'>❌ Ineligible</span>", "<span class='badge-warn'>⚠️ ACAT eligible with Medicare card</span>", "<span class='badge-ok'>✅ Full Commonwealth Subsidies</span>"]
    },
    {
      ko: ["<strong>센터링크 수당 & 호주 노령연금(Age Pension)</strong>", "<span class='badge-no'>❌ 불가</span>", "<span class='badge-no'>❌ 불가</span>", "<span class='badge-no'>❌ 불가</span>", "<span class='badge-warn'>⏳ 수당 4년(NARWP)/AoS 10년 제한</span><br/><small>노령연금 10년 거주 (한-호 협정 합산 가능!)</small>"],
      en: ["<strong>Centrelink & Age Pension</strong>", "<span class='badge-no'>❌ Ineligible</span>", "<span class='badge-no'>❌ Ineligible</span>", "<span class='badge-no'>❌ Ineligible</span>", "<span class='badge-warn'>⏳ 4-yr NARWP / 10-yr AoS recovery</span><br/><small>10-yr Age Pension (Korea-AU Agreement totalisation!)</small>"]
    }
  ];
  tbody.innerHTML = rows.map(r => {
    const cols = currentLang === "ko" ? r.ko : r.en;
    return `<tr>${cols.map(c => `<td>${c}</td>`).join("")}</tr>`;
  }).join("");
}

const SURVIVAL_CARDS = [
  {
    cat: "bridging",
    title_ko: "1. 브리징 비자(BVA/BVB/BVC) 취업권과 해외 출국 시 'BVB 만료' 소멸 함정",
    body_ko: "온쇼어 고령부모 비자(804/864/884)를 유효한 실체비자 소지 중 접수하면 <strong>취업제한 없는 Bridging Visa A(010, cl 010.611(1)(c))</strong>가 발급돼요. 그러나 <strong>BVA 상태에서 해외로 출국하면 공항 출국 즉시 BVA가 영구 소멸</strong>해요. 반드시 출국 최소 2~4주 전에 <strong>Bridging Visa B(020, $185)</strong>를 승인받고, BVB 여행 허용 기간(통상 3~12개월) 만료 전에 호주로 재입국해야 해요.",
    title_en: "1. Bridging Visa (BVA/BVB/BVC) Work Rights & The Overseas Travel Expiry Trap",
    body_en: "Valid onshore applications for 804/864/884 while holding a substantive visa grant a <strong>Bridging Visa A (010) with unrestricted work rights (cl 010.611(1)(c))</strong>. However, departing Australia on a BVA ceases it permanently. You must obtain a <strong>Bridging Visa B (020)</strong> before departure and return before the BVB travel facility expires."
  },
  {
    cat: "medicare",
    title_ko: "2. 부모비자 대기자 메디케어(Medicare) 법정 배제 vs 173/884 임시비자 메디케어 해금 전략",
    body_ko: "Health Insurance Act 1973 장관 명령에 의해 <strong>부모비자(103/143/173/804/864/884) 신청자는 영주권 신청자용 임시 메디케어(Interim Medicare) 대상에서 명시적으로 제외</strong>돼요(상호의료협정 RHCA 11개국 국민만 예외이며 <strong>한국은 미체결국</strong>). 단, <strong>1단계 임시 기여제 비자(Subclass 173 또는 884)가 승인되면 그 즉시 메디케어 가입이 가능</strong>해져 고령 부모님 병원비 부담을 크게 줄일 수 있어요 [14].",
    title_en: "2. Interim Medicare Exclusion for Parent Applicants vs Subclass 173/884 Medicare Unlock",
    body_en: "Under the Health Insurance Act 1973 Ministerial Order, <strong>parent visa applicants are expressly excluded from Interim Medicare while on a Bridging Visa</strong> unless from one of the 11 RHCA countries (South Korea is NOT an RHCA country). However, <strong>once granted temporary Subclass 173 or 884, holders immediately qualify for Medicare</strong> [14]."
  },
  {
    cat: "health",
    title_ko: "3. PIC 4005 2회 신체검사와 '$86,000 의료·요양비 상한' — 18년 대기 후 비자 거절 리스크",
    body_ko: "모든 부모비자는 <strong>건강요건 면제(Health Waiver)가 일절 없는 PIC 4005</strong>가 적용되며, <strong>1단계 대기열 편입 시점과 18~42년 뒤 2단계 최종 발급 직전에 총 2번 신체검사</strong>를 통과해야 해요. 대기 중 치매, 뇌졸중, 암, 신부전(투석) 또는 요양원 입소 판정을 받아 5년 예상 공공 의료·지역사회 서비스 비용이 <strong>$86,000(Significant Cost Threshold)</strong>를 초과하면 18년을 기다린 후에도 최종 거절돼요 [3–8].",
    title_en: "3. Dual PIC 4005 Medical Exams & The $86,000 Cost Threshold (Zero Health Waiver)",
    body_en: "All parent visas are subject to <strong>PIC 4005 (which has NO health waiver)</strong> and require passing medicals <strong>twice</strong>: at Stage 1 Queue Assessment and again at Stage 2 Queue Release 18–42 years later. If an aged parent develops dementia, renal failure, or requires residential aged care exceeding the <strong>$86,000 Significant Cost Threshold</strong>, the visa must be refused [3–8]."
  },
  {
    cat: "health",
    title_ko: "4. 온쇼어 대기 중 노인요양원(My Aged Care) 정부 보조금 배제와 연 $100,000+ 비용 폭탄",
    body_ko: "Subclass 804나 864를 접수하고 BVA로 호주에 거주하시는 동안에는 영주권자나 메디케어 소지자가 아니므로 <strong>연방정부 보조 요양원(Residential Aged Care) 및 홈케어 패키지(Support at Home) 보조금이 지원되지 않아요</strong>. 대기 중 거동이 불편해지거나 치매가 발병하면 연간 <strong>$100,000~$150,000 이상의 전액 사설 요양비</strong>가 발생하며, 동시에 PIC 4005 신검 탈락 사유가 돼요.",
    title_en: "4. Exclusion from Commonwealth-Subsidised Aged Care (My Aged Care) While on BVA",
    body_en: "Bridging Visa holders without Medicare/PR do not qualify for Commonwealth-subsidised residential aged care or Support at Home packages. Families waiting 18–42 years on a Subclass 804/864 BVA face <strong>$100,000–$150,000+/year in private nursing home fees</strong> if a parent develops severe frailty or dementia."
  },
  {
    cat: "welfare",
    title_ko: "5. 재정보증(AoS) 10년 구상권: 본드($14,000) 차감 및 보증인 개인 채무 추심",
    body_ko: "기여제 부모비자(143/864) 승인 후 <strong>10년 AoS 기간(일반 103/804는 4년)</strong> 동안 부모님께서 Special Benefit, JobSeeker Payment 등 회수 대상 복지수당(Recoverable Social Security Payments)을 수령하시면, 예치된 <strong>$10,000/$14,000 CBA 은행보증금에서 먼저 차감</strong>되고, 이를 초과하는 수령액 전액은 <strong>보증인(Assurer) 개인에 대한 연방정부 강제 추심 채무(세금환급 압류 등)</strong>로 회수돼요 [13,15].",
    title_en: "5. 10-Year AoS Debt Recovery: Bond Deduction & Personal Commonwealth Debt Enforcement",
    body_en: "During the <strong>10-year AoS period for 143/864 (4 years for 103/804)</strong>, any recoverable social security payment (Special Benefit, JobSeeker, etc.) paid to the parent is deducted from the <strong>$10,000/$14,000 CBA Bank Guarantee</strong>, and any excess is recovered directly from the Assurer as a legally enforceable Commonwealth debt [13,15]."
  },
  {
    cat: "welfare",
    title_ko: "6. 호주 노령연금(Age Pension) 10년 거주 요건과 '한-호 사회보장협정(국민연금 합산)' 활용법",
    body_ko: "원칙적으로 호주 노령연금(Age Pension)은 영주권 취득 후 <strong>10년 이상 호주에 거주</strong>해야 수급 자격이 생겨요. 그러나 <strong>한-호 사회보장협정(Social Security Guide 10.27)</strong>에 따라 <strong>한국 국민연금(NPS) 가입 기간을 호주 영주 거주 기간으로 합산(Totalisation)</strong>할 수 있어요! (단, 온쇼어 영주권 취득 시 최소 2년 계속 거주 요건 및 10년 AoS 기간 중 소득/자산 심사 적용) [15].",
    title_en: "6. 10-Year Age Pension Residence Rule & The Australia–Korea Social Security Agreement",
    body_en: "While Age Pension normally requires <strong>10 years of Australian PR residence</strong>, under the <strong>Australia–Korea Social Security Agreement (DSS Guide 10.27)</strong>, periods of coverage under the <strong>Korean National Pension Service (NPS) can be totalised (added)</strong> to meet the 10-year qualifying residence requirement (subject to 2 years continuous residence and AoS rules) [15]."
  },
  {
    cat: "family",
    title_ko: "7. Subclass 870과 영주 부모비자 간의 '비대칭 잠금 규칙(Asymmetric Lockout Bar)'",
    body_ko: "<strong>절대 금지 순서</strong>: Subclass 870 비자를 먼저 받고 소지 중인 상태에서는 103·143·173·804·864·884 영주/임시 부모비자 접수가 법정 무효(Sch 1 Item 1124/1130)예요. <strong>합법 황금 순서(PAM3 VM-6327 s 3.6.6)</strong>: 반대로 <strong>143이나 103을 먼저 접수해 Queue Date 대기열에 올려놓은 뒤, 대기기간 동안 870 비자(또는 600 장기 방문비자 3~5년, Condition 8558 18개월 중 12개월 체류)를 신청하는 것은 완전히 합법</strong>이에요 [9,18].",
    title_en: "7. The Asymmetric Subclass 870 Lockout Bar vs The Legal 'Golden Sequence'",
    body_en: "<strong>Prohibited Sequence</strong>: Holding a Subclass 870 visa strictly bars lodging any 103/143/173/804/864/884 application (Sch 1 Item 1124/1130). <strong>Permitted Golden Sequence (PAM3 VM-6327 s 3.6.6)</strong>: Lodging Subclass 143 or 103 <strong>FIRST</strong> to enter the queue and subsequently applying for a Subclass 870 (or 3–5 yr Visitor Visa 600) while waiting IS legally permitted [9,18]."
  },
  {
    cat: "family",
    title_ko: "8. 대기 중 주신청자/스폰서 사망 시 대처법 & 고령 치매 대비 영속적 위임장(EPOA)",
    body_ko: "① <strong>주신청자 사망 시</strong>: 143/103은 동반 배우자가 주신청자 지위를 승계할 수 있으나, <strong>804/864/884는 2024.12.17 개정법에 따라 동반 배우자가 최초 접수 당시 만 67세 이상이었던 경우에만 승계 가능</strong>해요(PAM3 VM-3058 s 3.9.1). ② <strong>스폰서 자녀 사망 시</strong>: 다른 호주 시민권/영주권 자녀나 배우자 등으로 스폰서를 변경할 수 있어요. ③ <strong>치매 대비</strong>: 18년 대기 중 의사능력 상실 시 비자 서류 서명이 불가능해지므로 건강하실 때 호주 주별 <strong>영속적 위임장(Enduring Power of Attorney, EPOA)</strong>을 반드시 작성해 두셔야 해요.",
    title_en: "8. Death of Primary Applicant / Sponsor & Mandatory Enduring Power of Attorney (EPOA)",
    body_en: "① <strong>Death of Primary Applicant</strong>: On 143/103, the surviving spouse can succeed as primary applicant; however, on <strong>804/864/884 lodged on/after 17 Dec 2024, the surviving spouse can ONLY succeed if they were already aged 67+ at initial lodgement (PAM3 VM-3058 s 3.9.1)</strong>. ② <strong>Dementia Preparedness</strong>: Always execute an Australian <strong>Enduring Power of Attorney (EPOA)</strong> early so a child can sign Stage 2 visa and AoS forms if cognitive decline occurs during the 18-year wait."
  }
];

function renderSurvivalCards() {
  const box = document.getElementById("survival-cards-grid");
  if (!box) return;
  const filtered = currentSurvivalFilter === "all"
    ? SURVIVAL_CARDS
    : SURVIVAL_CARDS.filter(c => c.cat === currentSurvivalFilter);
  box.innerHTML = filtered.map(c => `
    <div class="pv-inference-card">
      <h4>${currentLang === "ko" ? c.title_ko : c.title_en}</h4>
      <p>${currentLang === "ko" ? c.body_ko : c.body_en}</p>
    </div>
  `).join("");
}

/* ============================================================================
   MODULE 06: 22 OFFICIAL LINKS DIRECTORY, POLLER SCHEDULE, FOOTNOTES & MODAL
   ============================================================================ */
const OFFICIAL_LINKS = [
  { cat: "queue", cat_ko: "대기열·PVC·접수", cat_en: "Queue & PVC", title_ko: "1. 부모비자 월별 Queue Release Date 공식 공시", title_en: "1. Parent Visas Queue Release Dates (Home Affairs)", desc_ko: "매월 갱신되는 7대 부모비자 1단계(Queue Assessment) 및 2단계(Queue Release) 기준일 공시 페이지예요.", desc_en: "Official monthly table of Stage 1 Queue Assessment and Stage 2 Queue Release dates.", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-processing-times/visa-processing-priorities/parent-visas" },
  { cat: "queue", cat_ko: "대기열·PVC·접수", cat_en: "Queue & PVC", title_ko: "2. 부모비자 대기순번 계산기 (Parent Visa Queue Calculator)", title_en: "2. Parent Visa Queue Calculator", desc_ko: "부여받은 Queue Date를 입력하면 내 앞에 몇 명의 대기자가 남아 있는지 조회할 수 있어요.", desc_en: "Check approximate number of queued applicants ahead of your assigned Queue Date.", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-processing-times/family-visa-processing-priorities/parent-visas-queue-release-dates" },
  { cat: "queue", cat_ko: "대기열·PVC·접수", cat_en: "Queue & PVC", title_ko: "3. 부모비자 심사센터(PVC) 온라인 문의·서류제출 웹폼", title_en: "3. Parent Visa Processing Centre (PVC) Online Enquiry Form", desc_ko: "대기 중 여권 갱신, 연락처 변경, 배우자 사망/가족 변동 통지 및 서류 추가 제출용 공식 웹폼이에요.", desc_en: "Official webform to notify passport renewals, address updates, or family changes during the queue.", url: "https://immi.homeaffairs.gov.au/help-support/departmental-forms/online-forms/parent-visa-enquiry-form" },
  { cat: "queue", cat_ko: "대기열·PVC·접수", cat_en: "Queue & PVC", title_ko: "4. ImmiAccount (103/143/804/864 온라인 접수 & BVB 신청)", title_en: "4. ImmiAccount Portal (Online Lodgement & BVB)", desc_ko: "2026.04.22부터 의무화된 103·143·804·864 온라인 접수 및 온쇼어 대기자 BVB 신청 포털이에요.", desc_en: "Mandatory online lodgement portal for 103, 143, 804, 864 (since 22 Apr 2026) and BVB applications.", url: "https://online.immi.gov.au/lusc/login" },
  { cat: "queue", cat_ko: "대기열·PVC·접수", cat_en: "Queue & PVC", title_ko: "5. 가족균형테스트 (Balance of Family Test — Reg 1.05)", title_en: "5. Balance of Family Test Official Rules", desc_ko: "자녀 수(1~10명)에 따른 호주 시민권·영주권 자녀 최소 비율 및 의붓/입양 자녀 산입 기준이에요.", desc_en: "Official mathematical table and rules for the Balance of Family Test under reg 1.05.", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/parent-103/balance-of-family-test" },
  { cat: "queue", cat_ko: "대기열·PVC·접수", cat_en: "Queue & PVC", title_ko: "6. 연간 이민 프로그램 계획 수준 (Migration Program Planning Levels)", title_en: "6. Migration Program Planning Levels", desc_ko: "연방정부의 회계연도별 부모비자 배정 쿼터(8,500석 / FY26–27 계획 7,060석) 공시 페이지예요.", desc_en: "Annual Migration Program ceiling for the Parent visa stream.", url: "https://immi.homeaffairs.gov.au/what-we-do/migration-program-planning-levels" },
  { cat: "subclasses", cat_ko: "7대 서브클래스", cat_en: "7 Subclasses", title_ko: "7. Subclass 143 — 기여제 부모 영주비자 공식 안내", title_en: "7. Subclass 143 — Contributory Parent (Permanent)", desc_ko: "오프쇼어/일반 기여제 영주비자 요건, 1·2차 신청비($43,600) 및 ImmiAccount 접수 안내예요.", desc_en: "Official Subclass 143 eligibility, fees, and online lodgement steps.", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/contributory-parent-143" },
  { cat: "subclasses", cat_ko: "7대 서브클래스", cat_en: "7 Subclasses", title_ko: "8. Subclass 173 — 기여제 부모 임시비자 (2년 · 메디케어 부여)", title_en: "8. Subclass 173 — Contributory Parent (Temporary)", desc_ko: "2차 기여금을 분할($29,130 + $19,420)하고 승인 즉시 메디케어를 받는 2단계 임시비자예요.", desc_en: "Stage 1 temporary contributory visa unlocking Medicare and deferring AoS for 2 years.", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/contributory-parent-temporary-173" },
  { cat: "subclasses", cat_ko: "7대 서브클래스", cat_en: "7 Subclasses", title_ko: "9. Subclass 864 — 기여제 고령부모 영주비자 (Onshore 67+)", title_en: "9. Subclass 864 — Contributory Aged Parent (Residence)", desc_ko: "만 67세 이상 온쇼어 신청자에게 BVA(취업 자유)와 Direction 117 우선심사를 부여하는 기여제 영주비자예요.", desc_en: "Onshore aged (67+) contributory PR visa granting a BVA and Direction 117 priority.", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/contributory-aged-parent-864" },
  { cat: "subclasses", cat_ko: "7대 서브클래스", cat_en: "7 Subclasses", title_ko: "10. Subclass 884 — 기여제 고령부모 임시비자 (Onshore 67+)", title_en: "10. Subclass 884 — Contributory Aged Parent (Temporary)", desc_ko: "온쇼어 고령 2단계 분할 경로의 1단계 임시비자(종이 우편 접수 · 승인 시 메디케어 부여)예요.", desc_en: "Onshore aged temporary contributory visa (paper lodgement, unlocks Medicare upon grant).", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/contributory-aged-parent-temporary-884" },
  { cat: "subclasses", cat_ko: "7대 서브클래스", cat_en: "7 Subclasses", title_ko: "11. Subclass 103 — 일반 부모 영주비자 (Parent Visa)", title_en: "11. Subclass 103 — Parent (Migrant) Visa", desc_ko: "낮은 2차 신청비($2,065)와 4년 AoS가 적용되나 약 42년의 대기기간이 소요되는 일반 부모비자예요.", desc_en: "Non-contributory permanent parent visa (~42-year wait, $2,065 2nd VAC, 4-year AoS).", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/parent-103" },
  { cat: "subclasses", cat_ko: "7대 서브클래스", cat_en: "7 Subclasses", title_ko: "12. Subclass 804 — 일반 고령부모 영주비자 (Aged Parent 67+)", title_en: "12. Subclass 804 — Aged Parent (Residence) Visa", desc_ko: "만 67세 이상 온쇼어 접수 시 BVA가 부여되나 42년 대기 중 메디케어/요양원 보조가 없는 비자예요.", desc_en: "Onshore aged non-contributory visa granting BVA (~42-year wait, no Medicare during wait).", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/aged-parent-804" },
  { cat: "subclasses", cat_ko: "7대 서브클래스", cat_en: "7 Subclasses", title_ko: "13. Subclass 870 — 스폰서 임시 부모비자 (3년/5년, 최대 10년)", title_en: "13. Subclass 870 — Sponsored Parent (Temporary) Visa", desc_ko: "가족균형테스트 없이 3년($5,895) 또는 5년($11,785) 체류 가능한 임시 부모비자예요(선접수 시 영주비자 차단 주의).", desc_en: "3- or 5-year temporary parent visa without Balance of Family Test (bars lodging PR while held).", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/sponsored-parent-temporary-870" },
  { cat: "bridging", cat_ko: "브리징·VEVO·방문", cat_en: "BVA/BVB & VEVO", title_ko: "14. VEVO (비자 상태 · 취업 조건 · BVB 여행 만료일 실시간 조회)", title_en: "14. VEVO — Visa Entitlement Verification Online", desc_ko: "현재 소지한 BVA/BVB의 조건(8101/8503 유무)과 BVB 재입국 만료일을 실시간 확인하는 공식 포털이에요.", desc_en: "Verify current visa conditions, work entitlements, and BVB travel facility expiry dates.", url: "https://immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/check-conditions-online" },
  { cat: "bridging", cat_ko: "브리징·VEVO·방문", cat_en: "BVA/BVB & VEVO", title_ko: "15. Bridging Visa B (Subclass 020 — 해외 출국 전 필수 신청)", title_en: "15. Bridging Visa B (BVB — Subclass 020)", desc_ko: "온쇼어 804/864/884 대기자가 한국 방문 등 해외 출국 전 반드시 승인받아야 하는 여행 허가 비자예요.", desc_en: "Essential travel bridging visa required before any overseas trip while waiting on a BVA.", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/bridging-visa-b-020" },
  { cat: "bridging", cat_ko: "브리징·VEVO·방문", cat_en: "BVA/BVB & VEVO", title_ko: "16. Visitor Visa (Subclass 600 — 부모비자 대기자 3~5년 장기 방문비자)", title_en: "16. Visitor Visa (Subclass 600 — Long-Validity Parent Stream)", desc_ko: "오프쇼어 103/143 대기 부모님께 최대 3~5년 유효기간(18개월 중 12개월 체류, 8558 조건)을 부여하는 방문비자예요.", desc_en: "Visitor visa offering up to 3–5 year validity (12m stay per 18m) for queued offshore parents.", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/visitor-600" },
  { cat: "welfare", cat_ko: "AoS·메디케어·요양·연금", cat_en: "AoS, Medicare & Care", title_ko: "17. Services Australia — 재정보증(Assurance of Support, AoS) 공식 포털", title_en: "17. Services Australia — Assurance of Support (AoS)", desc_ko: "2단계 Queue Release 시점에 진행하는 AoS 신청 절차, 10년/4년 기간 및 CBA 은행보증 안내예요.", desc_en: "Official Services Australia portal for Assurance of Support applications and CBA bank guarantees.", url: "https://www.servicesaustralia.gov.au/assurance-support" },
  { cat: "welfare", cat_ko: "AoS·메디케어·요양·연금", cat_en: "AoS, Medicare & Care", title_ko: "18. Services Australia — AoS 보증인(Assurer) 자격 및 소득 기준", title_en: "18. Services Australia — Who Can Give an Assurance of Support", desc_ko: "개인 보증인(최대 3인 합산, 성인 2명 피보증 한도) 및 법인 보증인($20,000 본드) 자격 요건 안내예요.", desc_en: "Eligibility rules for individual, joint (up to 3), and corporate assurers.", url: "https://www.servicesaustralia.gov.au/who-can-give-assurance-support" },
  { cat: "welfare", cat_ko: "AoS·메디케어·요양·연금", cat_en: "AoS, Medicare & Care", title_ko: "19. Services Australia — 메디케어 가입 자격 (173/884 및 영주권자)", title_en: "19. Services Australia — Enrolling in Medicare", desc_ko: "173/884 임시비자 승인자 및 영주권 승인자의 메디케어 온라인 등록 절차 안내예요.", desc_en: "Official Medicare enrolment rules for permanent residents and Subclass 173/884 holders.", url: "https://www.servicesaustralia.gov.au/enrolling-medicare" },
  { cat: "welfare", cat_ko: "AoS·메디케어·요양·연금", cat_en: "AoS, Medicare & Care", title_ko: "20. Services Australia — 상호의료협정(RHCA 11개국) 공식 안내", title_en: "20. Services Australia — Reciprocal Health Care Agreements (RHCA)", desc_ko: "영국·뉴질랜드·이탈리아 등 11개 RHCA 체결국 명단(한국 미포함) 확인 페이지예요.", desc_en: "List of the 11 RHCA countries eligible for reciprocal Medicare (excludes South Korea).", url: "https://www.servicesaustralia.gov.au/reciprocal-health-care-agreements" },
  { cat: "welfare", cat_ko: "AoS·메디케어·요양·연금", cat_en: "AoS, Medicare & Care", title_ko: "21. DSS Guide 10.27 — 한-호 사회보장협정 (국민연금-노령연금 합산)", title_en: "21. DSS Social Security Guide 10.27 — Agreement with Korea", desc_ko: "한국 국민연금 가입 기간을 호주 노령연금(Age Pension) 10년 거주 기간으로 합산하는 법정 지침이에요.", desc_en: "Official DSS guide on totalising Korean National Pension coverage for Australian Age Pension.", url: "https://guides.dss.gov.au/social-security-guide/10/27" },
  { cat: "welfare", cat_ko: "AoS·메디케어·요양·연금", cat_en: "AoS, Medicare & Care", title_ko: "22. My Aged Care — 호주 정부 노인요양 자격 및 ACAT 평가 포털", title_en: "22. My Aged Care — Government Aged Care Eligibility", desc_ko: "영주권 취득 후 정부 보조 홈케어(Support at Home) 및 노인요양원 입소 평가 신청 포털이에요.", desc_en: "Commonwealth portal for aged care assessments (ACAT) and Home Care / Residential Aged Care.", url: "https://www.myagedcare.gov.au/am-i-eligible" }
];

function renderOfficialLinksGrid() {
  const box = document.getElementById("official-links-grid");
  if (!box) return;
  const filtered = currentLinksCat === "all"
    ? OFFICIAL_LINKS
    : OFFICIAL_LINKS.filter(l => l.cat === currentLinksCat);
  box.innerHTML = filtered.map(l => `
    <div class="pv-link-card">
      <div>
        <span class="lc-cat">${currentLang === "ko" ? l.cat_ko : l.cat_en}</span>
        <h4>${currentLang === "ko" ? l.title_ko : l.title_en}</h4>
        <p>${currentLang === "ko" ? l.desc_ko : l.desc_en}</p>
      </div>
      <a href="${l.url}" target="_blank" rel="noopener">
        ${currentLang === "ko" ? "공식 페이지 바로가기" : "Open Official Portal"} &rarr;
      </a>
    </div>
  `).join("");
}

function renderPollerScheduleTable() {
  const tbody = document.getElementById("poller-schedule-tbody");
  if (!tbody) return;
  const rows = [
    {
      ko: ["<strong>매주 월·목 (Weekly)</strong>", "이민성 Parent Visas Queue Release 페이지 (#contentBox)", "insane-search HTML 파서 (\\u200b 제거)", "기준일(31 Aug 2026), 7×4 단계별 컷오프, 신규 예상 대기연수(18/42년) 및 큐 이동속도(Velocity) 자동 갱신"],
      en: ["<strong>Twice Weekly</strong>", "Home Affairs Parent Visas Queue Release Page (#contentBox)", "insane-search HTML Parser (\\u200b strip)", "Auto-updates as_at_date, 7x4 milestone cutoffs, 18/42-yr estimates & rolling 12-month velocity"]
    },
    {
      ko: ["<strong>매월 1일 & 매년 7월 1일</strong>", "이민성 내부 가격 API (GetPriceList) & 7대 서브클래스 페이지", "POST JSON API + PageSchemaHiddenField 파서", "103/143/173/804/864/884/870 1차 신청비, 2차 기여금($43,600 등), 온라인/종이 접수 규칙, 870 소득 기준($83,454.80)"],
      en: ["<strong>Monthly & 1 July</strong>", "DHA Pricing API (GetPriceList) & 7 Subclass Pages", "POST JSON API + PageSchemaHiddenField", "1st & 2nd VAC across all 15 fee tiers, online/paper lodgement rules & 870 sponsor income ($83,454.80)"]
    },
    {
      ko: ["<strong>매년 3.20 · 7.1 · 9.20</strong>", "DSS Social Security Guide 9.4.3 & Services Australia AoS/RHCA", "insane-search 웹/JSON 스냅샷 대조", "JobSeeker 기준액($22,578), FTB-A 자녀 가산액($2,942), AoS 최소 과세소득($45,156/$67,734) 및 본드($10k/$14k/$20k)"],
      en: ["<strong>20 Mar · 1 Jul · 20 Sep</strong>", "DSS Guide 9.4.3 & Services Australia AoS / RHCA Pages", "insane-search Snapshot & Formula Parser", "JobSeeker base ($22,578), FTB-A child add-on ($2,942), AoS income thresholds ($45,156/$67,734) & bond amounts"]
    },
    {
      ko: ["<strong>매년 5월(예산안) & 매월</strong>", "연방 법제처(legislation.gov.au) OData API & Planning Levels", "OData v4 JSON + PageSchemaHiddenField", "Migration Act s 85 연간 최대 발급 상한 고시(LIN 26/042: 8,500석) 및 이민 프로그램 계획치(7,060석)"],
      en: ["<strong>May Budget & Monthly</strong>", "Federal Register OData v4 API & Migration Planning Levels", "OData JSON + PageSchemaHiddenField", "Section 85 Parent Cap Determinations (LIN 26/042: 8,500 cap) & annual planning levels (7,060 places)"]
    }
  ];
  tbody.innerHTML = rows.map(r => {
    const cols = currentLang === "ko" ? r.ko : r.en;
    return `<tr>${cols.map(c => `<td>${c}</td>`).join("")}</tr>`;
  }).join("");
}

const FOOTNOTES = [
  { num: 1, text: "Department of Home Affairs, 'Parent visas queue release dates' (Data as at 31 August 2026, Last updated 6 October 2026) — https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-processing-times/visa-processing-priorities/parent-visas" },
  { num: 2, text: "Department of Home Affairs Internal Visa Pricing API (`POST /_layouts/15/api/data.aspx/GetPriceList`) & Migration Regulations 1994 Schedule 1 Items 1124, 1124A, 1130, 1130A, 1221, 1221A, 1239 (FY2026–27 VACs)." },
  { num: 3, text: "Department of Home Affairs, 'Contributory Parent visa (subclass 143)' (ImmiAccount online lodgement mandate effective 22 April 2026, $43,600 2nd VAC, 10-year AoS, PIC 4005)." },
  { num: 4, text: "Department of Home Affairs, 'Contributory Parent (Temporary) visa (subclass 173)' (Paper lodgement to Perth PVC, $29,130 2nd VAC + $19,420 step-up to 143, Medicare access upon grant)." },
  { num: 5, text: "Department of Home Affairs, 'Contributory Aged Parent visa (subclass 864)' (Age 67+ Schedule 1 validity requirement effective 17 December 2024, onshore BVA, $43,600 2nd VAC)." },
  { num: 6, text: "Department of Home Affairs, 'Contributory Aged Parent (Temporary) visa (subclass 884)' (Age 67+, paper lodgement, $29,130 2nd VAC, Medicare access upon grant)." },
  { num: 7, text: "Department of Home Affairs, 'Parent visa (subclass 103)' (ImmiAccount online lodgement, $2,065 2nd VAC, 4-year AoS, ~42-year wait estimate)." },
  { num: 8, text: "Department of Home Affairs, 'Aged Parent visa (subclass 804)' (Age 67+ Schedule 1 validity requirement, onshore BVA, ~42-year wait estimate)." },
  { num: 9, text: "Department of Home Affairs, 'Sponsored Parent (Temporary) visa (subclass 870)' & Migration Regulations 1994 reg 2.60W / LIN 19/146 ($83,454.80 sponsor taxable income; Schedule 1 bar on lodging permanent parent visas while holding 870)." },
  { num: 10, text: "Migration Regulations 1994 reg 1.05 — Balance of Family Test mathematical table (at least half of total children settled in Australia, or more eligible children in Australia than in any other single country)." },
  { num: 11, text: "Department of Home Affairs, 'Migration Program planning levels' (FY2025–26 ceiling 8,500 places; FY2026–27 planning ceiling 7,060 places)." },
  { num: 12, text: "Migration (Granting of Parent and Other Family Visas in the 2025–2026 Financial Year) Instrument 2026 — LIN 26/042 (F2026L00724, s 85 cap: 6,800 Contributory incl. 1,125 Aged + 1,700 Parent = 8,500 total) & Home Affairs FOI Disclosures DA 26/01/00017, DA 25/07/00301, FA 24/11/00862 (158,468 total on-hand backlog; 804 annual grants = 37)." },
  { num: 13, text: "Services Australia, 'Assurance of Support' & 'Who can give an Assurance of Support' (10-year AoS & $10,000/$14,000 bond for 143/864; 4-year AoS & $5,000/$7,000 bond for 103/804; $20,000/$10,000 Corporate Assurer bond; max 2 adult assurees per assurer)." },
  { num: 14, text: "Services Australia, 'Enrolling in Medicare' & 'Reciprocal Health Care Agreements' & Health Insurance Act 1973 Ministerial Order (Parent visa applicants on Bridging Visas are excluded from Interim Medicare unless from 11 RHCA countries; Subclass 173/884 holders qualify for Medicare)." },
  { num: 15, text: "Social Security (Assurance of Support) Determination 2018 (F2024C00296) ss 7–18 & DSS Social Security Guide 9.4.3 / 10.27 (FY2026–27 JSP base $22,578 + FTB-A child $2,942 formula: $45,156 for 1 parent, $67,734 for 2 parents; Korea–Australia Social Security Agreement pension totalisation)." },
  { num: 16, text: "Ministerial Direction No. 103 — Order of Consideration: Certain Family Visas (s 6(2)(c) upfront assessment for aged parent visas; s 7(2)(b) Stage 1 lodgement date deeming for 173→143 and 884→864 step-up applications)." },
  { num: 17, text: "Ministerial Direction No. 117 — Priority Processing for Onshore Aged Parent Applications (effective 25 July 2026, s 8(2)(a) priority for onshore 864/884)." },
  { num: 18, text: "PAM3 (LegendCom Procedural Instructions): VM-3058 (Parent Visa Processing — s 3.9.1 post-17 Dec 2024 surviving spouse under 67 succession bar) & VM-6327 (Subclass 870 — s 3.6.6 permitted sequence of lodging 143/103 prior to 870)." }
];

function renderFootnotes() {
  const box = document.getElementById("footnotes-container");
  if (!box) return;
  box.innerHTML = FOOTNOTES.map(f => `
    <div class="footnote-item">
      <span class="fn-num">[${f.num}]</span>
      <span class="fn-text">${f.text}</span>
    </div>
  `).join("");
}

function openSourceMonitorModal() {
  const modal = document.getElementById("detail-modal");
  const body = document.getElementById("modal-body-content");
  if (!modal || !body) return;
  const sources = (POLLING_DATA && Array.isArray(POLLING_DATA.sources)) ? POLLING_DATA.sources : [];
  const internalRefs = (POLLING_DATA && Array.isArray(POLLING_DATA.internal_policy_references)) ? POLLING_DATA.internal_policy_references : [];

  let html = `
    <div style="margin-bottom:16px;padding:12px 16px;background:#E7F3EC;border-radius:8px;color:#1F5138;font-size:13.5px;font-weight:600;">
      ${currentLang === "ko"
        ? `최종 폴링 시각: <strong>${POLLING_DATA.last_polled_at || "2026-10-20"}</strong> · 공개 1차 출처 <strong>${sources.length}/15 Live Verified</strong> + 내부 심사지침(PAM3/Direction) <strong>${internalRefs.length}건</strong> 검증 완료`
        : `Last Polled: <strong>${POLLING_DATA.last_polled_at || "2026-10-20"}</strong> · Public Primary Sources <strong>${sources.length}/15 Live Verified</strong> + <strong>${internalRefs.length}</strong> Internal Policy References`}
    </div>
    <div class="table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>${currentLang === "ko" ? "기관 / 출처명" : "Authority / Source"}</th>
            <th>${currentLang === "ko" ? "점검 주기 & 검증 항목" : "Cadence & Scope"}</th>
            <th>Status / SHA-256</th>
          </tr>
        </thead>
        <tbody>
          ${sources.map(s => `
            <tr>
              <td><code>${s.id}</code></td>
              <td>
                <strong>${currentLang === "ko" ? s.title_ko : s.title_en}</strong><br/>
                <small style="color:#71717A;">${currentLang === "ko" ? s.authority_ko : s.authority_en}</small><br/>
                <a href="${s.url}" target="_blank" rel="noopener" style="font-size:12px;color:#6E252D;">${s.url}</a>
              </td>
              <td style="font-size:12.5px;">
                <strong>${currentLang === "ko" ? (s.cadence_ko || "") : (s.cadence_en || "")}</strong><br/>
                ${currentLang === "ko" ? s.check_scope_ko : s.check_scope_en}
              </td>
              <td>
                <span class="badge-ok">HTTP ${s.http_code || 200} · LIVE</span><br/>
                <code style="font-size:11px;">${(s.sha256 || "").slice(0, 14)}…</code>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
  body.innerHTML = html;
  modal.classList.add("open");
}

function applyLanguage(lang) {
  currentLang = lang === "en" ? "en" : "ko";
  document.documentElement.lang = currentLang;

  const btnKo = document.getElementById("lang-toggle-ko");
  const btnEn = document.getElementById("lang-toggle-en");
  if (btnKo) btnKo.classList.toggle("active", currentLang === "ko");
  if (btnEn) btnEn.classList.toggle("active", currentLang === "en");

  const dict = I18N[currentLang] || I18N.ko;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.getAttribute("data-i18n");
    if (dict[k]) el.textContent = dict[k];
  });

  renderPipelineFlow();
  renderOfficialQueueTable();
  renderSvgChartsModule1();
  renderInferencesGrid();
  runQueueSimulator();
  runPathwayWizard();
  renderSubclassComparisonTable();
  runCostAosCalculator();
  renderAosDeepCards();
  renderSurvivalMatrixTable();
  renderSurvivalCards();
  renderOfficialLinksGrid();
  renderPollerScheduleTable();
  renderFootnotes();
}

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage("ko");

  document.getElementById("lang-toggle-ko")?.addEventListener("click", () => applyLanguage("ko"));
  document.getElementById("lang-toggle-en")?.addEventListener("click", () => applyLanguage("en"));

  ["sim-subclass", "sim-stage", "sim-year", "sim-month", "sim-age"].forEach(id => {
    document.getElementById(id)?.addEventListener("change", runQueueSimulator);
    document.getElementById(id)?.addEventListener("input", runQueueSimulator);
  });

  ["wiz-main-age", "wiz-spouse-age", "wiz-location", "wiz-visa-cond", "wiz-total-children", "wiz-au-children", "wiz-budget"].forEach(id => {
    document.getElementById(id)?.addEventListener("change", runPathwayWizard);
  });

  ["cost-pathway", "cost-parents", "cost-assurers", "cost-assurer-kids", "cost-existing-assured", "cost-actual-income", "cost-ovhc-years"].forEach(id => {
    document.getElementById(id)?.addEventListener("change", runCostAosCalculator);
    document.getElementById(id)?.addEventListener("input", runCostAosCalculator);
  });

  document.querySelectorAll("#survival-filter-bar .pv-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#survival-filter-bar .pv-filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentSurvivalFilter = btn.getAttribute("data-filter") || "all";
      renderSurvivalCards();
    });
  });

  document.querySelectorAll("#links-filter-bar .pv-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#links-filter-bar .pv-filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentLinksCat = btn.getAttribute("data-cat") || "all";
      renderOfficialLinksGrid();
    });
  });

  document.getElementById("btn-polling-status")?.addEventListener("click", openSourceMonitorModal);
  document.getElementById("modal-close-btn")?.addEventListener("click", () => {
    document.getElementById("detail-modal")?.classList.remove("open");
  });
  document.getElementById("detail-modal")?.addEventListener("click", e => {
    if (e.target.id === "detail-modal") {
      document.getElementById("detail-modal")?.classList.remove("open");
    }
  });
});
