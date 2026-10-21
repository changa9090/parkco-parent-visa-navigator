/* ============================================================================
   Park & Co Lawyers — Australian Parent Visas (103, 143, 173, 804, 864, 884 & 870)
   Queue Release, Waiting Period Survival & AoS Navigator (app.js)
   ============================================================================ */

const QUEUE_DATA = {"release_id":"2026.10.21-audit-v2","generated_at":"2026-10-21T14:08:00+10:00","last_polled_date":"2026-10-21","official_contact":"enquiry@parkcolawyers.com","live_queue_state":{"as_at_date":"31 August 2026","last_updated_str":"6/10/2026 10:27 AM","queue_release_bullets":{"Contributory Parent":"November 2018","Contributory Aged Parent":"November 2020","Parent":"March 2014","Aged Parent":"October 2014"},"milestone_table":[{"visa_type":"Temporary to Permanent (173 to 143 and 884 to 864)","acknowledge_new_application":"Approx. 4 weeks","queue_assessment":"N/A","visa_assessment_queue_release_date":"May 2026"},{"visa_type":"Contributory Parent (143)","acknowledge_new_application":"Approx. 4 weeks","queue_assessment":"Lodged April 2024","visa_assessment_queue_release_date":"Lodged/queued up to November 2018"},{"visa_type":"Contributory Parent (Temp) (173)","acknowledge_new_application":"Approx. 4 weeks","queue_assessment":"Lodged April 2024","visa_assessment_queue_release_date":"Lodged/queued up to November 2018"},{"visa_type":"Contributory Aged Parent (864)","acknowledge_new_application":"Approx. 4 weeks","queue_assessment":"Lodged April 2023","visa_assessment_queue_release_date":"Lodged/queued up to November 2020"},{"visa_type":"Contributory Aged Parent (Temp) (884)","acknowledge_new_application":"Approx. 4 weeks","queue_assessment":"Lodged April 2023","visa_assessment_queue_release_date":"Lodged/queued up to November 2020"},{"visa_type":"Parent (103)","acknowledge_new_application":"Approx. 4 weeks","queue_assessment":"Lodged February 2023","visa_assessment_queue_release_date":"Queued up to March 2014"},{"visa_type":"Aged Parent (804)","acknowledge_new_application":"Approx. 4 weeks","queue_assessment":"Lodged January 2023","visa_assessment_queue_release_date":"Queued up to October 2014"}],"new_application_estimates":{"Contributory Parent visas":"18 years","Parent & Aged Parent visas":"42 years"}},"queue_lags_months_as_at_aug_2026":[{"id":"step_up","subclasses":["173_to_143","884_to_864"],"label_ko":"2단계 영주 전환 (173→143 / 884→864)","label_en":"2-Stage Temp→Perm (173→143 / 884→864)","stage1_assessment_str":"N/A (Direction 103 s 7(2)(b) 1단계 접수일 의제)","stage1_assessment_str_en":"N/A (Deemed Stage 1 Lodgement Date under Direction 103 s 7(2)(b))","stage1_lag_months":0,"stage2_release_str":"May 2026","stage2_release_dec":2026.42,"stage2_lag_months":3,"official_wait_years":null,"empirical_velocity_months_per_year":12.0},{"id":"sub_864_884","subclasses":["864","884"],"label_ko":"기여제 고령부모 (864 / 884 · Onshore 67+)","label_en":"Contributory Aged Parent (864 / 884 · Onshore 67+)","stage1_assessment_str":"2023년 4월 접수분","stage1_assessment_str_en":"Lodged April 2023","stage1_lag_months":40,"stage2_release_str":"November 2020","stage2_release_dec":2020.92,"stage2_lag_months":69,"official_wait_years":18,"empirical_velocity_months_per_year":9.13},{"id":"sub_143_173","subclasses":["143","173"],"label_ko":"기여제 부모 (143 / 173 · 일반)","label_en":"Contributory Parent (143 / 173 · General)","stage1_assessment_str":"2024년 4월 접수분","stage1_assessment_str_en":"Lodged April 2024","stage1_lag_months":28,"stage2_release_str":"November 2018","stage2_release_dec":2018.92,"stage2_lag_months":93,"official_wait_years":18,"empirical_velocity_months_per_year":5.07},{"id":"sub_804","subclasses":["804"],"label_ko":"일반 고령부모 (804 · Onshore 67+)","label_en":"Aged Parent (804 · Onshore 67+)","stage1_assessment_str":"2023년 1월 접수분","stage1_assessment_str_en":"Lodged January 2023","stage1_lag_months":43,"stage2_release_str":"October 2014","stage2_release_dec":2014.83,"stage2_lag_months":142,"official_wait_years":42,"empirical_velocity_months_per_year":2.35},{"id":"sub_103","subclasses":["103"],"label_ko":"일반 부모 (103 · Offshore/일반)","label_en":"Parent (103 · General)","stage1_assessment_str":"2023년 2월 접수분","stage1_assessment_str_en":"Lodged February 2023","stage1_lag_months":42,"stage2_release_str":"March 2014","stage2_release_dec":2014.25,"stage2_lag_months":149,"official_wait_years":42,"empirical_velocity_months_per_year":4.18}],"historical_velocity_series":[{"period":"2020-09","c_143_year":2016.42,"c_143_label":"May 2016","c_864_year":2016.42,"c_864_label":"May 2016","p_103_year":2010.83,"p_103_label":"Oct 2010"},{"period":"2021-09","c_143_year":2016.42,"c_143_label":"May 2016","c_864_year":2016.58,"c_864_label":"Jul 2016","p_103_year":2010.83,"p_103_label":"Oct 2010"},{"period":"2022-09","c_143_year":2016.83,"c_143_label":"Oct 2016","c_864_year":2017.0,"c_864_label":"Jan 2017","p_103_year":2011.42,"p_103_label":"May 2011"},{"period":"2023-09","c_143_year":2017.42,"c_143_label":"May 2017","c_864_year":2017.42,"c_864_label":"May 2017","p_103_year":2011.83,"p_103_label":"Oct 2011"},{"period":"2024-09","c_143_year":2017.75,"c_143_label":"Sep 2017","c_864_year":2017.75,"c_864_label":"Sep 2017","p_103_year":2012.67,"p_103_label":"Aug 2012"},{"period":"2025-09","c_143_year":2018.42,"c_143_label":"May 2018","c_864_year":2018.42,"c_864_label":"May 2018","p_103_year":2013.33,"p_103_label":"Apr 2013"},{"period":"2026-08","c_143_year":2018.92,"c_143_label":"Nov 2018","c_864_year":2020.92,"c_864_label":"Nov 2020","p_103_year":2014.25,"p_103_label":"Mar 2014"}],"capping_and_backlog":{"instrument_id":"LIN 26/042 (F2026L00724)","s85_contributory_cap":6800,"s85_contributory_aged_earmark":1125,"s85_non_contributory_cap":1700,"s85_total_cap":8500,"fy26_27_planning_level":7060,"backlog_as_at":"31 December 2025 (FOI DA 26/01/00017 & DA 25/07/00301)","backlog_contributory_persons":100762,"backlog_non_contributory_persons":57706,"backlog_total_persons":158468,"subclass_804_onhand":27013,"subclass_804_annual_grants_fy24_25":37,"subclass_804_annual_withdrawals_refusals_fy24_25":475},"fee_schedule_fy26_27":{"effective_date":"2026-07-01","authority":"Migration Regulations 1994 Schedule 1 (Items 1124, 1124A, 1130, 1130A, 1221, 1221A, 1239) & Home Affairs PageSchemaHiddenField / GetPriceList","103":{"first_base":5280,"first_adult":2640,"first_child":1325,"second_per_person":2065,"aos_years":4,"aos_bond_1":5000,"aos_bond_2":7000},"804":{"first_base":5280,"first_adult":2640,"first_child":1325,"second_per_person":2065,"aos_years":4,"aos_bond_1":5000,"aos_bond_2":7000},"143":{"first_base":5040,"first_adult":1700,"first_child":855,"second_per_person":43600,"aos_years":10,"aos_bond_1":10000,"aos_bond_2":14000},"173":{"first_base":3395,"first_adult":1145,"first_child":575,"second_per_person":29130,"aos_years":0,"aos_bond_1":0,"aos_bond_2":0},"173_to_143":{"first_base":440,"first_adult":195,"first_child":100,"second_per_person":19420,"aos_years":10,"aos_bond_1":10000,"aos_bond_2":14000},"864":{"first_base":5040,"first_adult":2515,"first_child":1260,"second_per_person":43600,"aos_years":10,"aos_bond_1":10000,"aos_bond_2":14000},"884":{"first_base":4990,"first_adult":2490,"first_child":1250,"second_per_person":29130,"aos_years":0,"aos_bond_1":0,"aos_bond_2":0},"884_to_864":{"first_base":440,"first_adult":195,"first_child":100,"second_per_person":19420,"aos_years":10,"aos_bond_1":10000,"aos_bond_2":14000},"870_3yr":{"sponsorship":420,"first_base":1180,"second_per_person":4715,"visa_subtotal_per_parent":5895,"total_1_parent_incl_sponsorship":6315,"total_2_parents_incl_sponsorship":12210,"sponsor_income":83454.8,"primary_sponsor_min_50pct":41727.4},"870_5yr":{"sponsorship":420,"first_base":1180,"second_per_person":10605,"visa_subtotal_per_parent":11785,"total_1_parent_incl_sponsorship":12205,"total_2_parents_incl_sponsorship":23990,"sponsor_income":83454.8,"primary_sponsor_min_50pct":41727.4}},"aos_formula_fy26_27":{"authority":"Social Security (Assurance of Support) Determination 2018 (F2024C00296 / F2018L00425) ss 8, 9, 15, 16 & DSS Social Security Guide 9.4.3.10–9.4.3.30","jsp_annual_base_aud":22578,"ftb_child_add_aud":2942,"max_concurrent_adult_assurees":2,"corporate_bond_contributory_aud":20000,"corporate_bond_non_contributory_aud":10000,"corporate_available_funds_per_adult_aud":5000,"corporate_min_trading_years":2,"formula_expression":"22578 * (numAssurers + newAdultAssurees + existingAdultAssurees) + 2942 * assurerMinorChildren","examples":{"single_assurer_1_parent":45156,"single_assurer_2_parents":67734,"single_assurer_1_existing_1_new_parent":67734,"single_assurer_2_parents_1_child":70676,"single_assurer_2_parents_2_children":73618,"joint_2_assurers_1_parent":67734,"joint_2_assurers_2_parents":90312,"joint_2_assurers_2_parents_2_children":96196}}};
const POLLING_DATA = {"release_id":"2026.10.21-audit-v2","last_polled_at":"2026-10-21T14:08:00+10:00","last_polled_date":"2026-10-21","total_sources":15,"live_verified_count":15,"changed_count":0,"official_contact":"enquiry@parkcolawyers.com","monitored_rules":{"release_id":"2026.10.21-audit-v2","parent_visas_queue_state":{"as_at_date":"31 August 2026","last_updated_str":"6/10/2026 10:27 AM","release_dates":{"Contributory Parent":"November 2018","Contributory Aged Parent":"November 2020","Parent":"March 2014","Aged Parent":"October 2014"},"new_application_estimates":{"Contributory Parent visas":"18 years","Parent & Aged Parent visas":"42 years"}},"section_85_cap_and_backlog":{"instrument_id":"LIN 26/042 (F2026L00724)","s85_contributory_cap":6800,"s85_contributory_aged_earmark":1125,"s85_non_contributory_cap":1700,"s85_total_cap":8500,"fy26_27_planning_level":7060,"backlog_as_at":"31 December 2025 (FOI DA 26/01/00017 & DA 25/07/00301)","backlog_contributory_persons":100762,"backlog_non_contributory_persons":57706,"backlog_total_persons":158468,"subclass_804_onhand":27013,"subclass_804_annual_grants_fy24_25":37,"subclass_804_annual_withdrawals_refusals_fy24_25":475},"aos_formula_fy26_27":{"authority":"Social Security (Assurance of Support) Determination 2018 (F2024C00296 / F2018L00425) ss 8, 9, 15, 16 & DSS Social Security Guide 9.4.3.10–9.4.3.30","jsp_annual_base_aud":22578,"ftb_child_add_aud":2942,"max_concurrent_adult_assurees":2,"corporate_bond_contributory_aud":20000,"corporate_bond_non_contributory_aud":10000,"corporate_available_funds_per_adult_aud":5000,"corporate_min_trading_years":2,"formula_expression":"22578 * (numAssurers + newAdultAssurees + existingAdultAssurees) + 2942 * assurerMinorChildren","examples":{"single_assurer_1_parent":45156,"single_assurer_2_parents":67734,"single_assurer_1_existing_1_new_parent":67734,"single_assurer_2_parents_1_child":70676,"single_assurer_2_parents_2_children":73618,"joint_2_assurers_1_parent":67734,"joint_2_assurers_2_parents":90312,"joint_2_assurers_2_parents_2_children":96196}},"statutory_vac_fy26_27":{"effective_date":"2026-07-01","authority":"Migration Regulations 1994 Schedule 1 (Items 1124, 1124A, 1130, 1130A, 1221, 1221A, 1239) & Home Affairs PageSchemaHiddenField / GetPriceList","103":{"first_base":5280,"first_adult":2640,"first_child":1325,"second_per_person":2065,"aos_years":4,"aos_bond_1":5000,"aos_bond_2":7000},"804":{"first_base":5280,"first_adult":2640,"first_child":1325,"second_per_person":2065,"aos_years":4,"aos_bond_1":5000,"aos_bond_2":7000},"143":{"first_base":5040,"first_adult":1700,"first_child":855,"second_per_person":43600,"aos_years":10,"aos_bond_1":10000,"aos_bond_2":14000},"173":{"first_base":3395,"first_adult":1145,"first_child":575,"second_per_person":29130,"aos_years":0,"aos_bond_1":0,"aos_bond_2":0},"173_to_143":{"first_base":440,"first_adult":195,"first_child":100,"second_per_person":19420,"aos_years":10,"aos_bond_1":10000,"aos_bond_2":14000},"864":{"first_base":5040,"first_adult":2515,"first_child":1260,"second_per_person":43600,"aos_years":10,"aos_bond_1":10000,"aos_bond_2":14000},"884":{"first_base":4990,"first_adult":2490,"first_child":1250,"second_per_person":29130,"aos_years":0,"aos_bond_1":0,"aos_bond_2":0},"884_to_864":{"first_base":440,"first_adult":195,"first_child":100,"second_per_person":19420,"aos_years":10,"aos_bond_1":10000,"aos_bond_2":14000},"870_3yr":{"sponsorship":420,"first_base":1180,"second_per_person":4715,"visa_subtotal_per_parent":5895,"total_1_parent_incl_sponsorship":6315,"total_2_parents_incl_sponsorship":12210,"sponsor_income":83454.8,"primary_sponsor_min_50pct":41727.4},"870_5yr":{"sponsorship":420,"first_base":1180,"second_per_person":10605,"visa_subtotal_per_parent":11785,"total_1_parent_incl_sponsorship":12205,"total_2_parents_incl_sponsorship":23990,"sponsor_income":83454.8,"primary_sponsor_min_50pct":41727.4}},"waiting_period_statutory_rules":{"immiaccount_online_mandate_date":"2026-04-22","immiaccount_online_instrument":"LIN 26/005 (F2026L00441)","online_subclasses":["103","143","804","864"],"online_mandate_exceptions":"Written permission by Department to lodge paper Form 47PA (LIN 26/005 ss 12-13 & Sch 1) or transitional dispatch before 22 Apr 2026","paper_subclasses":["173","884"],"aged_parent_pension_age":67,"aged_parent_schedule1_validity_date":"2024-12-17","aged_parent_schedule1_exception":"Substituted Subclass 600 holder (F2025L00317 Items 1124A, 1130A, 1221A)","pic_4005_significant_cost_threshold_aud":86000,"pic_4005_assessment_periods":"Up to 5 yrs standard permanent/provisional; 3 yrs for applicants aged 75+; up to 10 yrs (within life expectancy) for permanent/ongoing reasonably predictable conditions; stay period for temporary visas","pic_4005_health_waiver_available":false,"subclass_870_health_criteria":"cl 870.228: PIC 4005 if outside Australia at time of application; PIC 4007 (health waiver available) if in Australia at time of application (PAM3 VM-6327 §3.6.8)","rhca_countries_count":11,"korea_rhca_eligible":false,"korea_social_security_guide":"DSS Social Security Guide 10.22 (Agreement with Korea)","temp_173_884_medicare_eligible":true}},"internal_policy_references":[{"id":"pam3_vm_3058","cite":"PAM3 (Procedural Instruction): Parent Visa Processing & Queue Administration — VM-3058 (LEGEND version 2026-07-01, local snapshot 2026-10-02)","sourceKind":"internal_policy_reference","notPubliclyPollable":true,"fetchStatus":"internal_legendcom_mirror","contentCheckStatus":"verified_against_local_mirror","ruleMatchStatus":"matched","reviewStatus":"approved","legendVersionDate":"2026-07-01","snapshotVerifiedDate":"2026-10-02","sha256":"e2c17fcf48907fcdabfafd42385cb01ec3c92c0cccb4906f9b7cad74abf23623","localMirrorReference":"/mnt/T7/LegendCom (VM-3058 — Queue Date assignment, §§3.2.6, 3.9.1 post-17 Dec 2024 Age 67 validity & death of primary applicant, substituted 600 exception)","publicCompanionUrl":"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-processing-times/visa-processing-priorities/parent-visas"},{"id":"pam3_vm_6327","cite":"PAM3 (Procedural Instruction): Sponsored Parent (Temporary) Visa (Subclass 870) — VM-6327 (LEGEND version 2026-02-06, local snapshot 2026-10-02)","sourceKind":"internal_policy_reference","notPubliclyPollable":true,"fetchStatus":"internal_legendcom_mirror","contentCheckStatus":"verified_against_local_mirror","ruleMatchStatus":"matched","reviewStatus":"approved","legendVersionDate":"2026-02-06","snapshotVerifiedDate":"2026-10-02","sha256":"eda066b55e0f56f8c0f85c2dd25e03088c8aabcb94e368de9d2f8d508e89ef21","localMirrorReference":"/mnt/T7/LegendCom (VM-6327 — §3.3.7.2 60-day PTA onshore window, §3.3.8 10-yr cap & COVID-19 18m exclusion, §3.6.6 asymmetric lockout bar, §3.6.7 cl 870.227 public health debt arrangement, §3.6.8 cl 870.228 PIC 4005 offshore vs PIC 4007 onshore, §3.7.2.1 2nd VAC may be refused)","publicCompanionUrl":"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/sponsored-parent-temporary-870"},{"id":"pam3_vm_6276","cite":"PAM3 (Procedural Instruction): Family (Parent) Sponsor Assessment (Subclass 870) — VM-6276 (LEGEND version 2026-04-03, local snapshot 2026-10-02)","sourceKind":"internal_policy_reference","notPubliclyPollable":true,"fetchStatus":"internal_legendcom_mirror","contentCheckStatus":"verified_against_local_mirror","ruleMatchStatus":"matched","reviewStatus":"approved","legendVersionDate":"2026-04-03","snapshotVerifiedDate":"2026-10-02","sha256":"c17ba2e18f616d1c4e307aca19f3b38045269df1185b0d2a019894b0363b9eda","localMirrorReference":"/mnt/T7/LegendCom (VM-6276 — §§3.4–3.4.3 taxable income test $83,454.80, early-new-FY preceding NOA evidentiary rule, 50% primary sponsor rule $41,727.40, §3.4.3 no mid-application sponsor swap without new sponsorship)","publicCompanionUrl":"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/sponsored-parent-temporary-870"},{"id":"pam3_vm_6647","cite":"PAM3 (Procedural Instruction): Second Instalment Visa Application Charge (2nd VAC) — VM-6647 (local snapshot 2026-10-02)","sourceKind":"internal_policy_reference","notPubliclyPollable":true,"fetchStatus":"internal_legendcom_mirror","contentCheckStatus":"verified_against_local_mirror","ruleMatchStatus":"matched","reviewStatus":"approved","legendVersionDate":null,"snapshotVerifiedDate":"2026-10-02","localMirrorReference":"/mnt/T7/LegendCom (VM-6647 §§3.4.5.1–3.4.5.2 — reg 2.12D 28 calendar days AU-to-AU vs 70 calendar days all other sender/recipient address combinations, running from deemed receipt date)","publicCompanionUrl":"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/sponsored-parent-temporary-870"},{"id":"direction_103","cite":"Ministerial Direction No. 103 — Order of Consideration: Certain Family Visas (s 6(2)(c) upfront aged assessment & ss 7(2)(b), 8(1)(b) Stage 1 lodgement date deeming)","sourceKind":"internal_policy_reference","notPubliclyPollable":true,"fetchStatus":"internal_legendcom_mirror","contentCheckStatus":"verified_against_local_mirror","ruleMatchStatus":"matched","reviewStatus":"approved","legendVersionDate":"2023-06-28","snapshotVerifiedDate":"2026-10-02","localMirrorReference":"/mnt/T7/LegendCom (Direction No. 103 s 6(2)(c) upfront aged assessment & ss 7(2)(b), 8(1)(b) deemed initial 173/884 application date for 143/864 transition)","publicCompanionUrl":"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-processing-times/visa-processing-priorities/parent-visas"},{"id":"direction_117","cite":"Ministerial Direction No. 117 — Order of Consideration: Certain Family Visas (effective 25 July 2026, s 8(2)(a) priority for onshore aged parent applications)","sourceKind":"internal_policy_reference","notPubliclyPollable":true,"fetchStatus":"internal_legendcom_mirror","contentCheckStatus":"verified_against_local_mirror","ruleMatchStatus":"matched","reviewStatus":"approved","legendVersionDate":"2026-07-25","snapshotVerifiedDate":"2026-10-02","localMirrorReference":"/mnt/T7/LegendCom (Direction No. 117 s 8(2)(a) — Onshore Contributory Aged Parent 864/884 priority release)","publicCompanionUrl":"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-processing-times/visa-processing-priorities/parent-visas"}],"sources":[{"id":"ha_parent_queue","authority":"호주 연방 이민성 (Department of Home Affairs)","authority_ko":"호주 연방 이민성 (Department of Home Affairs)","authority_en":"Department of Home Affairs","title":"Parent Visas Queue Assessment & Queue Release Dates Official Page","title_ko":"부모초청 비자 월별 Queue Assessment & Queue Release Dates 공시 페이지","title_en":"Parent Visas Queue Assessment & Queue Release Dates Official Page","check_scope_ko":"기준일(2026.08.31) · 7대 비자 1단계/2단계 컷오프 · 신규 신청 거시 예상 대기연수(18년/42년) 파싱","check_scope_en":"Live parsing of 7x4 queue milestone table, release dates & 18yr/42yr new-application macro estimates","cadence_ko":"매주 월·목 폴링 (이민성 월 1회 ~5주 시차 업데이트)","cadence_en":"Polled twice weekly (DHA updates monthly with ~5-week lag)","maxAgeHours":168,"url":"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-processing-times/visa-processing-priorities/parent-visas","sourceKind":"public_policy_guidance","status":"live","fetchStatus":"http_200_ok","contentCheckStatus":"substantive_content_verified","ruleMatchStatus":"matched","reviewStatus":"approved","http_code":200,"sha256":"39450ed5bcee9ff128e0426b83d583f7258182f8f1579301cab03a9837a1729c","bytes":1410199,"method":"insane-search-verified-snapshot","changed_since_last_poll":false,"checked_at":"2026-10-21T14:08:00+10:00"},{"id":"ha_pricing_api","authority":"호주 연방 이민성 (Department of Home Affairs)","authority_ko":"호주 연방 이민성 (Department of Home Affairs)","authority_en":"Department of Home Affairs","title":"DHA Visa Pricing JSON API (GetPriceList — All 15 Parent Visa Fee Tiers)","title_ko":"이민성 내부 비자 수수료 API (GetPriceList — 부모비자 15개 스트림 1·2차 VAC)","title_en":"DHA Visa Pricing JSON API (GetPriceList — All 15 Parent Visa Fee Tiers)","check_scope_ko":"103/143/173/804/864/884/870 1차 신청비(Base/18+/<18) 및 2차 기여금($43,600 · 870 $4,715/$10,605 등) 실시간 대조","check_scope_en":"Live verification of 1st & 2nd VAC across all 15 Parent Visa fee schedules","cadence_ko":"매월 1일 및 매년 7월 1일 회계연도 개시일 집중 감시","cadence_en":"Monthly & 1 July FY indexation check","maxAgeHours":720,"url":"https://immi.homeaffairs.gov.au/_layouts/15/api/data.aspx/GetPriceList","sourceKind":"public_policy_guidance","status":"live","fetchStatus":"http_200_ok","contentCheckStatus":"substantive_content_verified","ruleMatchStatus":"matched","reviewStatus":"approved","http_code":200,"sha256":"d08adc0d2b0d34e547810e912f1581ca701201d678c0632532c7e62197743fe4","bytes":39910,"method":"insane-search-verified-snapshot","changed_since_last_poll":false,"checked_at":"2026-10-21T14:08:00+10:00"},{"id":"ha_subclass_143","authority":"호주 연방 이민성 (Department of Home Affairs)","authority_ko":"호주 연방 이민성 (Department of Home Affairs)","authority_en":"Department of Home Affairs","title":"Subclass 143 — Contributory Parent (Permanent) Visa","title_ko":"Subclass 143 — 기여제 부모 영주비자 (Contributory Parent Visa)","title_en":"Subclass 143 — Contributory Parent (Permanent) Visa","check_scope_ko":"LIN 26/005 온라인 접수 원칙 및 서면 허가 예외 · 1차/2차 VAC($43,600) · 10년 AoS 요건 파싱","check_scope_en":"PageSchemaHiddenField verification of 143 online lodgement (LIN 26/005), VAC & 10-yr AoS","cadence_ko":"매월 정기 폴링","cadence_en":"Monthly check","maxAgeHours":720,"url":"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/contributory-parent-143","sourceKind":"public_policy_guidance","status":"live","fetchStatus":"http_200_ok","contentCheckStatus":"substantive_content_verified","ruleMatchStatus":"matched","reviewStatus":"approved","http_code":200,"sha256":"27a497268f67d9daa91b6c39f04e957758ee5e69ba47b2ee6bff9493e5d3f041","bytes":81219,"method":"insane-search-verified-snapshot","changed_since_last_poll":false,"checked_at":"2026-10-21T14:08:00+10:00"},{"id":"ha_subclass_173","authority":"호주 연방 이민성 (Department of Home Affairs)","authority_ko":"호주 연방 이민성 (Department of Home Affairs)","authority_en":"Department of Home Affairs","title":"Subclass 173 — Contributory Parent (Temporary) Visa","title_ko":"Subclass 173 — 기여제 부모 임시비자 (2년 · 메디케어 부여 · 2차 VAC 분할)","title_en":"Subclass 173 — Contributory Parent (Temporary) Visa","check_scope_ko":"종이 우편 접수 유지 · 2차 VAC 1단계분($29,130) · 메디케어 자격 및 AoS 유예 확인","check_scope_en":"PageSchemaHiddenField verification of 173 paper lodgement & $29,130 2nd VAC","cadence_ko":"매월 정기 폴링","cadence_en":"Monthly check","maxAgeHours":720,"url":"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/contributory-parent-temporary-173","sourceKind":"public_policy_guidance","status":"live","fetchStatus":"http_200_ok","contentCheckStatus":"substantive_content_verified","ruleMatchStatus":"matched","reviewStatus":"approved","http_code":200,"sha256":"e6d40c3abf3938d929f1a43bbe8d2f796d98c5097cf12b1fa29ed0b560df33ee","bytes":65336,"method":"insane-search-verified-snapshot","changed_since_last_poll":false,"checked_at":"2026-10-21T14:08:00+10:00"},{"id":"ha_subclass_864","authority":"호주 연방 이민성 (Department of Home Affairs)","authority_ko":"호주 연방 이민성 (Department of Home Affairs)","authority_en":"Department of Home Affairs","title":"Subclass 864 — Contributory Aged Parent (Residence) Visa","title_ko":"Subclass 864 — 기여제 고령부모 영주비자 (Onshore 만 67세+ · BVA 부여)","title_en":"Subclass 864 — Contributory Aged Parent (Residence) Visa","check_scope_ko":"만 67세 유효접수 요건(대체 600 특례 포함) · 온쇼어 BVA 부여 · 온라인 접수 · 2차 VAC($43,600) 확인","check_scope_en":"PageSchemaHiddenField verification of 864 Age 67 rule (incl. substituted 600 exception), BVA & VAC","cadence_ko":"매월 정기 폴링","cadence_en":"Monthly check","maxAgeHours":720,"url":"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/contributory-aged-parent-864","sourceKind":"public_policy_guidance","status":"live","fetchStatus":"http_200_ok","contentCheckStatus":"substantive_content_verified","ruleMatchStatus":"matched","reviewStatus":"approved","http_code":200,"sha256":"545ba3dc250d453e744265d4f0009acae97dad60d5fad49e81d6474e6f3f962b","bytes":74604,"method":"insane-search-verified-snapshot","changed_since_last_poll":false,"checked_at":"2026-10-21T14:08:00+10:00"},{"id":"ha_subclass_884","authority":"호주 연방 이민성 (Department of Home Affairs)","authority_ko":"호주 연방 이민성 (Department of Home Affairs)","authority_en":"Department of Home Affairs","title":"Subclass 884 — Contributory Aged Parent (Temporary) Visa","title_ko":"Subclass 884 — 기여제 고령부모 임시비자 (Onshore 만 67세+ · 2단계 전환)","title_en":"Subclass 884 — Contributory Aged Parent (Temporary) Visa","check_scope_ko":"만 67세 요건 · 종이 우편 접수 · 2차 VAC($29,130) · 884->864 전환 규칙 확인","check_scope_en":"PageSchemaHiddenField verification of 884 paper lodgement & step-up rules","cadence_ko":"매월 정기 폴링","cadence_en":"Monthly check","maxAgeHours":720,"url":"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/contributory-aged-parent-temporary-884","sourceKind":"public_policy_guidance","status":"live","fetchStatus":"http_200_ok","contentCheckStatus":"substantive_content_verified","ruleMatchStatus":"matched","reviewStatus":"approved","http_code":200,"sha256":"a4751377866e7acd449a277e3e91ecb72e43035dd2168caccad8a490d8e93888","bytes":63970,"method":"insane-search-verified-snapshot","changed_since_last_poll":false,"checked_at":"2026-10-21T14:08:00+10:00"},{"id":"ha_subclass_103","authority":"호주 연방 이민성 (Department of Home Affairs)","authority_ko":"호주 연방 이민성 (Department of Home Affairs)","authority_en":"Department of Home Affairs","title":"Subclass 103 — Parent (Migrant) Visa","title_ko":"Subclass 103 — 일반 부모 영주비자 (Parent Visa)","title_en":"Subclass 103 — Parent (Migrant) Visa","check_scope_ko":"LIN 26/005 온라인 접수 원칙 및 예외 · 1차 VAC($5,280) · 2차 VAC($2,065) · 4년 AoS 확인","check_scope_en":"PageSchemaHiddenField verification of 103 online lodgement, VAC & 4-yr AoS","cadence_ko":"매월 정기 폴링","cadence_en":"Monthly check","maxAgeHours":720,"url":"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/parent-103","sourceKind":"public_policy_guidance","status":"live","fetchStatus":"http_200_ok","contentCheckStatus":"substantive_content_verified","ruleMatchStatus":"matched","reviewStatus":"approved","http_code":200,"sha256":"a7f582901ea26dc83eec22215c506673e757ea136fe13999d392808c7c3b97a5","bytes":77555,"method":"insane-search-verified-snapshot","changed_since_last_poll":false,"checked_at":"2026-10-21T14:08:00+10:00"},{"id":"ha_subclass_804","authority":"호주 연방 이민성 (Department of Home Affairs)","authority_ko":"호주 연방 이민성 (Department of Home Affairs)","authority_en":"Department of Home Affairs","title":"Subclass 804 — Aged Parent (Residence) Visa","title_ko":"Subclass 804 — 일반 고령부모 영주비자 (Aged Parent Visa · Onshore 67+)","title_en":"Subclass 804 — Aged Parent (Residence) Visa","check_scope_ko":"만 67세 유효접수 요건(대체 600 예외 포함) · 온쇼어 BVA 부여 · 42년 대기 및 PIC 4005 요건 확인","check_scope_en":"PageSchemaHiddenField verification of 804 Age 67 rule, BVA & PIC 4005","cadence_ko":"매월 정기 폴링","cadence_en":"Monthly check","maxAgeHours":720,"url":"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/aged-parent-804","sourceKind":"public_policy_guidance","status":"live","fetchStatus":"http_200_ok","contentCheckStatus":"substantive_content_verified","ruleMatchStatus":"matched","reviewStatus":"approved","http_code":200,"sha256":"efcaf7868502e651cd1900df4fe274fc0b0bf59938982669ae0ba4d54709b837","bytes":72581,"method":"insane-search-verified-snapshot","changed_since_last_poll":false,"checked_at":"2026-10-21T14:08:00+10:00"},{"id":"ha_subclass_870","authority":"호주 연방 이민성 (Department of Home Affairs)","authority_ko":"호주 연방 이민성 (Department of Home Affairs)","authority_en":"Department of Home Affairs","title":"Subclass 870 — Sponsored Parent (Temporary) Visa","title_ko":"Subclass 870 — 스폰서 임시 부모비자 (3년 $5,895 / 5년 $11,785 + 스폰서 $420 · 최대 10년)","title_en":"Subclass 870 — Sponsored Parent (Temporary) Visa","check_scope_ko":"가족균형 면제 · 스폰서 과세소득($83,454.80) · cl 870.228(PIC 4005/4007) · cl 870.227 · reg 2.87CE 파싱","check_scope_en":"PageSchemaHiddenField verification of 870 fees, income threshold, PIC 4005/4007 & permanent bar","cadence_ko":"매월 정기 폴링","cadence_en":"Monthly check","maxAgeHours":720,"url":"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/sponsored-parent-temporary-870","sourceKind":"public_policy_guidance","status":"live","fetchStatus":"http_200_ok","contentCheckStatus":"substantive_content_verified","ruleMatchStatus":"matched","reviewStatus":"approved","http_code":200,"sha256":"247a2cefa4ff64ba853cd7f239d05ff4cadb047d8e8c7facc934b9e47e58fe2a","bytes":72164,"method":"insane-search-verified-snapshot","changed_since_last_poll":false,"checked_at":"2026-10-21T14:08:00+10:00"},{"id":"ha_bof_test","authority":"호주 연방 이민성 (Department of Home Affairs)","authority_ko":"호주 연방 이민성 (Department of Home Affairs)","authority_en":"Department of Home Affairs","title":"Balance of Family Test Official Rules (reg 1.05(2C) & (3))","title_ko":"가족균형테스트 (Balance of Family Test — Migration Regulations reg 1.05(2C)/(3))","title_en":"Balance of Family Test Official Rules (reg 1.05(2C) & (3))","check_scope_ko":"reg 1.05(2C)(a) 50% 이상 요건 및 (2C)(b) 단일 해외국가 최다 거주 자녀수 초과 요건 · 제외 자녀(reg 1.05(3)) 확인","check_scope_en":"Verification of Balance of Family Test two-prong rule (reg 1.05(2C)(a) & (b)) and reg 1.05(3) exclusions","cadence_ko":"분기별 폴링","cadence_en":"Quarterly check","maxAgeHours":2160,"url":"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/parent-103/balance-of-family-test","sourceKind":"public_policy_guidance","status":"live","fetchStatus":"http_200_ok","contentCheckStatus":"substantive_content_verified","ruleMatchStatus":"matched","reviewStatus":"approved","http_code":200,"sha256":"9eeb46887e9148b66f8cd47643eca640e2b142a0c458882542eb8f0ef54e319f","bytes":9973,"method":"insane-search-verified-snapshot","changed_since_last_poll":false,"checked_at":"2026-10-21T14:08:00+10:00"},{"id":"ha_planning_levels","authority":"호주 연방 이민성 (Department of Home Affairs)","authority_ko":"호주 연방 이민성 (Department of Home Affairs)","authority_en":"Department of Home Affairs","title":"Migration Program Planning Levels (Parent Stream Ceiling)","title_ko":"연간 이민 프로그램 계획 수준 (Migration Program Planning Levels)","title_en":"Migration Program Planning Levels (Parent Stream Ceiling)","check_scope_ko":"연간 부모비자 배정 쿼터(8,500석 -> FY26-27 계획치 7,060석 변동) 파싱","check_scope_en":"Verification of annual Parent visa stream planning ceiling (7,060 / 8,500 places)","cadence_ko":"매년 5월 연방 예산안 발표 및 7월 1일 폴링","cadence_en":"Annual May Budget & 1 July check","maxAgeHours":2160,"url":"https://immi.homeaffairs.gov.au/what-we-do/migration-program-planning-levels","sourceKind":"public_policy_guidance","status":"live","fetchStatus":"http_200_ok","contentCheckStatus":"substantive_content_verified","ruleMatchStatus":"matched","reviewStatus":"approved","http_code":200,"sha256":"7248f5e9c92de48f3ab20aa86eaf7a3f7f269b7547670142c6611b19b87fd73d","bytes":18172,"method":"insane-search-verified-snapshot","changed_since_last_poll":false,"checked_at":"2026-10-21T14:08:00+10:00"},{"id":"leg_lin_26_042","authority":"호주 연방 법제처 (Federal Register of Legislation)","authority_ko":"호주 연방 법제처 (Federal Register of Legislation)","authority_en":"Federal Register of Legislation","title":"Migration (Granting of Parent and Other Family Visas) Instrument 2026 — LIN 26/042 (s 85 Cap)","title_ko":"Migration (Granting of Parent and Other Family Visas) Instrument 2026 — LIN 26/042 (F2026L00724)","title_en":"Migration (Granting of Parent and Other Family Visas) Instrument 2026 — LIN 26/042 (s 85 Cap)","check_scope_ko":"Migration Act s 85 연간 최대 발급 상한 고시(기여제 6,800석 + 일반 부모 1,700석 = 8,500석) 감시","check_scope_en":"OData v4 & statutory text check of s 85 Parent Visa Maximum Grant Determination","cadence_ko":"매월 법제처 OData API 폴링","cadence_en":"Monthly Federal Register OData API check","maxAgeHours":720,"url":"https://www.legislation.gov.au/F2026L00724/latest/text","sourceKind":"public_legislation","status":"live","fetchStatus":"http_200_ok","contentCheckStatus":"substantive_content_verified","ruleMatchStatus":"matched","reviewStatus":"approved","http_code":200,"sha256":"aed63d3210d9d52224dce7080c269fc46ddb23b41ca6c5253d6f250f4c817daf","bytes":5251,"method":"insane-search-verified-snapshot","changed_since_last_poll":false,"checked_at":"2026-10-21T14:08:00+10:00"},{"id":"sa_aos_policy","authority":"호주 서비스청 (Services Australia)","authority_ko":"호주 서비스청 (Services Australia)","authority_en":"Services Australia","title":"Services Australia — Assurance of Support (AoS) Policy, Bank Guarantee & Corporate Capacity Rules","title_ko":"Assurance of Support (AoS) — 재정보증 제도·기간(10년/4년)·은행보증금($10k/$14k/$20k) 및 법인 재무심사","title_en":"Services Australia — Assurance of Support (AoS) Policy, Bank Guarantee & Corporate Capacity Rules","check_scope_ko":"기여제 10년($10k/$14k) · 비기여제 4년($5k/$7k) · 법인 보증($20k/$10k 본드 + 2년 흑자/성인당 $5k 가용자금 심사) 확인","check_scope_en":"Verification of AoS bond durations, individual (s 8) & corporate (s 9 + DSS 9.4.3.30) financial capacity rules","cadence_ko":"분기별 및 매년 7월 1일 폴링","cadence_en":"Quarterly & 1 July check","maxAgeHours":2160,"url":"https://www.servicesaustralia.gov.au/assurance-support","sourceKind":"public_policy_guidance","status":"live","fetchStatus":"http_200_ok","contentCheckStatus":"substantive_content_verified","ruleMatchStatus":"matched","reviewStatus":"approved","http_code":200,"sha256":"33f765446999f6aa0b67a1faf8295afab75c3757222df6f673a6cfc83f298170","bytes":9391,"method":"insane-search-verified-snapshot","changed_since_last_poll":false,"checked_at":"2026-10-21T14:08:00+10:00"},{"id":"sa_medicare_rhca","authority":"호주 서비스청 (Services Australia)","authority_ko":"호주 서비스청 (Services Australia)","authority_en":"Services Australia","title":"Services Australia — Enrolling in Medicare & Reciprocal Health Care Agreements (RHCA)","title_ko":"메디케어 가입 자격 및 상호의료협정(RHCA 11개국) · 부모비자 대기자 배제 규정","title_en":"Services Australia — Enrolling in Medicare & Reciprocal Health Care Agreements (RHCA)","check_scope_ko":"부모비자 BVA 대기자 Interim Medicare 배제 · 173/884 임시비자 메디케어 허용 · RHCA 11개국 명단 확인","check_scope_en":"Verification of Parent Visa interim Medicare exclusion, 173/884 inclusion & 11 RHCA nations","cadence_ko":"분기별 폴링","cadence_en":"Quarterly check","maxAgeHours":2160,"url":"https://www.servicesaustralia.gov.au/reciprocal-health-care-agreements","sourceKind":"public_policy_guidance","status":"live","fetchStatus":"http_200_ok","contentCheckStatus":"substantive_content_verified","ruleMatchStatus":"matched","reviewStatus":"approved","http_code":200,"sha256":"57ffa518cbc56d0f2fa067473f711d3bfddde45e2641b0d9811203e7e87ee669","bytes":7108,"method":"insane-search-verified-snapshot","changed_since_last_poll":false,"checked_at":"2026-10-21T14:08:00+10:00"},{"id":"dss_guide_aos","authority":"호주 사회서비스부 (Department of Social Services)","authority_ko":"호주 사회서비스부 (Department of Social Services)","authority_en":"Department of Social Services (DSS)","title":"DSS Social Security Guide 9.4.3 (AoS Income Formula) & 10.22 (Agreement with Korea)","title_ko":"Social Security Guide 9.4.3 & 10.22 — AoS 보증인 과세소득 산식(ss 15–16) & 한-호 사회보장협정(10.22)","title_en":"DSS Social Security Guide 9.4.3 (AoS Income Formula) & 10.22 (Agreement with Korea)","check_scope_ko":"JobSeeker 기준액($22,578) 기반 AoS 소득 공식(기존 피보증인 합산) 및 DSS 10.22 한-호 국민연금/노령연금 합산 규정 확인","check_scope_en":"Verification of JSP cut-off AoS income threshold formula (incl. existing assurees) & DSS 10.22 Korea-AU Agreement","cadence_ko":"매년 3월 20일 · 7월 1일 · 9월 20일 연금/수당 연동일 폴링","cadence_en":"20 March, 1 July & 20 September indexation check","maxAgeHours":2160,"url":"https://guides.dss.gov.au/social-security-guide/9/4/3","sourceKind":"public_policy_guidance","status":"live","fetchStatus":"http_200_ok","contentCheckStatus":"substantive_content_verified","ruleMatchStatus":"matched","reviewStatus":"approved","http_code":200,"sha256":"76482f2c9a82f4f6d36be89dfe388b90b69731fc1dc2fb0c2dbea4b583884624","bytes":8192,"method":"insane-search-verified-snapshot","changed_since_last_poll":false,"checked_at":"2026-10-21T14:08:00+10:00"}]};

let currentLang = "ko";
let currentSurvivalFilter = "all";
let currentLinksCat = "all";

const I18N = {
  ko: {
    brandTag: "IMMIGRATION LAW · PARENT VISAS (103 · 143 · 173 · 804 · 864 · 884 · 870)",
    pollBadge: "출처 모니터 (2026-10-21 · 15/15 검증 완료)",
    navEnquiry: "박앤코 상담·문의하기 →",
    urgentBadge: "2026.10.06 최신 대기열 공시 & 법령 업데이트",
    urgentText: "연방 이민성 최신 공시(2026.08.31 기준, 2026.10.06 발표): 기여제(143/173) 2018년 11월 · 기여제 고령(864/884) 2020년 11월(Direction 117 온쇼어 우선심사) · 2단계 전환(173→143 / 884→864) 2026년 5월 접수 코호트 심사 중(Direction 103 s 7(2)(b) 1단계 접수일 의제) · 일반(103) 2014년 3월 · 고령(804) 2014년 10월 심사 중 [1] / 2026.04.22부터 103·143·804·864 ImmiAccount 온라인 접수 원칙(LIN 26/005 ss 12–13 서면 허가 예외 및 경과규정 존재 · 173·884는 종이 우편 유지) [3–8] / 2024.12.17부터 고령부모(804/864/884) 만 67세 요건(또는 대체 Subclass 600 특례, F2025L00317)이 접수 유효 요건(Sch 1)으로 격상 [5,8] / FY2026–27 재정보증(AoS) 보증인 소득 기준: 1인 보증+부모 1명 $45,156 · 부모 2명 $67,734(기존 피보증인 합산 필수 · 법인은 2년 재무/가용자금 심사 대상) [13,15].",
    urgentLink: "[1]–[18] 1차 출처 각주 ↓",
    heroOverline: "AUSTRALIAN PARENT VISAS (SUBCLASSES 103 · 143 · 173 · 804 · 864 · 884 · 870) NAVIGATOR",
    heroTitle: "호주 부모초청 비자 대기열(Queue) 속도 분석 · 15~42년 대기기간 생존 가이드 & 총비용·AoS 통합 네비게이터",
    heroLead: "호주 연방 이민성(Department of Home Affairs)의 부모비자 대기열 공시 페이지, 내부 비자 수수료 API, 연방 법제처 쿼터 고시(LIN 26/042 · F2026L00724), FOI 공개 통계(총 대기인원 158,468명), PAM3 심사지침(VM-3058 · VM-6327 · VM-6276 · VM-6647 · Direction 103 & 117), 그리고 호주 서비스청(Services Australia) 재정보증(AoS)·메디케어·노인요양 규정을 한곳에 집대성한 인터랙티브 플랫폼이에요. 시각화 그래프와 시뮬레이터를 통해 우리 부모님의 계획 시나리오, 총 소요 자금, 재정보증인(Assurer) 자격·소득 기준, 대기 중 지원되는 권리와 배제되는 혜택(메디케어·요양원·PIC 4005/4007 신체검사 리스크), 그리고 22개 필수 정부 링크를 한눈에 확인해 보세요.",
    heroPrimaryCta: "내 대기순번 & 도달 연도 시뮬레이터 ↓",
    heroSecondaryCta: "총비용(TCO) & AoS 보증인 자격·소득 계산기 ↓",
    pillM1: "01 · 실시간 대기열 & 3대 분석 그래프",
    pillM2: "02 · 내 순번 & 승인 연도 시뮬레이터",
    pillM3: "03 · 7대 비자 맞춤 경로 & 가족균형 진단기",
    pillM4: "04 · 총비용(TCO) & AoS 보증인 소득 계산기",
    pillM870: "05 · Subclass 870 & 스폰서 자격 정밀 진단기",
    pillM5: "06 · 대기기간 생존 가이드 (메디케어·요양·신검)",
    pillM6: "07 · 22개 원스톱 공식 링크 & Poller",
    specName: "박창민 대표변호사 (Chang Min Park)",
    specRole: "QLS Accredited Specialist in Immigration Law",
    specSlogan: "\"삶에 집중하세요, 법률은 저희가 맡겠습니다.\"",
    specMeta: "법무법인 박앤코 (PNC Legal Pty Ltd t/a Park & Co Lawyers · Underwood QLD) | 공식 이메일: enquiry@parkcolawyers.com",
    specBtn: "온라인 문의 바로가기 (parklawyers.com.au) →",
    stat1Over: "CONTRIBUTORY RELEASE",
    stat1Val: "18.11 / 20.11",
    stat1Sub: "143/173(2018.11) vs 864/884(2020.11) [1]",
    stat2Over: "2-STAGE STEP-UP (173→143)",
    stat2Val: "2026.05 코호트",
    stat2Sub: "2026.05 접수분 심사 중 · Direction 103 s 7(2)(b) 의제 [1,16]",
    stat3Over: "NEW WAIT ESTIMATE",
    stat3Val: "18년 / 42년",
    stat3Sub: "신규 접수 기준 기여제 ~18년 · 일반 ~42년 [1]",
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
    qLiveStamp: "SharePoint #contentBox 공시 스냅샷 검증 완료",
    qCol1: "비자 종류 (Subclass)",
    qCol2: "신규 접수 수령 확인",
    qCol3: "1단계: Queue Assessment (대기열 편입 심사 중인 접수월)",
    qCol4: "1단계 적체 시차",
    qCol5: "2단계: Visa Assessment (최종 심사 중인 Queue Release Date)",
    qCol6: "신규 신청 거시 추정치",
    chart1Title: "그래프 1 · 서브클래스별 1단계(대기열 편입) 적체 vs 2단계(최종 발급) 기준일 시차 (단위: 개월)",
    chart1Sub: "2026년 8월 기준, 접수 후 Queue Date를 받기까지 걸리는 1단계 적체(28~43개월)와 최종 비자 발급 컷오프까지의 시차(69~149개월)를 비교해요.",
    c1Leg1: "1단계 Queue Assessment 적체 (개월)",
    c1Leg2: "2단계 Queue Release 시차 (개월)",
    chart2Title: "그래프 2 · 실제 큐 전진 속도(Queue Velocity) 실증 추적 (2020.09 ~ 2026.08 연례 스냅샷)",
    chart2Sub: "현실 시간 1년(12개월)이 지날 때 기여제(143) 대기열은 연평균 5.07개월 전진했어요. 반면 고령 기여제(864)는 Direction 117 온쇼어 우선심사 이후 2020년 11월 코호트까지 심사 기준일이 앞당겨졌어요.",
    c2Leg1: "기여제 고령 864/884 (Nov 2020)",
    c2Leg2: "기여제 일반 143/173 (Nov 2018 · 연 5.07개월 전진)",
    c2Leg3: "일반 부모 103 (Mar 2014)",
    chart3Title: "그래프 3 · 대기 적체 인원(158,468명) vs 연간 쿼터(8,500석 / 7,060석) 및 804 비자 실태",
    chart3Sub: "FOI(DA 26/01/00017 & DA 25/07/00301) 실측 데이터: 기여제 100,762명 vs 연간 6,800석 / 비기여제 57,706명 vs 연간 1,700석(804 비자는 연 37건 승인 vs 475건 이탈).",
    c3Leg1: "현재 대기 인원 (On-hand Backlog)",
    c3Leg2: "연간 법정 상한 (LIN 26/042 s 85 Cap)",
    infHeading: "이민성 대기열 공시 행간에서 도출되는 5대 핵심 법률·통계 추론",
    infSub: "단순히 날짜만 보는 것을 넘어, Ministerial Direction No. 103 · No. 117 및 PAM3 지침을 결합하면 다음 5가지 결정적 실무 전략이 도출돼요.",
    m2Overline: "MODULE 02 · INTERACTIVE QUEUE POSITION & RELEASE YEAR PLANNING SIMULATOR",
    m2Title: "내 부모비자 대기순번 & 1·2단계 도달 시나리오 계획 도구",
    m2Sub: "2018년 6월 1일 이후 신청분은 접수일(Lodgement Date)이 아니라 1차 심사 완료일(Queue Assessment Date)이 공식 대기열 기준일(Queue Date)이 돼요. 공식 신규 신청 추정치(18년/42년)와 실증 큐 전진 속도 기반 시나리오를 구분해 안내해요.",
    simFormTitle: "대기열 시뮬레이션 조건 입력",
    simResultTitle: "시뮬레이션 진단 결과 (가정별 계획 시나리오)",
    m3Overline: "MODULE 03 · 7-SUBCLASS PATHWAY SELECTOR & BALANCE OF FAMILY TEST (REG 1.05)",
    m3Title: "우리 가족 맞춤 부모비자 경로 진단기 & 가족균형테스트(Reg 1.05) 자동 판정",
    m3Sub: "부모님 두 분의 연세(만 67세 이상 여부 및 2024.12.17 유효접수 규칙·대체 600 특례), 현재 체류지, 소지 비자 조건, 자녀 구성(해외 국가별 분포 포함)을 선택하면 가족균형테스트 통과 여부와 최적 신청 순서를 진단해 드려요.",
    wizFormTitle: "부모님 연령 · 체류 상태 & 자녀 구성 입력",
    wizResultTitle: "맞춤 경로 & 가족균형테스트(Reg 1.05) 판정 결과",
    subMatrixTitle: "호주 부모초청 비자 7대 서브클래스 요건·수수료·권리 총괄 비교표 (FY2026–27)",
    m4Overline: "MODULE 04 · TOTAL COST ESTIMATOR, ASSURER ELIGIBILITY & SERVICES AUSTRALIA AOS CALCULATOR",
    m4Title: "부모초청 선택 항목별 필요자금 추정(1·2차 VAC + AoS 본드) & 재정보증인(Assurer) 자격·과세소득 계산기",
    m4Sub: "이민성 수수료표 및 Social Security (Assurance of Support) Determination 2018 ss 8, 9, 15, 16 · DSS Guide 9.4 공식을 기반으로 기존 피보증 성인을 반영한 보증인 과세소득 기준, 공동 보증·법인 보증 재무심사(DSS 9.4.3.30), 870 개인 스폰서 소득($83,454.80)을 한 번에 진단해요.",
    costFormTitle: "비용 및 재정보증인(Assurer) 자격·소득 시뮬레이션 입력",
    costResultTitle: "필요자금 추정 · 보증인 자격 & AoS 과세소득 판정 결과",
    chart4Title: "그래프 4 · 선택 인원 기준 경로별 정부 납부 총액(1차 VAC + 2차 VAC + AoS 본드) 비교 (단위: AUD)",
    chart4Sub: "부모님 인원(1인/2인) 선택에 따라 5대 주요 경로의 1차 신청비, 2차 기여금, AoS 은행보증금 구성을 실시간 비교해요.",
    c4Leg1: "1차 비자신청비 (1st VAC)",
    c4Leg2: "2차 기여금/신청비 (2nd VAC)",
    c4Leg3: "재정보증 은행본드 (AoS Bond — 만기 환급형)",
    aosDeepHeading: "재정보증인(Assurer) 자격 요건 · 인정 소득 범위 · 법인 보증 & 870 스폰서 소득 총정리",
    aosDeepSub: "Social Security (Assurance of Support) Determination 2018 (ss 7–18) 및 DSS Social Security Guide 9.4 원문에 따른 핵심 실무 기준이에요.",
    m5Overline: "MODULE 06 · 15–42 YEAR WAITING PERIOD SURVIVAL GUIDE: ELIGIBLE VS NOT SUPPORTED",
    m5Title: "15~42년 대기기간 생존 가이드: 지원되는 권리(Eligible) vs 배제되는 복지(Exclusions) & 8대 실무 함정",
    m5Sub: "대기 기간 동안 브리징 비자 취업권, 해외 출국 시 BVB 트랩, 메디케어 전면 배제 및 173/884 우회 전략, PIC 4005/4007($86,000 상한 · 연령/질환별 3·5·10년 산정) 신체검사 리스크, 정부 노인요양원 배제, 한-호 사회보장협정(DSS 10.22) 연금 합산까지 정리했어요.",
    survTableTitle: "대기 단계별 체류 · 취업 · 메디케어 · 요양 · 연금 지원 여부 총괄 매트릭스",
    m6Overline: "MODULE 07 · ONE-STOP OFFICIAL LINKS DIRECTORY (22 BOOKMARKS) & POLLER OPERATIONS",
    m6Title: "부모비자 대기자·스폰서를 위한 22개 원스톱 공식 링크 허브 & 정기 모니터링(Poller) 아키텍처",
    m6Sub: "대기열 조회, PVC 서류 변경 웹폼, ImmiAccount, VEVO, BVB 신청, Services Australia AoS, 메디케어, 한-호 사회보장협정(DSS 10.22), My Aged Care까지 22개 정부 공식 사이트 링크와 15개 1차 출처 감시 스케줄이에요.",
    pollerSchedTitle: "본 시스템의 15대 1차 출처(Primary Source) 자동 폴링(Poller) 및 데이터 집계 주기",
    modalTitle: "공식 1차 출처 모니터 (검증 상태 · 원문 기준일 · 법률 검토 현황)"
  },
  en: {
    brandTag: "IMMIGRATION LAW · PARENT VISAS (103 · 143 · 173 · 804 · 864 · 884 · 870)",
    pollBadge: "Source Monitor (2026-10-21 · 15/15 Verified)",
    navEnquiry: "Book a Consultation →",
    urgentBadge: "6 OCT 2026 QUEUE RELEASE & STATUTORY UPDATE",
    urgentText: "Latest Home Affairs Queue Release (as at 31 Aug 2026, published 6 Oct 2026): Contributory (143/173) Nov 2018 · Contributory Aged (864/884) Nov 2020 (Direction 117 onshore priority) · 2-Stage Step-up (173→143 / 884→864) May 2026 cohort under assessment (Direction 103 s 7(2)(b) deemed Stage 1 lodgement date) · Parent (103) Mar 2014 · Aged Parent (804) Oct 2014 [1] / From 22 Apr 2026, 103·143·804·864 generally require ImmiAccount online lodgement (subject to LIN 26/005 ss 12–13 written-permission and transitional exceptions; 173·884 remain paper) [3–8] / From 17 Dec 2024, Age 67+ (or substituted Subclass 600 exception, F2025L00317) is a Schedule 1 validity requirement for 804/864/884 [5,8] / FY2026–27 AoS Assurer Income: $45,156 (1 parent) · $67,734 (2 parents, existing assurees included; corporate assurers subject to DSS 9.4.3.30 financial review) [13,15].",
    urgentLink: "[1]–[18] Primary Sources ↓",
    heroOverline: "AUSTRALIAN PARENT VISAS (SUBCLASSES 103 · 143 · 173 · 804 · 864 · 884 · 870) NAVIGATOR",
    heroTitle: "Australian Parent Visa Queue Velocity, 15–42 Year Waiting Period Survival Guide & Cost / AoS Navigator",
    heroLead: "Built from Department of Home Affairs Queue Release tables, Visa Pricing schedules, Federal Register s 85 capping instruments (LIN 26/042), FOI backlog disclosures (158,468 waiting), PAM3 guidelines (VM-3058, VM-6327, VM-6276, VM-6647, Directions 103 & 117), and Services Australia Assurance of Support (AoS), Medicare & Aged Care rules. Explore interactive visual charts, simulate queue scenarios, verify Assurer eligibility and income thresholds, review waiting-period exclusions (Medicare, Aged Care, PIC 4005/4007 medical assessment windows), and access 22 official government bookmarks.",
    heroPrimaryCta: "Simulate Queue Position & Planning Scenarios ↓",
    heroSecondaryCta: "Calculate Total Cost & AoS Assurer Income ↓",
    pillM1: "01 · Live Queue & 3 Visual Charts",
    pillM2: "02 · Queue Scenario Simulator",
    pillM3: "03 · 7-Subclass Wizard & Balance of Family",
    pillM4: "04 · Cost & AoS Assurer Calculator",
    pillM870: "05 · Subclass 870 & Sponsor Hub",
    pillM5: "06 · Waiting Period Survival Matrix",
    pillM6: "07 · 22 Official Links & Poller",
    specName: "Chang Min Park (Principal Solicitor)",
    specRole: "QLS Accredited Specialist in Immigration Law",
    specSlogan: "\"Focus on your life; we will take care of the law.\"",
    specMeta: "PNC Legal Pty Ltd t/a Park & Co Lawyers (Underwood QLD) | Official Contact: enquiry@parkcolawyers.com",
    specBtn: "Enquire Online (parklawyers.com.au) →",
    stat1Over: "CONTRIBUTORY RELEASE",
    stat1Val: "Nov 18 / Nov 20",
    stat1Sub: "143/173 (Nov 2018) vs 864/884 (Nov 2020) [1]",
    stat2Over: "2-STAGE STEP-UP (173→143)",
    stat2Val: "May 2026 Cohort",
    stat2Sub: "Assessing May 2026 · Direction 103 s 7(2)(b) Deeming [1,16]",
    stat3Over: "NEW WAIT ESTIMATE",
    stat3Val: "18 Yrs / 42 Yrs",
    stat3Sub: "New apps: Contributory ~18 yrs · Non-Contrib ~42 yrs [1]",
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
    qLiveStamp: "Verified SharePoint #contentBox Snapshot",
    qCol1: "Visa Subclass",
    qCol2: "Acknowledgement",
    qCol3: "Stage 1: Queue Assessment (Currently Assessing Lodgement Month)",
    qCol4: "Stage 1 Lag",
    qCol5: "Stage 2: Visa Assessment (Queue Release Date Cutoff)",
    qCol6: "New Application Macro Estimate",
    chart1Title: "Chart 1 · Stage 1 (Queue Assessment) Lag vs Stage 2 (Queue Release) Cutoff Gap (Months)",
    chart1Sub: "As at August 2026, comparing the 28–43 month backlog just to receive a Queue Date against the 69–149 month gap to final Queue Release.",
    c1Leg1: "Stage 1 Queue Assessment Lag (Months)",
    c1Leg2: "Stage 2 Queue Release Gap (Months)",
    chart2Title: "Chart 2 · Empirical Queue Advancement Velocity (Sep 2020 – Aug 2026 Annual Snapshots)",
    chart2Sub: "Per 12 calendar months, Contributory (143) Queue Release advanced ~5.07 months on average, whereas Onshore Aged (864) reached the Nov 2020 cohort following Direction 117 priority processing.",
    c2Leg1: "Contributory Aged 864/884 (Nov 2020)",
    c2Leg2: "Contributory General 143/173 (Nov 2018 · 5.07 mos/yr)",
    c2Leg3: "Parent 103 (Mar 2014)",
    chart3Title: "Chart 3 · On-hand Backlog (158,468) vs Annual Cap (8,500 / 7,060) & Subclass 804 Reality",
    chart3Sub: "FOI (DA 26/01/00017 & DA 25/07/00301): 100,762 Contributory vs 6,800 cap / 57,706 Non-Contributory vs 1,700 cap (Subclass 804 had only 37 grants vs 475 exits in FY24–25).",
    c3Leg1: "On-hand Backlog (Persons)",
    c3Leg2: "Annual Statutory Cap (LIN 26/042 s 85)",
    infHeading: "5 Critical Legal & Statistical Inferences Drawn from the Official Queue Page",
    infSub: "Combining the published queue dates with Ministerial Directions No. 103 & No. 117 and PAM3 reveals five essential strategic insights.",
    m2Overline: "MODULE 02 · INTERACTIVE QUEUE POSITION & RELEASE YEAR PLANNING SIMULATOR",
    m2Title: "Interactive Queue Position & Stage 1 / Stage 2 Scenario Planning Tool",
    m2Sub: "For applications lodged on or after 1 June 2018, the Queue Date is assigned when Stage 1 Queue Assessment completes—NOT on initial lodgement. Separates official new-application benchmarks from velocity extrapolations.",
    simFormTitle: "Enter Your Application Parameters",
    simResultTitle: "Queue & Medical Assessment Window Scenario",
    m3Overline: "MODULE 03 · 7-SUBCLASS PATHWAY SELECTOR & BALANCE OF FAMILY TEST (REG 1.05)",
    m3Title: "Interactive 7-Subclass Pathway Selector & Balance of Family Test (Reg 1.05) Calculator",
    m3Sub: "Evaluate Age 67 Schedule 1 validity rules (effective 17 Dec 2024, incl. substituted Subclass 600 exception), onshore Bridging Visa eligibility, the Subclass 870 asymmetric lockout bar, and both prongs of reg 1.05(2C).",
    wizFormTitle: "Enter Parent Ages, Location & Family Composition",
    wizResultTitle: "Recommended Pathway & Balance of Family Verdict",
    subMatrixTitle: "Complete 7-Subclass Parent Visa Comparison Matrix (FY2026–27)",
    m4Overline: "MODULE 04 · TOTAL COST ESTIMATOR, ASSURER ELIGIBILITY & SERVICES AUSTRALIA AOS CALCULATOR",
    m4Title: "Itemised Cost Estimator (1st/2nd VAC + AoS Bond) & Assurer Eligibility / Taxable Income Calculator",
    m4Sub: "Calculates exact 1st & 2nd VACs and applies the Social Security (Assurance of Support) Determination 2018 ss 8, 9, 15, 16 formula ($22,578 × [Assurers + New Parents + Existing Assured Adults] + $2,942 per child), corporate financial review (DSS 9.4.3.30), and Subclass 870 individual sponsor income ($83,454.80).",
    costFormTitle: "Enter Pathway & Assurer Parameters",
    costResultTitle: "Itemised Cost, Assurer Eligibility & AoS Income Verdict",
    chart4Title: "Chart 4 · Total Government Cost Breakdown by Pathway (1st VAC + 2nd VAC + AoS Bond, AUD)",
    chart4Sub: "Real-time comparison across the 5 major parent visa pathways for your selected number of parents.",
    c4Leg1: "1st Installment VAC",
    c4Leg2: "2nd Installment VAC",
    c4Leg3: "AoS Bank Guarantee Bond (Refundable after 10/4 yrs)",
    aosDeepHeading: "Assurer Eligibility Rules, Assessable Income Components, Corporate Review & 870 Sponsor Income",
    aosDeepSub: "Statutory rules under Social Security (Assurance of Support) Determination 2018 (ss 7–18) and DSS Social Security Guide 9.4.",
    m5Overline: "MODULE 06 · 15–42 YEAR WAITING PERIOD SURVIVAL GUIDE: ELIGIBLE VS NOT SUPPORTED",
    m5Title: "15–42 Year Waiting Period Survival Guide: Eligible Rights vs Welfare Exclusions & 8 Traps",
    m5Sub: "Everything waiting applicants and sponsors must know: Bridging Visa work & travel rules, Medicare exclusion vs RHCA & 173/884 unlock, PIC 4005/4007 ($86,000 threshold & 3/5/10-yr assessment windows), My Aged Care subsidies, and Korea-Australia pension totalisation (DSS 10.22).",
    survTableTitle: "Waiting Period Rights & Welfare Eligibility Matrix Across 4 Stages",
    m6Overline: "MODULE 07 · ONE-STOP OFFICIAL LINKS DIRECTORY (22 BOOKMARKS) & POLLER OPERATIONS",
    m6Title: "One-Stop Directory of 22 Official Government Links & 15-Source Poller Schedule",
    m6Sub: "Direct access to all 22 essential government portals for waiting parent visa families plus our automated primary-source monitoring schedule.",
    pollerSchedTitle: "Automated Primary-Source Poller Schedule (15 Official Endpoints)",
    modalTitle: "Primary-Source Monitor (Verification Status · Source Currency · Legal Review)"
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
      title: "ImmiAccount 온라인 원칙 vs 예외·종이 접수",
      body: "<strong>2026.04.22(LIN 26/005)</strong>부터 <code>103·143·804·864</code>는 원칙적으로 ImmiAccount 온라인 접수 대상이에요(단, LIN 26/005 ss 12–13에 따른 이민성 서면 허가 Form 47PA 접수 예외 및 시행일 전 발송 우편·쿠리어 경과규정 확인). 반면 임시 비자인 <code>173·884</code>는 통상 서호주 Perth 부모비자센터(PVC)로 종이 우편 접수해요 [3–8]."
    },
    {
      step: "STAGE 1 · 대기열 편입 심사 (Queue Assessment)",
      title: "28~43개월 적체 & 2018.06.01 함정",
      body: "스폰서십·가족균형(Reg 1.05)·고령(67세+ 또는 대체 600 특례) 요건을 1차 심사해 <strong>Queue Date</strong>를 부여해요. ⚠️ <strong>2018.06.01 이후 신청분은 '접수일'이 아니라 '1차 심사 완료일'이 Queue Date</strong>가 되어 28~43개월이 추가 소요돼요 [1,16]."
    },
    {
      step: "STAGE 2 · 대기열 동결 (s 85 Cap Queue)",
      title: "대기 158,468명 vs 연간 8,500석(계획 7,060석)",
      body: "Migration Act s 85 연간 상한(<code>LIN 26/042</code> 기여제 6,800석 + 일반 1,700석; FY26–27 계획 7,060석)에 묶여 순번을 기다려요. 현실 1년당 기여제 큐는 연평균 약 <strong>5.07개월</strong> 전진했어요 [11,12]."
    },
    {
      step: "STAGE 3 · 최종 심사 (Queue Release)",
      title: "신체검사(PIC 4005) + AoS + 2차 VAC",
      body: "Queue Release Date 도달 시 개시돼요. ① <strong>신체검사(영주 부모비자 PIC 4005 · $86,000 상한 · 일반 5년 / 75세+ 3년 / 지속질환 최대 10년 산정)</strong>, ② <strong>Services Australia AoS 승인 및 CBA 본드($10k/$14k/$20k)</strong>, ③ <strong>2차 기여금($43,600/인)</strong> 납부 후 승인돼요 [2,13]."
    }
  ] : [
    {
      step: "STAGE 0 · Lodgement",
      title: "ImmiAccount Online Rule vs Exceptions & Paper",
      body: "From <strong>22 Apr 2026 (LIN 26/005)</strong>, <code>103·143·804·864</code> must generally be lodged online via ImmiAccount (subject to LIN 26/005 ss 12–13 written-permission Form 47PA exceptions and transitional rules for pre-commencement post/courier dispatch). Temporary <code>173·884</code> use paper post to Perth PVC [3–8]."
    },
    {
      step: "STAGE 1 · Queue Assessment",
      title: "28–43m Backlog & 1 June 2018 Trap",
      body: "Core criteria (sponsorship, Balance of Family, Age 67+ or substituted 600 exception) are checked to assign a <strong>Queue Date</strong>. ⚠️ Post-1 June 2018 applications receive the <strong>assessment completion date</strong>—not lodgement date—as their Queue Date [1,16]."
    },
    {
      step: "STAGE 2 · Section 85 Cap Queue",
      title: "158,468 Backlog vs 8,500 Cap (7,060 Plan)",
      body: "Applications wait under the annual s 85 cap (<code>LIN 26/042</code>: 6,800 Contributory + 1,700 Parent; FY26–27 planning ceiling 7,060). Contributory queue advanced ~<strong>5.07 queue-months per year</strong> [11,12]."
    },
    {
      step: "STAGE 3 · Final Visa Assessment",
      title: "Medical (PIC 4005) + AoS + 2nd VAC",
      body: "Triggered at Queue Release: ① <strong>Medical Exam (PIC 4005 · $86,000 SCT assessed over 5 yrs standard, 3 yrs for 75+, or up to 10 yrs for ongoing conditions)</strong>, ② <strong>Services Australia AoS & CBA Bank Guarantee ($10k/$14k/$20k)</strong>, and ③ <strong>2nd VAC ($43,600/adult)</strong> [2,13]."
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
      ko: ["<strong>2단계 영주 전환 (173→143 / 884→864)</strong>", "약 4주", "<span class='badge-ok'>N/A (Direction 103 s 7(2)(b) 1단계 접수일 의제)</span>", "0개월", "<strong>2026년 5월 접수분 심사 중</strong>", "<span class='badge-ok'>2026.05 코호트 (~3개월 시차 스냅샷)</span>"],
      en: ["<strong>2-Stage Step-Up (173→143 / 884→864)</strong>", "Approx. 4 weeks", "<span class='badge-ok'>N/A (Deemed Stage 1 Date, Direction 103 s 7(2)(b))</span>", "0 mos", "<strong>May 2026 Cohort</strong>", "<span class='badge-ok'>May 2026 Cohort (~3m lag snapshot)</span>"]
    },
    {
      ko: ["<strong>기여제 부모 영주 (Subclass 143)</strong>", "약 4주", "2024년 4월 접수분", "<span class='badge-warn'>28개월 적체</span>", "<strong>2018년 11월 이전 편입분</strong>", "<strong>신규 약 18년</strong>"],
      en: ["<strong>Contributory Parent (Subclass 143)</strong>", "Approx. 4 weeks", "Lodged April 2024", "<span class='badge-warn'>28 mos lag</span>", "<strong>Up to November 2018</strong>", "<strong>New Apps: Approx. 18 years</strong>"]
    },
    {
      ko: ["<strong>기여제 부모 임시 (Subclass 173)</strong>", "약 4주", "2024년 4월 접수분", "<span class='badge-warn'>28개월 적체</span>", "<strong>2018년 11월 이전 편입분</strong>", "<strong>신규 약 18년</strong>"],
      en: ["<strong>Contributory Parent Temp (Subclass 173)</strong>", "Approx. 4 weeks", "Lodged April 2024", "<span class='badge-warn'>28 mos lag</span>", "<strong>Up to November 2018</strong>", "<strong>New Apps: Approx. 18 years</strong>"]
    },
    {
      ko: ["<strong>기여제 고령부모 영주 (Subclass 864 · Onshore 67+)</strong>", "약 4주", "2023년 4월 접수분", "<span class='badge-warn'>40개월 적체</span>", "<strong>2020년 11월 이전 편입분 (+24개월 선행 코호트)</strong>", "<strong>신규 약 18년</strong>"],
      en: ["<strong>Contributory Aged Parent (Subclass 864 · 67+)</strong>", "Approx. 4 weeks", "Lodged April 2023", "<span class='badge-warn'>40 mos lag</span>", "<strong>Up to November 2020 (+24m cohort lead)</strong>", "<strong>New Apps: Approx. 18 years</strong>"]
    },
    {
      ko: ["<strong>기여제 고령부모 임시 (Subclass 884 · Onshore 67+)</strong>", "약 4주", "2023년 4월 접수분", "<span class='badge-warn'>40개월 적체</span>", "<strong>2020년 11월 이전 편입분 (+24개월 선행 코호트)</strong>", "<strong>신규 약 18년</strong>"],
      en: ["<strong>Contributory Aged Temp (Subclass 884 · 67+)</strong>", "Approx. 4 weeks", "Lodged April 2023", "<span class='badge-warn'>40 mos lag</span>", "<strong>Up to November 2020 (+24m cohort lead)</strong>", "<strong>New Apps: Approx. 18 years</strong>"]
    },
    {
      ko: ["<strong>일반 부모 영주 (Subclass 103)</strong>", "약 4주", "2023년 2월 접수분", "<span class='badge-no'>42개월 적체</span>", "<strong>2014년 3월 이전 편입분</strong>", "<span class='badge-no'>신규 약 42년</span>"],
      en: ["<strong>Parent (Subclass 103)</strong>", "Approx. 4 weeks", "Lodged February 2023", "<span class='badge-no'>42 mos lag</span>", "<strong>Queued up to March 2014</strong>", "<span class='badge-no'>New Apps: Approx. 42 years</span>"]
    },
    {
      ko: ["<strong>일반 고령부모 영주 (Subclass 804 · Onshore 67+)</strong>", "약 4주", "2023년 1월 접수분", "<span class='badge-no'>43개월 적체</span>", "<strong>2014년 10월 이전 편입분</strong>", "<span class='badge-no'>신규 약 42년 (연 37건 승인)</span>"],
      en: ["<strong>Aged Parent (Subclass 804 · Onshore 67+)</strong>", "Approx. 4 weeks", "Lodged January 2023", "<span class='badge-no'>43 mos lag</span>", "<strong>Queued up to October 2014</strong>", "<span class='badge-no'>New Apps: Approx. 42 years (37/yr)</span>"]
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
      title: "1. 왜 173→143 / 884→864 전환은 공식 표에서 Queue Assessment가 'N/A'이고 2026년 5월 접수분을 심사 중인가?",
      body: "Ministerial Direction No. 103 <strong>s 7(2)(b)</strong>에 의해 1단계 임시비자(173/884) 소지자가 영주 전환(143/864)을 신청하면 <strong>최초 임시비자 접수일을 영주비자 접수일로 법정 의제(deemed)</strong>하며, <strong>s 8(1)(b)</strong>의 대기열 순서 원칙 하에서 이미 기준일을 넘긴 전환 신청으로 처리돼요. 2026.08.31 공시 기준 <strong>2026년 5월 접수 코호트</strong>가 최종 심사 중이에요(단, 개별 완료 기간은 AoS·신검·서류 보완에 따라 달라져요) [1,16]."
    },
    {
      title: "2. 왜 온쇼어 고령 기여제(864)는 최종 심사 코호트가 24개월 앞선 반면(2020.11 vs 2018.11), 1차 심사는 1년 뒤처져 있는가?",
      body: "<strong>2단계 기준일 코호트가 2020.11인 배경</strong>: 2026.07.25 발효 Ministerial Direction No. 117 s 8(2)(a)가 온쇼어 고령 신청을 우선 구조에 두고 LIN 26/042에서 1,125석을 별도 배정했기 때문이에요. <strong>1단계가 2023.04인 이유</strong>: Direction 103 s 6(2)(c)에 따라 온쇼어 고령비자는 대기열 편입 전 1차 요건·검사를 선행 심사하며 팬데믹 이후 신청이 집중되었기 때문이에요 [1,12,17]."
    },
    {
      title: "3. 2018년 6월 1일 Queue Date 규칙 변경이 만든 '보이지 않는 28~43개월 추가 대기' 함정",
      body: "2018.06.01 이전 신청분은 '접수일 = Queue Date'였으나, 이후 신청분은 <strong>'1차 심사(Queue Assessment) 통과일 = Queue Date'</strong>예요. 즉 2024년 4월에 143을 접수한 분은 2026년 8월에야 심사를 받아 <strong>2026년 8월 Queue Date</strong>를 부여받으므로 체감 대기기간이 훨씬 길어져요 [1,16]."
    },
    {
      title: "4. 왜 2026년 10월 6일 업데이트에서 신규 신청 예상 대기기간이 15→18년, 33→42년으로 상향 공시되었는가?",
      body: "법정 상한 고시(LIN 26/042)는 8,500석(기여제 6,800 + 일반 1,700)이나, 연방정부의 <strong>FY2026–27 Migration Program Planning Levels에서 부모비자 계획 배정치를 7,060석(-16.94% 축소)</strong>으로 설정하면서 신규 신청에 대한 거시 추정치가 기여제 약 18년, 비기여제 약 42년으로 상향 공시되었어요 [1,11,12]."
    },
    {
      title: "5. Subclass 804(온쇼어 일반 고령부모)의 통계적 현실: 연 37건 승인 vs 475건 이탈",
      body: "FOI(DA 25/07/00301) 확인 결과, 27,013명이 804 비자를 대기 중이지만 FY2024–25 한 해 실제 발급 건수는 <strong>단 37건</strong>이었고 사망·철회·거절 이탈이 <strong>475건</strong>이었어요. 사실상 영주권 취득이 아닌 BVA 장기 체류 수단으로 기능하므로 메디케어 부재와 노인요양비 리스크를 반드시 대비해야 해요 [8,12]."
    }
  ] : [
    {
      title: "1. Why Does the Official Table Show Queue Assessment 'N/A' and 'May 2026' for 173→143 / 884→864 Step-Ups?",
      body: "Under Ministerial Direction No. 103 <strong>s 7(2)(b)</strong>, a Stage 2 permanent transition application (143/864) lodged by a Stage 1 temporary holder (173/884) is <strong>deemed to have been lodged on the initial Stage 1 application date</strong>, while <strong>s 8(1)(b)</strong> maintains queue-date order. As at 31 August 2026, Home Affairs is assessing the <strong>May 2026</strong> step-up cohort (individual completion still depends on AoS, health, and character checks) [1,16]."
    },
    {
      title: "2. Why Is the Onshore Aged 864 Release Cohort at Nov 2020 vs Nov 2018 for 143, Yet Stage 1 Assessment Is at Apr 2023?",
      body: "<strong>Stage 2 cohort at Nov 2020</strong> reflects Ministerial Direction No. 117 s 8(2)(a) (effective 25 Jul 2026) priority structure for onshore aged applications and the 1,125-place earmark in LIN 26/042. <strong>Stage 1 assessment at Apr 2023</strong> reflects upfront assessment requirements under Direction 103 s 6(2)(c) and post-pandemic onshore application volume [1,12,17]."
    },
    {
      title: "3. The 1 June 2018 Queue Date Rule Shift: The Hidden 28–43 Month Front-End Delay",
      body: "Before 1 June 2018, Queue Date equalled Lodgement Date. On/after 1 June 2018, <strong>Queue Date equals the date Queue Assessment is completed</strong>. An applicant who lodged a 143 in April 2024 and is assessed in August 2026 receives an <strong>August 2026 Queue Date</strong> [1,16]."
    },
    {
      title: "4. Why Did Published New-Application Estimates Rise from 15→18 Years and 33→42 Years on 6 October 2026?",
      body: "While LIN 26/042 sets the s 85 cap at 8,500 (6,800 Contributory + 1,700 Parent), the Government set the <strong>FY2026–27 Migration Program Planning Level for Parent visas at 7,060 places (-16.94%)</strong>, accompanying the updated macro estimates of ~18 years (Contributory) and ~42 years (Non-Contributory) for new applications [1,11,12]."
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
  const inputDec = stage === "planning" ? (2026 + 10 / 12) : (yr + (mo - 1) / 12);

  // Pull empirical velocity dynamically from QUEUE_DATA where available (E09/E11)
  const lagMap = {};
  if (QUEUE_DATA && Array.isArray(QUEUE_DATA.queue_lags_months_as_at_aug_2026)) {
    QUEUE_DATA.queue_lags_months_as_at_aug_2026.forEach(row => { lagMap[row.id] = row; });
  }
  const v864 = lagMap.sub_864_884?.empirical_velocity_months_per_year || 9.13;
  const v143 = lagMap.sub_143_173?.empirical_velocity_months_per_year || 5.07;
  const v103 = lagMap.sub_103?.empirical_velocity_months_per_year || 4.18;
  const v804 = lagMap.sub_804?.empirical_velocity_months_per_year || 2.35;

  // Subclass parameters as at Aug 2026
  const PARAMS = {
    "173_to_143": { s1LagYrs: 0, releaseCutoffDec: 2026 + 4 / 12, officialWaitYrs: 0.35, velocityMosPerYr: 12.0, name: "173 → 143 Step-up" },
    "884_to_864": { s1LagYrs: 0, releaseCutoffDec: 2026 + 4 / 12, officialWaitYrs: 0.35, velocityMosPerYr: 12.0, name: "884 → 864 Step-up" },
    "143": { s1LagYrs: 28 / 12, releaseCutoffDec: 2018 + 10 / 12, officialWaitYrs: 18, velocityMosPerYr: v143, name: "Subclass 143" },
    "173": { s1LagYrs: 28 / 12, releaseCutoffDec: 2018 + 10 / 12, officialWaitYrs: 18, velocityMosPerYr: v143, name: "Subclass 173" },
    "864": { s1LagYrs: 40 / 12, releaseCutoffDec: 2020 + 10 / 12, officialWaitYrs: 18, velocityMosPerYr: v864, name: "Subclass 864 (Onshore 67+)" },
    "884": { s1LagYrs: 40 / 12, releaseCutoffDec: 2020 + 10 / 12, officialWaitYrs: 18, velocityMosPerYr: v864, name: "Subclass 884 (Onshore 67+)" },
    "103": { s1LagYrs: 42 / 12, releaseCutoffDec: 2014 + 2 / 12, officialWaitYrs: 42, velocityMosPerYr: v103, name: "Subclass 103" },
    "804": { s1LagYrs: 43 / 12, releaseCutoffDec: 2014 + 9 / 12, officialWaitYrs: 42, velocityMosPerYr: v804, name: "Subclass 804 (Onshore 67+)" }
  };

  const p = PARAMS[sub] || PARAMS["143"];
  const isStepUp = sub === "173_to_143" || sub === "884_to_864";

  let estQueueDateDec = inputDec;
  let s1StatusKo = "";
  let s1StatusEn = "";

  if (isStepUp) {
    estQueueDateDec = inputDec;
    s1StatusKo = "N/A (Direction 103 s 7(2)(b) 1단계 접수일 의제)";
    s1StatusEn = "N/A (Deemed Stage 1 Date, Direction 103 s 7(2)(b))";
  } else if (stage === "queued") {
    estQueueDateDec = inputDec;
    s1StatusKo = `${yr}년 ${mo}월 확정 완료`;
    s1StatusEn = `Assigned ${yr}-${String(mo).padStart(2, "0")}`;
  } else {
    // Post-1 June 2018 rule: Queue Date is assigned when Stage 1 assessment completes
    estQueueDateDec = Math.max(NOW_DEC + 0.15, inputDec + p.s1LagYrs);
    const qYr = Math.floor(estQueueDateDec);
    const qMo = Math.max(1, Math.min(12, Math.round((estQueueDateDec - qYr) * 12) + 1));
    s1StatusKo = `예상 ${qYr}년 ${qMo}월 (접수 후 ~${Math.round(p.s1LagYrs * 12)}개월 뒤)`;
    s1StatusEn = `Est. ${qYr}-${String(qMo).padStart(2, "0")} (~${Math.round(p.s1LagYrs * 12)}m after lodgement)`;
  }

  // E07 & E08: Do NOT add the "new applications lodged today" benchmark (18yr / 42yr) to historical/already-queued applications!
  let officialCardValKo = "";
  let officialCardValEn = "";
  let officialCardSubKo = "";
  let officialCardSubEn = "";
  let velocityCardValKo = "";
  let velocityCardValEn = "";
  let remainingYrs = 0.35;

  if (isStepUp) {
    officialCardValKo = "2026년 5월 접수분 심사 중";
    officialCardValEn = "Assessing May 2026 Cohort";
    officialCardSubKo = "2026.08.31 기준 코호트 현황 (개인별 완료기간 보장 아님)";
    officialCardSubEn = "Cohort status as at 31 Aug 2026 (Not a guaranteed personal turnaround)";
    velocityCardValKo = "1단계 접수일 의제 심사 (Direction 103 ss 7(2)(b), 8(1)(b))";
    velocityCardValEn = "Assessed on Deemed Stage 1 Date (Direction 103 ss 7(2)(b), 8(1)(b))";
    remainingYrs = Math.max(0.25, Math.max(0, inputDec - p.releaseCutoffDec));
  } else {
    const queueGapYears = Math.max(0, estQueueDateDec - p.releaseCutoffDec);
    const queueGapMonths = Math.round(queueGapYears * 12);
    const velYearsFromNow = (queueGapYears * 12) / p.velocityMosPerYr;
    const estReleaseVelocityYr = Math.round(NOW_DEC + velYearsFromNow);
    const newAppBenchmarkYr = Math.round(2026.8 + p.officialWaitYrs);

    if (queueGapMonths <= 0) {
      officialCardValKo = "현재 공시 컷오프 도달 (개별 심사 상태 확인)";
      officialCardValEn = "At/Before Current Cutoff (Check Case Status)";
      officialCardSubKo = `현재 공시 컷오프 이내 · (참고: 오늘 신규 접수 시 거시 추계 약 ${p.officialWaitYrs}년)`;
      officialCardSubEn = `Within current release cutoff · (New-lodgement macro benchmark: ~${p.officialWaitYrs} yrs)`;
      velocityCardValKo = "최종 심사 대상 구간 (PVC 문의 권장)";
      velocityCardValEn = "Within Release Cutoff (Enquire with PVC)";
      remainingYrs = 0.35;
    } else if (stage === "planning") {
      officialCardValKo = `신규 거시 추계 약 ${p.officialWaitYrs}년 (~${newAppBenchmarkYr}년 시나리오)`;
      officialCardValEn = `New-App Benchmark ~${p.officialWaitYrs} yrs (~${newAppBenchmarkYr} Scenario)`;
      officialCardSubKo = `이민성 신규 접수 집단 추정치 약 ${p.officialWaitYrs}년 기준 (개인별 승인일 보장 아님)`;
      officialCardSubEn = `Home Affairs macro estimate (~${p.officialWaitYrs} yrs) for new applications today`;
      velocityCardValKo = `약 ${estReleaseVelocityYr}년 (실증 속도 시나리오)`;
      velocityCardValEn = `~${estReleaseVelocityYr} (Velocity Extrapolation Scenario)`;
      remainingYrs = Math.max(0.5, p.officialWaitYrs);
    } else {
      officialCardValKo = `컷오프 대비 +${queueGapMonths}개월 뒤 (신규 추계: ${p.officialWaitYrs}년)`;
      officialCardValEn = `+${queueGapMonths}m Behind Cutoff (New App Benchmark: ${p.officialWaitYrs} yrs)`;
      officialCardSubKo = `기접수/큐 부여 건은 잔여 격차(${queueGapMonths}개월) 기준 · ${p.officialWaitYrs}년 추계는 오늘 신규 접수분 전용`;
      officialCardSubEn = `${p.officialWaitYrs}-yr figure applies to NEW applications today, not historical ${yr}-${String(mo).padStart(2, "0")} cohorts`;
      velocityCardValKo = `약 ${estReleaseVelocityYr}년 시나리오 (연 ${p.velocityMosPerYr}개월 전진 가정)`;
      velocityCardValEn = `~${estReleaseVelocityYr} Scenario (at ${p.velocityMosPerYr} queue-mos/yr)`;
      remainingYrs = Math.max(0.5, velYearsFromNow);
    }
  }

  // E13, E15, E20 & E24: Explain PIC 4005 cost assessment window (3 yrs for aged 75+, 5 yrs standard, up to 10 yrs ongoing) without a binary age-80 pass/fail cutoff
  const ageAtRelease = Math.round(curAge + remainingYrs);
  const isAged75PlusAtRelease = ageAtRelease >= 75;

  if (currentLang === "ko") {
    out.innerHTML = `
      <div class="pv-sim-kpi-grid">
        <div class="pv-sim-kpi">
          <div class="kpi-label">1단계 Queue Date 부여 시점</div>
          <div class="kpi-val" style="font-size:17px;">${s1StatusKo}</div>
          <div class="kpi-sub">2018.06.01 이후 심사완료일 = Queue Date</div>
        </div>
        <div class="pv-sim-kpi">
          <div class="kpi-label">이민성 공시 컷오프 격차 & 신규 벤치마크</div>
          <div class="kpi-val" style="font-size:17px;">${officialCardValKo}</div>
          <div class="kpi-sub">${officialCardSubKo}</div>
        </div>
        <div class="pv-sim-kpi">
          <div class="kpi-label">실증 큐 속도(Velocity) 외삽 시나리오</div>
          <div class="kpi-val" style="font-size:17px;">${velocityCardValKo}</div>
          <div class="kpi-sub">연간 쿼터·이탈률에 따라 변동 가능 (비보장 계획 도구)</div>
        </div>
        <div class="pv-sim-kpi">
          <div class="kpi-label">예상 도달 시점 계획 연령 & 신검 기간</div>
          <div class="kpi-val" style="color:#991B1B;">만 ${ageAtRelease}세</div>
          <div class="kpi-sub">영주 부모비자 PIC 4005 ($86,000 MOC 기준) — ${isAged75PlusPlusLabelKo(isAged75PlusAtRelease)}</div>
        </div>
      </div>
      <div class="pv-inference-card" style="margin-top:12px;">
        <h4>박앤코 법률 시나리오 계획 노트 (${p.name})</h4>
        <p>
          ${isStepUp
            ? "1단계 임시 기여제 비자(173 또는 884) 소지자가 영주 전환(143 또는 864)을 신청하시는 경우, <strong>Ministerial Direction No. 103 s 7(2)(b)</strong>에 따라 최초 임시비자 접수일이 영주비자 접수일로 법정 의제(deemed)되며 <strong>s 8(1)(b)</strong>의 큐 순서 원칙 하에 심사돼요(공식 표상 <code>Queue Assessment: N/A</code>). 2026년 8월 31일 기준 <strong>2026년 5월 접수분</strong>이 최종 심사 중이며, 건강검사는 <strong>cl 143.225–143.226</strong>에 따라 장관이 추가 검사를 요청하는 경우에 한해 재검을 받아요."
            : `현재 선택하신 <strong>${p.name}</strong> 경로의 계획 시나리오상 최종 단계 도달 시 주신청자 부모님 연세는 <strong>약 만 ${ageAtRelease}세</strong>로 추산돼요. 영주·임시 부모비자(103/143/173/804/864/884)는 건강요건 면제(Health Waiver)가 없는 <strong>PIC 4005($86,000 MOC 유의미한 비용 기준)</strong>가 적용되며(반면 Subclass 870은 신청 시 해외 체류면 PIC 4005, 호주 국내 체류면 PIC 4007 적용, cl 870.228), MOC 비용 평가 기간은 <strong>일반 영주/임시 5년, 만 75세 이상 신청자 3년, 예측 가능한 영구·지속 질환은 기대여명 범위 내 최대 10년</strong>으로 구분돼요.`}
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
          <div class="kpi-label">Cutoff Gap &amp; Official New-App Benchmark</div>
          <div class="kpi-val" style="font-size:17px;">${officialCardValEn}</div>
          <div class="kpi-sub">${officialCardSubEn}</div>
        </div>
        <div class="pv-sim-kpi">
          <div class="kpi-label">Empirical Velocity Scenario</div>
          <div class="kpi-val" style="font-size:17px;">${velocityCardValEn}</div>
          <div class="kpi-sub">Advancing ${p.velocityMosPerYr} queue-months/yr (planning scenario only)</div>
        </div>
        <div class="pv-sim-kpi">
          <div class="kpi-label">Planning Age &amp; PIC 4005 Assessment Window</div>
          <div class="kpi-val" style="color:#991B1B;">Age ${ageAtRelease}</div>
          <div class="kpi-sub">Permanent parent PIC 4005 ($86,000 MOC SCT) — ${isAged75PlusAtRelease ? "3-yr window (aged 75+) or up to 10 yrs (ongoing)" : "5-yr standard window (up to 10 yrs ongoing)"}</div>
        </div>
      </div>
      <div class="pv-inference-card" style="margin-top:12px;">
        <h4>Park &amp; Co Scenario Planning Note (${p.name})</h4>
        <p>
          ${isStepUp
            ? "When stepping up from a Subclass 173 or 884 temporary visa to permanent Subclass 143 or 864, <strong>Ministerial Direction No. 103 s 7(2)(b)</strong> deems the permanent application to have been lodged on the initial temporary application date, while <strong>s 8(1)(b)</strong> maintains queue-date order (published table shows <code>Queue Assessment: N/A</code>). As at 31 August 2026, Home Affairs is assessing the <strong>May 2026</strong> step-up cohort (not a guaranteed personal completion time). Under <strong>cl 143.225–143.226</strong>, a step-up applicant undergoes further medical checks only if requested by the Minister."
            : `Under this planning scenario for <strong>${p.name}</strong>, the primary applicant would be <strong>~Age ${ageAtRelease}</strong> at Stage 2 assessment. Permanent and provisional parent visas (103/143/173/804/864/884) are subject to <strong>PIC 4005 ($86,000 MOC Significant Cost Threshold, no health waiver)</strong> (whereas Subclass 870 applies PIC 4005 if offshore at application or PIC 4007 if onshore under cl 870.228), assessed over <strong>5 years standard, 3 years for applicants aged 75+, or up to 10 years within life expectancy for permanent/ongoing conditions</strong>.`}
        </p>
      </div>
    `;
  }
}

function isAged75PlusPlusLabelKo(is75Plus) {
  return is75Plus ? "만 75세+ 3년(지속질환 최대 10년) 비용 산정" : "일반 5년(지속질환 최대 10년) 비용 산정";
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
  const totalKids = Math.max(1, parseInt(document.getElementById("wiz-total-children")?.value || "2", 10));
  const auKids = Math.max(0, Math.min(totalKids, parseInt(document.getElementById("wiz-au-children")?.value || "1", 10)));
  const maxOverseasEl = document.getElementById("wiz-max-overseas-country");
  const remOverseas = Math.max(0, totalKids - auKids);
  const rawMaxOv = maxOverseasEl?.value;
  const parsedMaxOv = (rawMaxOv !== undefined && rawMaxOv !== null && rawMaxOv !== "" && rawMaxOv !== "auto")
    ? parseInt(rawMaxOv, 10)
    : NaN;
  const maxOverseas = Number.isNaN(parsedMaxOv) ? null : Math.max(0, Math.min(remOverseas, parsedMaxOv));
  const budget = document.getElementById("wiz-budget")?.value || "contrib_direct";

  // E01: Balance of Family Test (Migration Regulations 1994 reg 1.05(2C)):
  // Prong (a): auKids >= ceil(totalKids / 2) (at least half of all children are eligible AU children)
  // Prong (b): auKids > maxOverseas (more eligible AU children than children living in any single overseas country)
  const minAuRequired50 = Math.ceil(totalKids / 2);
  const bofPass50 = auKids >= minAuRequired50;
  const bofPassSingleCountry = maxOverseas !== null && remOverseas > 0 && maxOverseas > 0 && auKids > maxOverseas;
  const bofConditionalNeedsCountryDist = !bofPass50 && maxOverseas === null && auKids >= 2 && remOverseas >= 2 && auKids > 1;
  const bofPass = bofPass50 || bofPassSingleCountry;

  let bofBadgeTextKo = "";
  let bofBadgeTextEn = "";
  let bofSubTextKo = "";
  let bofSubTextEn = "";

  if (bofPass50) {
    bofBadgeTextKo = "통과 (PASS — Reg 1.05(2C)(a) 50% 요건 충족)";
    bofBadgeTextEn = "PASS (Reg 1.05(2C)(a) ≥50% Rule Met)";
    bofSubTextKo = `전체 ${totalKids}명(reg 1.05(3) 제외자녀 차감 후) 중 호주 적격 자녀 ${auKids}명 (50% 기준 ${minAuRequired50}명 충족)`;
    bofSubTextEn = `${auKids} of ${totalKids} eligible children in AU (Meets ≥50% min ${minAuRequired50})`;
  } else if (bofPassSingleCountry) {
    bofBadgeTextKo = "통과 (PASS — Reg 1.05(2C)(b) 단일 해외국가 최다 자녀보다 다수)";
    bofBadgeTextEn = "PASS (Reg 1.05(2C)(b) Single-Country Majority Met)";
    bofSubTextKo = `호주 적격 자녀(${auKids}명) > 단일 해외국가 최다 거주 자녀(${maxOverseas}명) [50% 미달이나 (b)호 통과]`;
    bofSubTextEn = `AU eligible children (${auKids}) > max in any single overseas country (${maxOverseas}) under reg 1.05(2C)(b)`;
  } else if (bofConditionalNeedsCountryDist) {
    bofBadgeTextKo = "추가 확인 필요 (50% 미달 · Reg 1.05(2C)(b) 해외 거주국 분포 확인)";
    bofBadgeTextEn = "CONDITIONAL / FURTHER CHECK NEEDED (Check Reg 1.05(2C)(b) Overseas Country Distribution)";
    bofSubTextKo = `전체 ${totalKids}명 중 호주 ${auKids}명: 해외 자녀 ${remOverseas}명이 여러 국가에 분산되어 단일 국가 최다 인원이 ${auKids - 1}명 이하이면 Reg 1.05(2C)(b)로 통과 가능`;
    bofSubTextEn = `${auKids} of ${totalKids} in AU: Below 50% prong (a), but PASSES under reg 1.05(2C)(b) if no single overseas country has ≥${auKids} children`;
  } else {
    bofBadgeTextKo = "미충족 (FAIL — Reg 1.05(2C)(a) & (b) 모두 미달)";
    bofBadgeTextEn = "FAIL (Neither Reg 1.05(2C)(a) 50% nor (2C)(b) Met)";
    bofSubTextKo = `전체 ${totalKids}명 중 호주 ${auKids}명${maxOverseas !== null ? `, 단일 해외국가 최다 ${maxOverseas}명` : ""} (최소 ${minAuRequired50}명 필요)`;
    bofSubTextEn = `${auKids} of ${totalKids} in AU${maxOverseas !== null ? `, max ${maxOverseas} in one overseas country` : ""} (Min ${minAuRequired50} for 50% rule)`;
  }

  const isAged = mainAge === "67plus";
  const spouseMortalityTrap = isAged && spouseAge === "under67";
  const holding870 = cond === "holding_870";
  const has8503 = cond === "8503";

  let recTitleKo = "";
  let recTitleEn = "";
  let recBodyKo = "";
  let recBodyEn = "";

  // E16: Check explicit Subclass 870 Temporary preference BEFORE overriding with onshore 864
  if (budget === "temp_870") {
    recTitleKo = "선택 경로 진단: Subclass 870 (스폰서 임시 부모비자 3년/5년, 최대 10년)";
    recTitleEn = "Primary Recommendation: Subclass 870 (Sponsored Parent Temporary — 3 or 5 Years, Max 10 Years)";
    recBodyKo = `선택하신 <strong>Subclass 870 임시 부모비자</strong>는 가족균형테스트(Reg 1.05)나 만 67세 연령 요건 없이 개인 스폰서 과세소득(<strong>$83,454.80</strong>, LIN 19/146) 충족 시 3년($6,315/1인) 또는 5년($12,205/1인) 체류가 가능해요. ⚠️ 단, 향후 영주 부모비자(143/864/103/804)도 염두에 두고 계신다면 <strong>870 신청 중·소지 중(또는 마지막 비자가 870이고 미출국 시)에는 영주 부모비자 접수가 법정 차단(Schedule 1 Bar)</strong>되므로, 영주비자를 먼저 접수한 뒤 870을 신청(PAM3 VM-6327 s 3.6.6)하시거나 온쇼어 자격 시 <strong>Subclass 864/804</strong>와 별도 비교해 보세요.`;
    recBodyEn = `You selected <strong>Subclass 870 (Sponsored Parent Temporary Visa)</strong>, which requires NO Balance of Family Test and NO Age 67 threshold (requires an approved individual Parent Sponsor with taxable income ≥ <strong>$83,454.80</strong> under LIN 19/146; 3-yr total $6,315 or 5-yr total $12,205 for 1 parent). ⚠️ Note: holding or having a pending 870 bars lodging any permanent parent visa (103/143/173/804/864/884) under Schedule 1—if permanent residency may be desired later, lodge 143/103 first (PAM3 VM-6327 s 3.6.6).`;
  } else if (!bofPass && !bofConditionalNeedsCountryDist) {
    recTitleKo = "가족균형테스트 미충족 → Subclass 870 (임시 부모비자 3년/5년, 최대 10년) 유일 가능";
    recTitleEn = "Balance of Family Test Not Met → Subclass 870 (Sponsored Parent Temporary) Only";
    recBodyKo = `현재 자녀 구성으로는 영주/임시 부모비자(103/143/173/804/864/884)의 <strong>가족균형테스트(Reg 1.05(2C)(a) 50% 이상 또는 (b) 단일 해외국가 최다 거주 자녀보다 다수)</strong>를 충족하지 못해요. 따라서 <strong>가족균형테스트가 면제되는 Subclass 870(3년 또는 5년, 최대 10년 체류 · 개인 스폰서 과세소득 $83,454.80 이상)</strong>만 신청 가능해요.`;
    recBodyEn = `Under reg 1.05(2C), neither the ≥50% prong (a) nor the single-country majority prong (b) is satisfied, barring permanent parent visas. However, <strong>Subclass 870 (Sponsored Parent Temporary, 3 or 5 years up to 10 years) does NOT require the Balance of Family Test</strong> (requires individual sponsor taxable income ≥ $83,454.80).`;
  } else if (holding870) {
    recTitleKo = "⚠️ 긴급 경고: 현재 Subclass 870 소지 중 — 모든 영주 부모비자 접수 법정 차단 (Schedule 1 Bar)";
    recTitleEn = "⚠️ CRITICAL LOCKOUT: Currently Holding Subclass 870 — Permanent Parent Visas Barred";
    recBodyKo = `Migration Regulations 1994 Schedule 1 (Items 1124(3)(e), 1130(3)(e), 1124A(3)(f), 1130A(3)(f))에 따라 <strong>현재 Subclass 870 비자를 신청 중이거나 소지 중(또는 마지막 비자가 870이고 아직 호주에서 출국하지 않은 경우) 103·143·173·804·864·884 비자 접수가 원천 무효(Invalid)</strong>가 돼요(단, 법령상 정의된 대체 Subclass 600 소지자 특례는 예외). 반드시 870 비자 효력이 종료되고 호주를 출국한 뒤에야 새 부모비자를 접수할 수 있어요(PAM3 VM-3058) [9,18].`;
    recBodyEn = `Under Schedule 1 (Items 1124(3)(e), 1130(3)(e), 1124A(3)(f), 1130A(3)(f)) and PAM3 VM-3058, <strong>having a pending 870 application, holding an 870 visa, or having last held an 870 visa without departing Australia strictly bars lodging any 103, 143, 173, 804, 864, or 884 visa</strong> (absent a statutory substituted Subclass 600 exception) [9,18].`;
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
    recBodyKo = `주신청자께서 만 67세 이상이고 호주 국내에서 8503 조건 없는 유효 비자를 소지 중이시므로, 온쇼어에서 <strong>864(또는 884/804)</strong>를 접수하여 <strong>취업제한 없는 Bridging Visa A (010, LIN 23/029)</strong>를 받아 호주에 계속 체류하실 수 있어요. 864/884는 <strong>Ministerial Direction No. 117</strong> 온쇼어 우선심사 구조가 적용되며 현재 공시 Release 코호트는 <strong>2020년 11월</strong>이에요 [1,5,17].`;
    recBodyEn = `Because the primary applicant is aged 67+ and onshore without Condition 8503, lodging <strong>Subclass 864 (or 884/804)</strong> grants an onshore <strong>Bridging Visa A (010) with nil work restrictions (LIN 23/029)</strong>. Under <strong>Ministerial Direction No. 117</strong>, Subclass 864/884 Queue Release is currently at the <strong>November 2020</strong> cohort [1,5,17].`;
  } else {
    recTitleKo = budget === "non_contrib"
      ? "일반 부모비자 경로: Subclass 103 (ImmiAccount 온라인 접수 · 장기 대기)"
      : "기여제 부모비자 황금 경로: Subclass 143 (또는 173→143) 선접수 + 대기 중 600 방문 또는 870 병행 검토";
    recTitleEn = budget === "non_contrib"
      ? "General Parent Pathway: Subclass 103 (Online via ImmiAccount)"
      : "Golden Sequence: Lodge Subclass 143 (or 173→143) First + Consider Subclass 600 or Subclass 870 While Waiting";
    recBodyKo = `만 67세 미만이시거나 해외 체류 중(또는 8503 조건 보유)이시므로 <strong>Subclass 143(온라인 원칙) 또는 173(종이 우편)</strong>을 먼저 접수해 Queue Date 순번을 확보하세요(단, 온쇼어에서 장관 개입 등으로 부여된 법정 <strong>대체 Subclass 600 [substituted 600]</strong> 소지자는 67세 미만이어도 804/864/884 예외 검토 가능, F2025L00317). ⚠️ <strong>선후 순서(PAM3 VM-6327 s 3.6.6)</strong>: 143/103을 <strong>먼저 접수한 뒤</strong> 대기기간 동안 600 방문비자나 Subclass 870 임시 부모비자를 신청하는 것은 진정한 임시 체류 요건 충족 하에 양립 가능해요!`;
    recBodyEn = `Lodge <strong>Subclass 143 (online general rule) or Subclass 173 (paper)</strong> first to enter the queue (note: holders of a statutory <strong>substituted Subclass 600 visa</strong> under F2025L00317 should seek legal review for onshore 804/864/884 exceptions even if under 67). ⚠️ <strong>Permitted Sequence (PAM3 VM-6327 s 3.6.6)</strong>: While holding an 870 bars lodging a 143, <strong>lodging Subclass 143/103 FIRST and subsequently applying for a Subclass 870 or Visitor Visa (600) is compatible with genuine temporary stay</strong> if 870 criteria are met!`;
  }

  const mortalityHtml = spouseMortalityTrap ? (currentLang === "ko" ? `
    <div class="pv-inference-card" style="border-left-color:#DC2626;background:#FEF2F2;margin-top:10px;">
      <h4 style="color:#991B1B;">⚠️ [2024.12.17 개정법 &amp; PAM3 VM-3058 §3.9.1 경고] 동반 배우자 만 67세 미만 시 주신청자 유고 리스크</h4>
      <p style="color:#7F1D1D;">
        2024년 12월 17일(F2025L00317)부터 고령부모 비자(804/864/884)는 신청 시점에 주신청자가 <strong>만 67세 이상(aged parent)이거나 법정 대체 Subclass 600(substituted 600) 소지자</strong>여야 유효 접수가 돼요(PAM3 VM-3058 §3.2.6). 만약 주신청자께서 대기 중 별세하시면 남은 배우자를 주신청자 기준으로 심사하므로, <strong>최초 접수 당시 만 67세 미만이었고 대체 600 특례도 없는 남은 배우자는 804/864/884 비자 부여가 불가(PAM3 VM-3058 §3.9.1)</strong>해요. 연령 제한이 없는 <strong>Subclass 143</strong> 접수 또는 배우자 연령 도달 후 접수를 검토하세요.
      </p>
    </div>
  ` : `
    <div class="pv-inference-card" style="border-left-color:#DC2626;background:#FEF2F2;margin-top:10px;">
      <h4 style="color:#991B1B;">⚠️ [17 Dec 2024 Reform &amp; PAM3 VM-3058 §3.9.1 Warning] Surviving Spouse Under 67 at Lodgement</h4>
      <p style="color:#7F1D1D;">
        Since 17 December 2024 (F2025L00317), Schedule 1 requires the primary applicant for 804/864/884 to be an <strong>aged parent (67+) or hold a statutory substituted Subclass 600 visa</strong> at time of application (PAM3 VM-3058 §3.2.6). Under <strong>PAM3 VM-3058 §3.9.1</strong>, if the primary applicant dies before decision, the surviving spouse is assessed against primary criteria and <strong>cannot be granted 804/864/884 if they were not aged 67+ at initial lodgement</strong> (absent a substituted 600 exception). Consider Subclass 143 to avoid this risk.
      </p>
    </div>
  `) : "";

  out.innerHTML = `
    <div class="pv-sim-kpi-grid">
      <div class="pv-sim-kpi">
        <div class="kpi-label">${currentLang === "ko" ? "가족균형테스트 (Reg 1.05(2C))" : "Balance of Family Test (Reg 1.05(2C))"}</div>
        <div class="kpi-val" style="font-size:16px;color:${bofPass ? "#065F46" : (bofConditionalNeedsCountryDist ? "#B45309" : "#991B1B")};">${currentLang === "ko" ? bofBadgeTextKo : bofBadgeTextEn}</div>
        <div class="kpi-sub">${currentLang === "ko" ? bofSubTextKo : bofSubTextEn}</div>
      </div>
      <div class="pv-sim-kpi">
        <div class="kpi-label">${currentLang === "ko" ? "온쇼어 고령부모(804/864/884) 자격" : "Onshore Aged (804/864/884) Eligibility"}</div>
        <div class="kpi-val" style="font-size:16.5px;">${isAged && loc === "onshore" && !has8503 && !holding870 && bofPass ? (currentLang === "ko" ? "✅ 적격 (BVA 발급)" : "✅ Eligible (+BVA)") : (currentLang === "ko" ? "❌ 일반 요건 미해당 (대체 600 특례 등 별도 확인)" : "❌ Standard Criteria Not Met (Check substituted 600 / 143 / 870)")}</div>
        <div class="kpi-sub">${currentLang === "ko" ? "만 67세+(또는 대체 600) · 호주 국내 · 8503/870 없을 것" : "Requires Age 67+ (or substituted 600), Onshore & No 8503/870"}</div>
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
      ko: ["<strong>주신청자 연령·특례 요건 (Sch 1)</strong>", "제한 없음", "<strong>만 67세+</strong><br/><small>(또는 법정 대체 600 소지자)</small>", "제한 없음", "제한 없음", "<strong>만 67세+</strong><br/><small>(또는 법정 대체 600 소지자)</small>", "<strong>만 67세+</strong><br/><small>(또는 법정 대체 600 소지자)</small>", "제한 없음"],
      en: ["<strong>Age / Sch 1 Requirement</strong>", "None", "<strong>Age 67+</strong><br/><small>(or substituted 600 holder)</small>", "None", "None", "<strong>Age 67+</strong><br/><small>(or substituted 600 holder)</small>", "<strong>Age 67+</strong><br/><small>(or substituted 600 holder)</small>", "None"]
    },
    {
      ko: ["<strong>접수 방식 (LIN 26/005 · 2026.04.22~)</strong>", "원칙 온라인<br/><small>(서면허가 Form 47PA·경과규정 예외)</small>", "원칙 온라인<br/><small>(서면허가 Form 47PA·경과규정 예외)</small>", "원칙 온라인<br/><small>(서면허가 Form 47PA·경과규정 예외)</small>", "173: 종이 / 143: 온라인 원칙", "원칙 온라인<br/><small>(서면허가 Form 47PA·경과규정 예외)</small>", "884: 종이 / 864: 온라인 원칙", "ImmiAccount 온라인"],
      en: ["<strong>Lodgement (LIN 26/005 · 22 Apr 2026~)</strong>", "Online general rule<br/><small>(Written permission / transitional exceptions)</small>", "Online general rule<br/><small>(Written permission / transitional exceptions)</small>", "Online general rule<br/><small>(Written permission / transitional exceptions)</small>", "173: Paper / 143: Online rule", "Online general rule<br/><small>(Written permission / transitional exceptions)</small>", "884: Paper / 864: Online rule", "ImmiAccount Online"]
    },
    {
      ko: ["<strong>온쇼어 BVA 및 취업권</strong>", "미부여 (원칙)", "<span class='badge-ok'>BVA 부여 (LIN 23/029 취업 자유)</span>", "미부여 (원칙)", "미부여 (원칙)", "<span class='badge-ok'>BVA 부여 (LIN 23/029 취업 자유)</span>", "<span class='badge-ok'>BVA 부여 (LIN 23/029 취업 자유)</span>", "미부여 (취업 금지 8103)"],
      en: ["<strong>Onshore BVA & Work</strong>", "No BVA", "<span class='badge-ok'>BVA (Nil Work Condition, LIN 23/029)</span>", "No BVA", "No BVA", "<span class='badge-ok'>BVA (Nil Work Condition, LIN 23/029)</span>", "<span class='badge-ok'>BVA (Nil Work Condition, LIN 23/029)</span>", "No BVA (No Work 8103)"]
    },
    {
      ko: ["<strong>가족균형테스트 (Reg 1.05)</strong>", "필수 (50% 또는 단일국 다수)", "필수 (50% 또는 단일국 다수)", "필수 (50% 또는 단일국 다수)", "필수 (50% 또는 단일국 다수)", "필수 (50% 또는 단일국 다수)", "필수 (50% 또는 단일국 다수)", "<span class='badge-ok'>면제 (불요)</span>"],
      en: ["<strong>Balance of Family Test</strong>", "Mandatory (≥50% or single-country majority)", "Mandatory", "Mandatory", "Mandatory", "Mandatory", "Mandatory", "<span class='badge-ok'>Exempt (Not Required)</span>"]
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
      ko: ["<strong>재정보증(AoS) 기간 & 본드(개인 1/2인 · 법인)</strong>", "4년 · $5k/$7k (법인 $10k)", "4년 · $5k/$7k (법인 $10k)", "10년 · $10k/$14k (법인 $20k)", "173 면제 → 143 단계 10년", "10년 · $10k/$14k (법인 $20k)", "884 면제 → 864 단계 10년", "AoS 없음 (개인 스폰서 소득 $83,454.80)"],
      en: ["<strong>AoS Duration & Bond (Indiv 1/2 · Corp)</strong>", "4 yrs · $5k/$7k (Corp $10k)", "4 yrs · $5k/$7k (Corp $10k)", "10 yrs · $10k/$14k (Corp $20k)", "Exempt at 173 → 10 yrs at 143", "10 yrs · $10k/$14k (Corp $20k)", "Exempt at 884 → 10 yrs at 864", "No AoS (Individual Sponsor $83,454.80)"]
    },
    {
      ko: ["<strong>건강요건 (PIC) & 메디케어 개시</strong>", "PIC 4005 · PR 승인 후", "PIC 4005 · PR 승인 후", "PIC 4005 · PR 승인 후", "PIC 4005 · <span class='badge-ok'>173 승인 후 메디케어</span>", "PIC 4005 · PR 승인 후", "PIC 4005 · <span class='badge-ok'>884 승인 후 메디케어</span>", "해외 PIC 4005 / 국내 PIC 4007 · 사보험 필수(8501)"],
      en: ["<strong>Health (PIC) & Medicare Start</strong>", "PIC 4005 · Upon PR Grant", "PIC 4005 · Upon PR Grant", "PIC 4005 · Upon PR Grant", "PIC 4005 · <span class='badge-ok'>Medicare on 173 Grant</span>", "PIC 4005 · Upon PR Grant", "PIC 4005 · <span class='badge-ok'>Medicare on 884 Grant</span>", "Offshore PIC 4005 / Onshore PIC 4007 · Private cover (8501)"]
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
  const fs = (QUEUE_DATA && QUEUE_DATA.fee_schedule_fy26_27) ? QUEUE_DATA.fee_schedule_fy26_27 : {};
  const aosCfg = (QUEUE_DATA && QUEUE_DATA.aos_formula_fy26_27) ? QUEUE_DATA.aos_formula_fy26_27 : {};
  const corpBondContrib = aosCfg.corporate_bond_contributory_aud || 20000;
  const corpBondNonContrib = aosCfg.corporate_bond_non_contributory_aud || 10000;
  let vac1 = 0, vac2 = 0, bond = 0, aosYears = 10;

  if (pathway === "143") {
    const f = fs["143"] || { first_base: 5040, first_adult: 1700, second_per_person: 43600, aos_years: 10, aos_bond_1: 10000, aos_bond_2: 14000 };
    vac1 = f.first_base + sec * f.first_adult;
    vac2 = p * f.second_per_person;
    bond = isCorp ? corpBondContrib : (p === 1 ? f.aos_bond_1 : f.aos_bond_2);
    aosYears = f.aos_years;
  } else if (pathway === "173_143") {
    const f1 = fs["173"] || { first_base: 3395, first_adult: 1145, second_per_person: 29130 };
    const f2 = fs["173_to_143"] || { first_base: 440, first_adult: 195, second_per_person: 19420, aos_years: 10, aos_bond_1: 10000, aos_bond_2: 14000 };
    vac1 = (f1.first_base + sec * f1.first_adult) + (f2.first_base + sec * f2.first_adult);
    vac2 = p * (f1.second_per_person + f2.second_per_person);
    bond = isCorp ? corpBondContrib : (p === 1 ? f2.aos_bond_1 : f2.aos_bond_2);
    aosYears = f2.aos_years;
  } else if (pathway === "864") {
    const f = fs["864"] || { first_base: 5040, first_adult: 2515, second_per_person: 43600, aos_years: 10, aos_bond_1: 10000, aos_bond_2: 14000 };
    vac1 = f.first_base + sec * f.first_adult;
    vac2 = p * f.second_per_person;
    bond = isCorp ? corpBondContrib : (p === 1 ? f.aos_bond_1 : f.aos_bond_2);
    aosYears = f.aos_years;
  } else if (pathway === "884_864") {
    const f1 = fs["884"] || { first_base: 4990, first_adult: 2490, second_per_person: 29130 };
    const f2 = fs["884_to_864"] || { first_base: 440, first_adult: 195, second_per_person: 19420, aos_years: 10, aos_bond_1: 10000, aos_bond_2: 14000 };
    vac1 = (f1.first_base + sec * f1.first_adult) + (f2.first_base + sec * f2.first_adult);
    vac2 = p * (f1.second_per_person + f2.second_per_person);
    bond = isCorp ? corpBondContrib : (p === 1 ? f2.aos_bond_1 : f2.aos_bond_2);
    aosYears = f2.aos_years;
  } else if (pathway === "103" || pathway === "804") {
    const f = fs[pathway] || { first_base: 5280, first_adult: 2640, second_per_person: 2065, aos_years: 4, aos_bond_1: 5000, aos_bond_2: 7000 };
    vac1 = f.first_base + sec * f.first_adult;
    vac2 = p * f.second_per_person;
    bond = isCorp ? corpBondNonContrib : (p === 1 ? f.aos_bond_1 : f.aos_bond_2);
    aosYears = f.aos_years;
  } else if (pathway === "870_3") {
    const f = fs["870_3yr"] || { sponsorship: 420, first_base: 1180, second_per_person: 4715 };
    vac1 = f.sponsorship + p * f.first_base;
    vac2 = p * f.second_per_person;
    bond = 0;
    aosYears = 0;
  } else if (pathway === "870_5") {
    const f = fs["870_5yr"] || { sponsorship: 420, first_base: 1180, second_per_person: 10605 };
    vac1 = f.sponsorship + p * f.first_base;
    vac2 = p * f.second_per_person;
    bond = 0;
    aosYears = 0;
  } else if (pathway === "870_10") {
    const f = fs["870_5yr"] || { sponsorship: 420, first_base: 1180, second_per_person: 10605 };
    vac1 = (f.sponsorship + p * f.first_base) * 2;
    vac2 = p * (f.second_per_person * 2);
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
  const existingAssured = Math.max(0, parseInt(document.getElementById("cost-existing-assured")?.value || "0", 10));
  const actualIncome = Math.max(0, parseFloat(document.getElementById("cost-actual-income")?.value || "75000"));
  const ovhcYears = Math.max(0, parseInt(document.getElementById("cost-ovhc-years")?.value || "0", 10));

  const is870 = pathway.startsWith("870");
  const c = computePathwayCost(pathway, parentsCount, isCorp);
  const ovhcTotal = ovhcYears * parentsCount * 2400;
  const grandTotal = c.govTotal + ovhcTotal;

  // E04: AoS Income Formula under Social Security (Assurance of Support) Determination 2018 ss 15-16 & DSS Guide 9.4.3.10:
  // Includes existingAssured adults in the adult count!
  // JSP Base = $22,578 * (numAssurers + parentsCount + existingAssured) + $2,942 * assurerKids
  const JSP_BASE = 22578;
  const FTB_CHILD = 2942;
  let requiredIncome = 0;
  if (is870) {
    requiredIncome = 83455; // $83,454.80 under reg 2.60W / LIN 19/146 (individual sponsor required!)
  } else if (isCorp) {
    requiredIncome = 0; // Corporate Assurer is assessed under DSS 9.4.3.30 financial capacity rules
  } else {
    requiredIncome = JSP_BASE * (numAssurers + parentsCount + existingAssured) + FTB_CHILD * assurerKids;
  }

  const totalAdultAssurees = existingAssured + parentsCount;
  const capExceeded = !is870 && totalAdultAssurees > 2;
  // E05: Subclass 870 cannot be sponsored by a corporation (reg 2.60U requires an individual parent sponsor)
  const corp870Invalid = is870 && isCorp;
  const incomeDelta = actualIncome - requiredIncome;
  const incomePass = !corp870Invalid && !isCorp && actualIncome >= requiredIncome;

  let verdictBadge = "";
  if (corp870Invalid) {
    verdictBadge = `<span class="badge-no">${currentLang === "ko" ? "❌ 부적격 (INELIGIBLE — Subclass 870은 법인 스폰서 불가 · 개인 스폰서 과세소득 $83,454.80 필수, reg 2.60U/2.60W)" : "❌ INELIGIBLE — Corporate Sponsor Not Permitted for Subclass 870 (Individual Sponsor ≥ $83,454.80 Required under reg 2.60U / reg 2.60W)"}</span>`;
  } else if (capExceeded) {
    verdictBadge = `<span class="badge-no">${currentLang === "ko" ? "❌ 부적격 (INELIGIBLE — 피보증 성인 2명 한도 초과, Determination 2018 ss 8–9)" : "❌ INELIGIBLE — Exceeds 2 Adult Assurees Cap (Determination 2018 ss 8–9)"}</span>`;
  } else if (isCorp) {
    // E02: Corporate Assurer is subject to DSS 9.4.3.30 financial capacity review (not unconditional automatic pass)
    verdictBadge = `<span class="badge-warn">${currentLang === "ko" ? "⚖️ 법인 재무심사 대상 (DSS Guide 9.4.3.30: 2년 이상 흑자 영업 + 피보증인당 $5,000 가용자금 + $20k/$10k 본드)" : "⚖️ Subject to Corporate Financial Capacity Review (DSS 9.4.3.30: 2+ yrs profitable trading + $5,000/adult funds + $20k/$10k bond)"}</span>`;
  } else if (incomePass) {
    verdictBadge = `<span class="badge-ok">${currentLang === "ko" ? `✅ 적격 통과 (+${fmtAud(incomeDelta)} 여유)` : `✅ ELIGIBLE (+${fmtAud(incomeDelta)} surplus)`}</span>`;
  } else {
    verdictBadge = `<span class="badge-no">${currentLang === "ko" ? `❌ 소득 부족 (Shortfall ${fmtAud(Math.abs(incomeDelta))} 미달 → 공동 보증 또는 법인 보증 검토)` : `❌ Shortfall of ${fmtAud(Math.abs(incomeDelta))} (Below ${fmtAud(requiredIncome)} threshold)`}</span>`;
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
          <div class="kpi-label">${is870 ? "870 개인 스폰서 법정 최소 소득" : "AoS 보증인 최소 요구 과세소득"}</div>
          <div class="kpi-val">${isCorp && !is870 ? "재무제표 심사 (DSS 9.4.3.30)" : fmtAud(requiredIncome)}</div>
          <div class="kpi-sub">${is870 ? "LIN 19/146 ($83,454.80 · 법인 불가)" : (isCorp ? "2년 흑자 영업 + 성인당 $5k 여유자금 + $20k/$10k 본드" : `$22,578×(${numAssurers}+${parentsCount}+기존${existingAssured}) + $2,942×${assurerKids}`)}</div>
        </div>
        <div class="pv-sim-kpi">
          <div class="kpi-label">총 소요 자금 (사보험 포함 TCO)</div>
          <div class="kpi-val">${fmtAud(grandTotal)}</div>
          <div class="kpi-sub">정부/본드 ${fmtAud(c.govTotal)} + 사보험 ${fmtAud(ovhcTotal)}</div>
        </div>
      </div>
      <div class="pv-inference-card" style="margin-top:12px;">
        <h4>보증인(Assurer / 870 Sponsor) 자격 및 소득 판정: ${verdictBadge}</h4>
        <p>
          ${corp870Invalid
            ? `Subclass 870 임시 부모비자의 스폰서십(Parent Sponsor)은 <strong>Migration Regulations 1994 reg 2.60U에 따라 반드시 자연인(자녀 또는 자녀의 배우자/파트너)이어야 하며, 법인(Corporate) 스폰서는 법적으로 허용되지 않아요</strong>. 개인 주 스폰서(또는 배우자/다른 자녀 1인과 합산 시 주 스폰서 50% 이상)로 직전 회계연도 과세소득 <strong>$83,454.80 이상(LIN 19/146)</strong>을 충족해야 해요.`
            : (capExceeded
                ? `Social Security (Assurance of Support) Determination 2018 <strong>ss 8 &amp; 9 (DSS Guide 9.4.3.10)</strong>에 따라 한 보증인(개인 또는 법인)은 <strong>동시에 최대 성인 2명(2 adult assurees)</strong>까지만 보증할 수 있어요. 이미 ${existingAssured}명을 보증 중이시라면 신규 부모님 ${parentsCount}분을 합쳐 총 ${totalAdultAssurees}명이 되므로 다른 적격 개인(배우자 단독, 형제, 지인) 또는 별도 법인을 보증인으로 지정하셔야 해요.`
                : (isCorp
                    ? `호주 법인(Pty Ltd 등)이 영주 부모비자(103/143/804/864)의 Corporate Assurer로 나서는 경우 개인 과세소득 공식은 적용되지 않으나, <strong>DSS Guide 9.4.3.30</strong>에 따라 ① 최근 2개 회계연도 연속 실질 영업 및 흑자(재무제표·법인 세금신고서), ② 피보증 성인 1인당 $5,000 이상의 가용 여유자금, ③ <strong>$20,000(기여제 10년) 또는 $10,000(일반 4년) CBA 은행보증금</strong> 예치 심사를 통과해야 해요.`
                    : (incomePass
                        ? `입력하신 실제 과세소득(<strong>${fmtAud(actualIncome)}</strong>)이 법정 최소 기준(<strong>${fmtAud(requiredIncome)}</strong>, 기존 피보증 성인 ${existingAssured}명 포함 산정)을 충족해요! Services Australia(DSS Guide 9.4.3.20)는 <strong>최신 회계연도 ATO 소득세 확정통지서(NOA) + 현재 급여명세서(Payslips)</strong>(단, 최신 NOA 미발급 초기에는 직전 2번째 회계연도 NOA 예외 허용)로 이를 확인해요.`
                        : `입력하신 소득(<strong>${fmtAud(actualIncome)}</strong>)이 요구 기준(<strong>${fmtAud(requiredIncome)}</strong>, 기존 피보증 성인 ${existingAssured}명 포함)보다 <strong>${fmtAud(Math.abs(incomeDelta))} 부족</strong>해요. 해결책: ① 배우자·형제·지인을 <strong>공동 보증인(최대 3인 합산)</strong>으로 추가하거나, ② 영주 부모비자의 경우 2년 이상 흑자 운영된 <strong>호주 법인(Corporate Assurer, DSS 9.4.3.30)</strong> 활용을 검토하세요.`)))}
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
          <div class="kpi-label">${is870 ? "870 Individual Sponsor Min Income" : "Min Assurer Assessable Income"}</div>
          <div class="kpi-val">${isCorp && !is870 ? "DSS 9.4.3.30 Financial Review" : fmtAud(requiredIncome)}</div>
          <div class="kpi-sub">${is870 ? "LIN 19/146 ($83,454.80 · Individual Only)" : (isCorp ? "2+ yrs profitable trading + $5k/adult funds + $20k/$10k bond" : `$22,578×(${numAssurers}+${parentsCount}+existing ${existingAssured}) + $2,942×${assurerKids}`)}</div>
        </div>
        <div class="pv-sim-kpi">
          <div class="kpi-label">Grand Total (incl. OVHC)</div>
          <div class="kpi-val">${fmtAud(grandTotal)}</div>
          <div class="kpi-sub">Gov/Bond ${fmtAud(c.govTotal)} + OVHC ${fmtAud(ovhcTotal)}</div>
        </div>
      </div>
      <div class="pv-inference-card" style="margin-top:12px;">
        <h4>Assurer / Sponsor Eligibility &amp; Income Verdict: ${verdictBadge}</h4>
        <p>
          ${corp870Invalid
            ? `Under <strong>Migration Regulations 1994 reg 2.60U and reg 2.60W</strong>, a Subclass 870 Parent Sponsor <strong>must be a natural person (child or child's partner) and CANNOT be a corporation</strong>. An eligible individual sponsor must meet the <strong>$83,454.80 taxable income threshold (LIN 19/146)</strong>.`
            : (capExceeded
                ? `Under <strong>Social Security (Assurance of Support) Determination 2018 ss 8 &amp; 9 (DSS Guide 9.4.3.10)</strong>, an individual or corporate assurer may assure a <strong>maximum of 2 adults concurrently</strong>. With ${existingAssured} existing + ${parentsCount} new = ${totalAdultAssurees} adults, you must nominate another eligible individual or corporation as Assurer.`
                : (isCorp
                    ? `For permanent parent visas, a Corporate Assurer does not use the personal taxable income formula but is assessed under <strong>DSS Guide 9.4.3.30</strong>: it must prove 2+ financial years of active profitable trading in Australia, at least $5,000 in available funds per assured adult, and lodge a flat <strong>$20,000 (10-yr Contributory) or $10,000 (4-yr Parent) CBA Bank Guarantee</strong>.`
                    : (incomePass
                        ? `Your assessable income (<strong>${fmtAud(actualIncome)}</strong>) meets the statutory threshold (<strong>${fmtAud(requiredIncome)}</strong>, including ${existingAssured} existing assured adult[s]). Under <strong>DSS Guide 9.4.3.20</strong>, Services Australia verifies this via your latest ATO Notice of Assessment (or second-most-recent NOA if the latest NOA has not yet issued) plus current payslips.`
                        : `Your income (<strong>${fmtAud(actualIncome)}</strong>) is <strong>${fmtAud(Math.abs(incomeDelta))} below</strong> the required <strong>${fmtAud(requiredIncome)}</strong> (which includes ${existingAssured} existing assured adult[s] under DSS 9.4.3.10). Solutions: ① Add a 2nd or 3rd <strong>Joint Assurer</strong>, or ② Nominate an eligible <strong>Australian Corporation (DSS 9.4.3.30)</strong>.`)))}
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
      title: "1. 누가 재정보증인(Assurer)이 될 수 있나요? (자녀가 아니어도 가능 · Determination ss 8–9, 15–16)",
      body: "<strong>비자 스폰서(자녀)와 재정보증인(Assurer)은 동일인일 필요가 없어요!</strong> 만 18세 이상 호주 시민권자·영주권자·보호특례 NZ 시민권자(호주 통상 거주)라면 친척, 친구, 지인 누구나 보증인이 될 수 있으며, <strong>최대 3인까지 공동 보증(Joint Assurers)</strong>으로 소득을 합산할 수 있어요. 단, 개인·법인 모두 동시에 성인 최대 <strong>2명까지만 피보증(Determination 2018 ss 8 &amp; 9)</strong>할 수 있으며, 기존 피보증 성인이 있는 경우 소득 공식의 피보증 성인 수에 합산(ss 15–16)돼요 [13,15]."
    },
    {
      title: "2. 보증인의 '인정 소득(Assessable Income)' 범위와 2개 시점 입증 규칙 (DSS Guide 9.4.3.20)",
      body: "Services Australia는 원칙적으로 ① <strong>과거 완료 회계연도 입증(최신 ATO NOA — 단, 회계연도 초 최신 NOA 미발급 시 또는 육아휴직·질병 등 일시적 소득 감소 입증 시 직전 회계연도 NOA 허용)</strong>과 ② <strong>현재 회계연도 지속 소득 입증(연속 2장 이상의 급여명세서, 고용주 확인서, 자영업자 회계사 서한/세무자료 등)</strong> 두 시점 모두에서 최소 소득 충족을 요구해요. 인정 소득에는 과세소득(Taxable Income) 외에 비과세 해외소득, 투자 순손실 환원분, 복리후생(Fringe Benefits), 추가 연금 납입분(Reportable Super)이 합산돼요 [15]."
    },
    {
      title: "3. 개인 소득이 부족할 때의 대안: 호주 법인(Corporate) 재정보증과 재무능력 심사 (DSS Guide 9.4.3.30)",
      body: "자녀의 개인 과세소득이 부족한 경우, 호주에 설립·등록된 법인(Pty Ltd 등)이 <strong>Corporate Assurer</strong>로 신청할 수 있어요. 법인 보증인은 개인 과세소득 공식(JSP 기준액 합산)을 적용하지 않으나 <strong>무심사가 아니며</strong>, <strong>DSS Guide 9.4.3.30에 따른 법인 재무능력 심사(최근 2개 회계연도 이상 실질적 흑자 영업 재무제표·법인세 신고서, 피보증 성인 1인당 최소 $5,000 가용자금, 성인 최대 2명 한도 s 9, 대표자 권한 확인)</strong>를 통과하고 <strong>단일 $20,000(기여제 10년) 또는 $10,000(일반 4년) CBA 은행보증금</strong>을 예치해야 해요 [13,15]."
    },
    {
      title: "4. 영주비자 AoS 소득($45k~$67k) vs Subclass 870 스폰서 소득($83,454.80) 비교",
      body: "영주 부모비자의 AoS는 접수 시가 아니라 <strong>2단계 비자 발급 직전(Queue Release)</strong>에 Services Australia에 증명하며 1인 보증+부모 2명(자녀 0명) 기준 <strong>$67,734</strong>예요. 반면 임시 부모비자인 <strong>Subclass 870은 AoS 제도가 전혀 적용되지 않으며(법인 보증 불가)</strong>, 비자 신청 전 스폰서십 단계에서 이민성에 <strong>개인/합산 과세소득 $83,454.80 이상(주 스폰서 본인 최소 50% $41,727.40, LIN 19/146)</strong>을 직전(또는 차직전) 완료 회계연도 ATO NOA로 증명해야 해요 [9,15]."
    }
  ] : [
    {
      title: "1. Who Can Be an Assurer? (Determination 2018 ss 8–9 & 15–16)",
      body: "<strong>The Assurer does not need to be the visa sponsor or a family member.</strong> Any Australian Citizen, PR, or Protected SCV holder aged 18+ usually resident in Australia can act as Assurer, and up to <strong>3 Joint Assurers</strong> can pool their income. Both individual and corporate assurers are capped at <strong>2 adult assurees at any one time (Determination ss 8 &amp; 9)</strong>, and any existing assured adults are added into the income threshold calculation (ss 15–16) [13,15]."
    },
    {
      title: "2. Assessable Income Definition & Dual-Timeframe Proof (DSS Guide 9.4.3.20)",
      body: "Services Australia requires meeting the threshold across <strong>both past FY proof (latest ATO NOA, or preceding FY NOA where the latest NOA is not yet issued or income temporarily dropped due to parental leave/illness with evidence) AND current FY proof (2+ consecutive payslips, employer letter, or accountant/tax evidence for self-employed assurers)</strong>. Assessable income includes taxable income, target foreign income, net investment losses added back, reportable fringe benefits, and reportable super contributions [15]."
    },
    {
      title: "3. Corporate Assurer Financial Capacity Review & $20,000 Bond (DSS Guide 9.4.3.30)",
      body: "If personal income is insufficient, an Australian incorporated entity can apply as a <strong>Corporate Assurer</strong>. While the personal taxable income formula does not apply, it is <strong>NOT an automatic zero-review exemption</strong>: under <strong>DSS Guide 9.4.3.30</strong>, the organisation must pass a <strong>Corporate Financial Capacity Review</strong> (2+ financial years of active profitable trading via financial statements/company tax returns, at least $5,000 available funds per assured adult, max 2 adult assurees under s 9, and director authority verification) and lodge a flat <strong>$20,000 (10-yr Contributory) or $10,000 (4-yr Parent) CBA Bank Guarantee</strong> [13,15]."
    },
    {
      title: "4. Permanent Visa AoS ($45k–$67k at Release) vs Subclass 870 Sponsor Income ($83,454.80 Upfront)",
      body: "Permanent visa AoS is assessed by Services Australia <strong>at Queue Release</strong> ($67,734 for 1 assurer + 2 parents, 0 children). By contrast, <strong>Subclass 870 has NO AoS (corporate assurers cannot sponsor 870)</strong> and requires proving <strong>$83,454.80 taxable income upfront</strong> via ATO NOA (primary sponsor at least 50% = $41,727.40 under LIN 19/146) [9,15]."
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
      ko: ["<strong>취업 권리 (Work Rights)</strong>", "<span class='badge-ok'>✅ 무제한 취업 가능 (BVA/BVB Nil 조건)</span><br/><small>(단, BVC 030은 8101 취업금지)</small>", "<span class='badge-no'>❌ 불가 (방문비자 8101 · 870비자 8103 조건)</span>", "<span class='badge-ok'>✅ 무제한 취업 가능</span>", "<span class='badge-ok'>✅ 무제한 취업 가능</span>"],
      en: ["<strong>Work Rights</strong>", "<span class='badge-ok'>✅ Unrestricted (Nil condition on BVA/BVB)</span><br/><small>(BVC 030 has mandatory 8101 No Work)</small>", "<span class='badge-no'>❌ No Work (Visitor 8101 / 870 Condition 8103)</span>", "<span class='badge-ok'>✅ Unrestricted Work Rights</span>", "<span class='badge-ok'>✅ Unrestricted Work Rights</span>"]
    },
    {
      ko: ["<strong>메디케어 (Medicare)</strong>", "<span class='badge-no'>❌ 전면 배제 (한국 국적자 불가)</span><br/><small>사보험(OVHC) 권장 · RHCA 11개국만 예외</small>", "<span class='badge-no'>❌ 불가 (870은 8501 사보험 필수)</span>", "<span class='badge-ok'>✅ 메디케어 즉시 가입 가능!</span><br/><small>Health Insurance Act 장관 명령</small>", "<span class='badge-ok'>✅ 정식 메디케어 가입</span>"],
      en: ["<strong>Medicare Access</strong>", "<span class='badge-no'>❌ Excluded (Korean citizens ineligible)</span><br/><small>OVHC recommended · Only 11 RHCA nations exempt</small>", "<span class='badge-no'>❌ Ineligible (870 requires 8501 insurance)</span>", "<span class='badge-ok'>✅ Immediate Medicare Enrolment!</span><br/><small>Ministerial Order under Health Insurance Act</small>", "<span class='badge-ok'>✅ Full Medicare Access</span>"]
    },
    {
      ko: ["<strong>해외 출입국 (Travel)</strong>", "<span class='badge-warn'>⚠️ 출국 전 반드시 BVB(020) 승인 필수!</span><br/><small>BVA 상태로 출국 시 비자 즉시 소멸</small>", "<span class='badge-ok'>✅ 자유 (방문비자/870 유효기간 내)</span>", "<span class='badge-ok'>✅ 2년간 자유 복수 출입국</span>", "<span class='badge-ok'>✅ 5년간 자유 (이후 RRV 갱신)</span>"],
      en: ["<strong>Overseas Travel</strong>", "<span class='badge-warn'>⚠️ Must obtain BVB (020) BEFORE departure!</span><br/><small>Leaving on BVA ceases it permanently</small>", "<span class='badge-ok'>✅ Multiple entry within 600/870 validity</span>", "<span class='badge-ok'>✅ Unlimited travel for 2 years</span>", "<span class='badge-ok'>✅ 5-yr travel facility (then RRV)</span>"]
    },
    {
      ko: ["<strong>정부 노인요양 보조 (My Aged Care)</strong>", "<span class='badge-no'>❌ 배제 (연 $100k+ 전액 자비 부담)</span>", "<span class='badge-no'>❌ 배제</span>", "<span class='badge-no'>❌ 제한 (영주권 취득 후 정식 수급)</span>", "<span class='badge-ok'>✅ ACAT 평가 후 정부 보조 수급 가능</span>"],
      en: ["<strong>Subsidised Aged Care</strong>", "<span class='badge-no'>❌ Excluded ($100k+/yr private fees)</span>", "<span class='badge-no'>❌ Excluded</span>", "<span class='badge-no'>❌ Restricted until PR grant</span>", "<span class='badge-ok'>✅ Eligible after ACAT assessment</span>"]
    },
    {
      ko: ["<strong>센터링크 수당 & 호주 노령연금(Age Pension)</strong>", "<span class='badge-no'>❌ 불가</span>", "<span class='badge-no'>❌ 불가</span>", "<span class='badge-no'>❌ 불가</span>", "<span class='badge-warn'>⏳ 수당 4년(NARWP)/AoS 10년 제한</span><br/><small>노령연금 10년 거주 (DSS 10.22 한-호 협정 합산!)</small>"],
      en: ["<strong>Centrelink & Age Pension</strong>", "<span class='badge-no'>❌ Ineligible</span>", "<span class='badge-no'>❌ Ineligible</span>", "<span class='badge-no'>❌ Ineligible</span>", "<span class='badge-warn'>⏳ 4-yr NARWP / 10-yr AoS recovery</span><br/><small>10-yr Age Pension (DSS 10.22 Korea-AU totalisation!)</small>"]
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
    title_ko: "3. PIC 4005/4007 건강요건, 단계별 신체검사 재검증 & MOC '$86,000 산정 기간(3년/5년/10년)'",
    body_ko: "① <strong>영주·임시 부모비자(103/143/173/804/864/884)는 건강요건 면제(Health Waiver)가 없는 PIC 4005</strong>가 적용돼요. 반면 <strong>Subclass 870(cl 870.228(2)–(3), PAM3 VM-6327 §3.6.8)은 신청 당시 호주 밖이면 PIC 4005, 호주 안이면 PIC 4007</strong>이 적용돼요. ② 신체검사 유효기간은 통상 12개월이므로 1단계 큐 심사 시점과 수년 뒤 2단계 발급 직전에 재검증이 요구되나, <strong>173→143 전환 신청자는 cl 143.225–143.226에 따라 장관이 별도 요청한 경우에만 추가 신검</strong>을 받아요. ③ MOC 상당 비용 기준(<strong>$86,000</strong>) 산정 기간은 영주비자 일반 <strong>5년</strong>, <strong>만 75세 이상 신청자 3년</strong>, 영구적·지속적 질환은 <strong>최대 10년(기대수명 내)</strong>, 임시비자는 <strong>체류 예정 기간</strong>으로 계산돼요 [3–9].",
    title_en: "3. PIC 4005 vs PIC 4007 (Subclass 870), Medical Re-Verification & MOC $86,000 Cost Windows (3/5/10 Yrs)",
    body_en: "① <strong>Permanent/provisional parent visas (103/143/173/804/864/884) apply PIC 4005 (no health waiver)</strong>, whereas <strong>Subclass 870 (cl 870.228(2)–(3), PAM3 VM-6327 §3.6.8) applies PIC 4005 if outside Australia at application or PIC 4007 if in Australia at application</strong>. ② Because medical clearances typically last 12 months, health checks are generally required around Stage 1 queue assessment and re-verified before Stage 2 grant as requested; however, <strong>173→143 step-up applicants (cl 143.225–143.226) only undergo a further medical exam if requested by the Minister</strong>. ③ The MOC <strong>$86,000 Significant Cost Threshold</strong> is assessed over <strong>5 years</strong> standard for permanent/provisional visas, <strong>3 years for applicants aged 75+</strong>, <strong>up to 10 years (within life expectancy)</strong> for permanent/ongoing conditions, and the <strong>intended stay period</strong> for temporary visas [3–9]."
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
    title_ko: "6. 호주 노령연금(Age Pension) 10년 거주 요건과 '한-호 사회보장협정(DSS Guide 10.22)' 합산",
    body_ko: "내국 법상 호주 노령연금(Age Pension)은 원칙적으로 <strong>10년 이상의 적격 호주 영주 거주 기간(최소 5년 연속 포함)</strong>이 필요해요. 그러나 <strong>한-호 사회보장협정(DSS Social Security Guide 10.22 — Agreement with Korea)</strong>에 따라 <strong>한국 국민연금(NPS) 가입 기간을 호주 노령연금 자격 기간으로 합산(Totalisation)</strong>할 수 있어요! (호주 내 거주 신청 시 협정 합산 가능하며, 해외 거주 신청 시에는 통상 호주 근로연령 거주 12개월[6개월 연속 포함] 요건 및 AoS 기간·소득/자산 심사 적용) [15].",
    title_en: "6. 10-Year Age Pension Residence Rule & The Australia–Korea Social Security Agreement (DSS Guide 10.22)",
    body_en: "Domestic Age Pension qualification normally requires <strong>10 years of qualifying Australian residence (including 5 years continuous)</strong>. However, under the <strong>Australia–Korea Social Security Agreement (DSS Social Security Guide 10.22)</strong>, periods of coverage under the <strong>Korean National Pension Service (NPS) can be totalised (added)</strong> to help meet the 10-year qualifying residence requirement (distinguishing onshore resident claims from offshore claims which generally require 12 months Australian working-life residence including 6 months continuous, subject to means testing and active AoS rules) [15]."
  },
  {
    cat: "family",
    title_ko: "7. Subclass 870과 영주 부모비자 간의 '비대칭 잠금 규칙(Asymmetric Lockout Bar)'",
    body_ko: "<strong>절대 금지 순서</strong>: Subclass 870 비자를 신청 중이거나 소지 중인 상태(또는 마지막 비자가 870이고 출국 전)에서는 103·143·173·804·864·884 영주/임시 부모비자 접수가 법정 무효(Sch 1 Item 1124/1130)예요. <strong>합법 황금 순서(PAM3 VM-6327 §3.6.6)</strong>: 반대로 <strong>143이나 103을 먼저 접수해 Queue Date 대기열에 올려놓은 뒤, 대기기간 동안 870 비자(또는 600 장기 방문비자 3~5년, Condition 8558 18개월 중 12개월 체류)를 신청하는 것은 완전히 합법</strong>이에요 [9,18].",
    title_en: "7. The Asymmetric Subclass 870 Lockout Bar vs The Legal 'Golden Sequence'",
    body_en: "<strong>Prohibited Sequence</strong>: Having a pending 870 application, holding an 870 visa, or having last held an 870 without departing Australia strictly bars lodging any 103/143/173/804/864/884 application (Sch 1 Item 1124/1130). <strong>Permitted Golden Sequence (PAM3 VM-6327 §3.6.6)</strong>: Lodging Subclass 143 or 103 <strong>FIRST</strong> to enter the queue and subsequently applying for a Subclass 870 (or 3–5 yr Visitor Visa 600) while waiting IS legally permitted [9,18]."
  },
  {
    cat: "family",
    title_ko: "8. 대기 중 주신청자 사망 시 승계 제한(F2025L00317) & 치매 대비 위임장(EPOA / Form 956)",
    body_ko: "① <strong>주신청자 사망 시</strong>: 143/103은 동반 배우자가 주신청자 지위를 승계할 수 있으나, <strong>804/864/884는 2024.12.17 개정법(F2025L00317)에 따라 동반 배우자가 최초 접수 당시 만 67세 이상이거나 법정 대체 방문비자(substituted Subclass 600) 예외에 해당했던 경우에만 승계 가능</strong>해요(PAM3 VM-3058 §3.9.1). ② <strong>치매 및 의사능력 상실 대비</strong>: 주별 <strong>영속적 위임장(Enduring Power of Attorney, EPOA)</strong>은 재산·법률 대리에 필수적이며, 이민성 대리인 지정(<strong>Form 956/956A</strong>) 및 Services Australia 대리인(Nominee) 등록 절차를 함께 준비해야 해요.",
    title_en: "8. Death of Primary Applicant (F2025L00317 / Substituted 600) & EPOA / Form 956 Preparedness",
    body_en: "① <strong>Death of Primary Applicant</strong>: On 143/103, the surviving spouse can succeed as primary applicant; however, on <strong>804/864/884 lodged on/after 17 Dec 2024 (F2025L00317), the surviving spouse can ONLY succeed if they were aged 67+ or held a statutory substituted Subclass 600 visa at initial lodgement (PAM3 VM-3058 §3.9.1)</strong>. ② <strong>Dementia Preparedness</strong>: Execute a state <strong>Enduring Power of Attorney (EPOA)</strong> for financial/personal guardianship alongside Home Affairs (<strong>Form 956/956A</strong>) and Services Australia nominee authorisations."
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
  { cat: "queue", cat_ko: "대기열·PVC·접수", cat_en: "Queue & PVC", title_ko: "4. ImmiAccount (103/143/804/864 온라인 접수 & BVB 신청)", title_en: "4. ImmiAccount Portal (Online Lodgement & BVB)", desc_ko: "2026.04.22(LIN 26/005)부터 의무화된 103·143·804·864 온라인 접수 및 온쇼어 대기자 BVB 신청 포털이에요.", desc_en: "Mandatory online lodgement portal for 103, 143, 804, 864 (LIN 26/005 since 22 Apr 2026) and BVB applications.", url: "https://online.immi.gov.au/lusc/login" },
  { cat: "queue", cat_ko: "대기열·PVC·접수", cat_en: "Queue & PVC", title_ko: "5. 가족균형테스트 (Balance of Family Test — Reg 1.05)", title_en: "5. Balance of Family Test Official Rules", desc_ko: "자녀 수(1~10명)에 따른 호주 시민권·영주권 자녀 최소 비율(reg 1.05(2C)(a)) 및 해외 국가별 분포 기준(reg 1.05(2C)(b))이에요.", desc_en: "Official mathematical table and rules for the Balance of Family Test under reg 1.05(2C)(a)–(b).", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/parent-103/balance-of-family-test" },
  { cat: "queue", cat_ko: "대기열·PVC·접수", cat_en: "Queue & PVC", title_ko: "6. 연간 이민 프로그램 계획 수준 (Migration Program Planning Levels)", title_en: "6. Migration Program Planning Levels", desc_ko: "연방정부의 회계연도별 부모비자 배정 쿼터(8,500석 / FY26–27 계획 7,060석) 공시 페이지예요.", desc_en: "Annual Migration Program ceiling for the Parent visa stream.", url: "https://immi.homeaffairs.gov.au/what-we-do/migration-program-planning-levels" },
  { cat: "subclasses", cat_ko: "7대 서브클래스", cat_en: "7 Subclasses", title_ko: "7. Subclass 143 — 기여제 부모 영주비자 공식 안내", title_en: "7. Subclass 143 — Contributory Parent (Permanent)", desc_ko: "오프쇼어/일반 기여제 영주비자 요건, 1·2차 신청비($43,600) 및 ImmiAccount 접수 안내예요.", desc_en: "Official Subclass 143 eligibility, fees, and online lodgement steps.", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/contributory-parent-143" },
  { cat: "subclasses", cat_ko: "7대 서브클래스", cat_en: "7 Subclasses", title_ko: "8. Subclass 173 — 기여제 부모 임시비자 (2년 · 메디케어 부여)", title_en: "8. Subclass 173 — Contributory Parent (Temporary)", desc_ko: "2차 기여금을 분할($29,130 + $19,420)하고 승인 즉시 메디케어를 받는 2단계 임시비자예요.", desc_en: "Stage 1 temporary contributory visa unlocking Medicare and deferring AoS for 2 years.", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/contributory-parent-temporary-173" },
  { cat: "subclasses", cat_ko: "7대 서브클래스", cat_en: "7 Subclasses", title_ko: "9. Subclass 864 — 기여제 고령부모 영주비자 (Onshore 67+)", title_en: "9. Subclass 864 — Contributory Aged Parent (Residence)", desc_ko: "만 67세 이상(또는 substituted 600) 온쇼어 신청자에게 BVA와 Direction 117 우선심사를 부여하는 기여제 영주비자예요.", desc_en: "Onshore aged (67+ or substituted 600) contributory PR visa granting a BVA and Direction 117 priority.", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/contributory-aged-parent-864" },
  { cat: "subclasses", cat_ko: "7대 서브클래스", cat_en: "7 Subclasses", title_ko: "10. Subclass 884 — 기여제 고령부모 임시비자 (Onshore 67+)", title_en: "10. Subclass 884 — Contributory Aged Parent (Temporary)", desc_ko: "온쇼어 고령 2단계 분할 경로의 1단계 임시비자(종이 우편 접수 · 승인 시 메디케어 부여)예요.", desc_en: "Onshore aged temporary contributory visa (paper lodgement, unlocks Medicare upon grant).", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/contributory-aged-parent-temporary-884" },
  { cat: "subclasses", cat_ko: "7대 서브클래스", cat_en: "7 Subclasses", title_ko: "11. Subclass 103 — 일반 부모 영주비자 (Parent Visa)", title_en: "11. Subclass 103 — Parent (Migrant) Visa", desc_ko: "낮은 2차 신청비($2,065)와 4년 AoS가 적용되나 신규 약 42년(기존 대기열 역산 ~31년+)이 소요되는 일반 부모비자예요.", desc_en: "Non-contributory permanent parent visa (~42-year new intake estimate, $2,065 2nd VAC, 4-year AoS).", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/parent-103" },
  { cat: "subclasses", cat_ko: "7대 서브클래스", cat_en: "7 Subclasses", title_ko: "12. Subclass 804 — 일반 고령부모 영주비자 (Aged Parent 67+)", title_en: "12. Subclass 804 — Aged Parent (Residence) Visa", desc_ko: "만 67세 이상 온쇼어 접수 시 BVA가 부여되나 장기간 대기 중 메디케어/요양원 보조가 없는 비자예요.", desc_en: "Onshore aged non-contributory visa granting BVA (~42-year new intake estimate, no Medicare during wait).", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/aged-parent-804" },
  { cat: "subclasses", cat_ko: "7대 서브클래스", cat_en: "7 Subclasses", title_ko: "13. Subclass 870 — 스폰서 임시 부모비자 (3년/5년, 최대 10년)", title_en: "13. Subclass 870 — Sponsored Parent (Temporary) Visa", desc_ko: "가족균형테스트 없이 스폰서십($420) + 부모 1인당 3년($5,895: 1차 $1,180+2차 $4,715) 또는 5년($11,785: 1차 $1,180+2차 $10,605) 체류 가능한 임시 부모비자예요.", desc_en: "3-yr ($5,895/parent) or 5-yr ($11,785/parent) + $420 sponsorship temporary parent visa without BoF Test (bars lodging PR while held).", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/sponsored-parent-temporary-870" },
  { cat: "bridging", cat_ko: "브리징·VEVO·방문", cat_en: "BVA/BVB & VEVO", title_ko: "14. VEVO (비자 상태 · 취업 조건 · BVB 여행 만료일 실시간 조회)", title_en: "14. VEVO — Visa Entitlement Verification Online", desc_ko: "현재 소지한 BVA/BVB의 조건(8101/8503 유무)과 BVB 재입국 만료일을 실시간 확인하는 공식 포털이에요.", desc_en: "Verify current visa conditions, work entitlements, and BVB travel facility expiry dates.", url: "https://immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/check-conditions-online" },
  { cat: "bridging", cat_ko: "브리징·VEVO·방문", cat_en: "BVA/BVB & VEVO", title_ko: "15. Bridging Visa B (Subclass 020 — 해외 출국 전 필수 신청)", title_en: "15. Bridging Visa B (BVB — Subclass 020)", desc_ko: "온쇼어 804/864/884 대기자가 한국 방문 등 해외 출국 전 반드시 승인받아야 하는 여행 허가 비자예요.", desc_en: "Essential travel bridging visa required before any overseas trip while waiting on a BVA.", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/bridging-visa-b-020" },
  { cat: "bridging", cat_ko: "브리징·VEVO·방문", cat_en: "BVA/BVB & VEVO", title_ko: "16. Visitor Visa (Subclass 600 — 부모비자 대기자 3~5년 장기 방문비자)", title_en: "16. Visitor Visa (Subclass 600 — Long-Validity Parent Stream)", desc_ko: "오프쇼어 103/143 대기 부모님께 최대 3~5년 유효기간(18개월 중 12개월 체류, 8558 조건)을 부여하는 방문비자예요.", desc_en: "Visitor visa offering up to 3–5 year validity (12m stay per 18m) for queued offshore parents.", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/visitor-600" },
  { cat: "welfare", cat_ko: "AoS·메디케어·요양·연금", cat_en: "AoS, Medicare & Care", title_ko: "17. Services Australia — 재정보증(Assurance of Support, AoS) 공식 포털", title_en: "17. Services Australia — Assurance of Support (AoS)", desc_ko: "2단계 Queue Release 시점에 진행하는 AoS 신청 절차, 10년/4년 기간 및 CBA 은행보증 안내예요.", desc_en: "Official Services Australia portal for Assurance of Support applications and CBA bank guarantees.", url: "https://www.servicesaustralia.gov.au/assurance-support" },
  { cat: "welfare", cat_ko: "AoS·메디케어·요양·연금", cat_en: "AoS, Medicare & Care", title_ko: "18. Services Australia — AoS 보증인(Assurer) 자격 및 법인 보증 요건", title_en: "18. Services Australia — Who Can Give an Assurance of Support", desc_ko: "개인 보증인(최대 3인 합산, 성인 2명 피보증 한도 ss 8–9) 및 법인 보증인($20,000 본드 및 재무능력 심사 DSS 9.4.3.30) 안내예요.", desc_en: "Eligibility rules for individual, joint (up to 3), and corporate assurers (DSS 9.4.3.30 financial capacity review).", url: "https://www.servicesaustralia.gov.au/who-can-give-assurance-support" },
  { cat: "welfare", cat_ko: "AoS·메디케어·요양·연금", cat_en: "AoS, Medicare & Care", title_ko: "19. Services Australia — 메디케어 가입 자격 (173/884 및 영주권자)", title_en: "19. Services Australia — Enrolling in Medicare", desc_ko: "173/884 임시비자 승인자 및 영주권 승인자의 메디케어 온라인 등록 절차 안내예요.", desc_en: "Official Medicare enrolment rules for permanent residents and Subclass 173/884 holders.", url: "https://www.servicesaustralia.gov.au/enrolling-medicare" },
  { cat: "welfare", cat_ko: "AoS·메디케어·요양·연금", cat_en: "AoS, Medicare & Care", title_ko: "20. Services Australia — 상호의료협정(RHCA 11개국) 공식 안내", title_en: "20. Services Australia — Reciprocal Health Care Agreements (RHCA)", desc_ko: "영국·뉴질랜드·이탈리아 등 11개 RHCA 체결국 명단(한국 미포함) 확인 페이지예요.", desc_en: "List of the 11 RHCA countries eligible for reciprocal Medicare (excludes South Korea).", url: "https://www.servicesaustralia.gov.au/reciprocal-health-care-agreements" },
  { cat: "welfare", cat_ko: "AoS·메디케어·요양·연금", cat_en: "AoS, Medicare & Care", title_ko: "21. DSS Guide 10.22 — 한-호 사회보장협정 (국민연금-노령연금 합산)", title_en: "21. DSS Social Security Guide 10.22 — Agreement with Korea", desc_ko: "한국 국민연금(NPS) 가입 기간을 호주 노령연금(Age Pension) 10년 적격 거주 기간으로 합산(Totalisation)하는 공식 지침이에요.", desc_en: "Official DSS guide (10.22) on totalising Korean National Pension coverage for Australian Age Pension.", url: "https://guides.dss.gov.au/social-security-guide/10/22" },
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
      ko: ["<strong>매주 월·목 (Weekly)</strong>", "이민성 Parent Visas Queue Release 페이지 (#contentBox)", "insane-search HTML 파서 (\u200b 제거 + 4단계 내용/규칙 검증)", "기준일(31 Aug 2026), 7×4 단계별 컷오프, 신규 예상 대기연수(18/42년) 및 큐 이동속도(Velocity) 자동 갱신"],
      en: ["<strong>Twice Weekly</strong>", "Home Affairs Parent Visas Queue Release Page (#contentBox)", "insane-search HTML Parser (\u200b strip + 4-stage rule check)", "Auto-updates as_at_date, 7x4 milestone cutoffs, 18/42-yr estimates & rolling 12-month velocity"]
    },
    {
      ko: ["<strong>매월 1일 & 매년 7월 1일</strong>", "이민성 내부 가격 API (GetPriceList) & 7대 서브클래스 페이지", "POST JSON API + PageSchemaHiddenField 파서", "103/143/173/804/864/884/870 1차 신청비, 2차 기여금($43,600 등), LIN 26/005 접수 규칙, 870 소득 기준($83,454.80)"],
      en: ["<strong>Monthly & 1 July</strong>", "DHA Pricing API (GetPriceList) & 7 Subclass Pages", "POST JSON API + PageSchemaHiddenField", "1st & 2nd VAC across all 15 fee tiers, LIN 26/005 lodgement rules & 870 sponsor income ($83,454.80)"]
    },
    {
      ko: ["<strong>매년 3.20 · 7.1 · 9.20</strong>", "DSS Social Security Guide 9.4.3 / 10.22 & Services Australia AoS", "insane-search 웹/JSON 스냅샷 대조", "JobSeeker 기준액($22,578), FTB-A 자녀 가산액($2,942), AoS 최소 과세소득($45,156/$67,734) 및 본드($10k/$14k/$20k)"],
      en: ["<strong>20 Mar · 1 Jul · 20 Sep</strong>", "DSS Guide 9.4.3 / 10.22 & Services Australia AoS / RHCA Pages", "insane-search Snapshot & Formula Parser", "JobSeeker base ($22,578), FTB-A child add-on ($2,942), AoS income thresholds ($45,156/$67,734) & bond amounts"]
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
  { num: 3, text: "Department of Home Affairs, 'Contributory Parent visa (subclass 143)' & Migration (Arrangements for Parent, Contributory Parent, Aged Parent, and Contributory Aged Parent Visa Applications) Instrument 2026 — LIN 26/005 ss 12–13 (ImmiAccount online lodgement mandate effective 22 April 2026; Form 47PA paper exception only via formal Departmental written invitation; $43,600 2nd VAC; 10-year AoS; PIC 4005; cl 143.225–143.226 medical rule for 173→143)." },
  { num: 4, text: "Department of Home Affairs, 'Contributory Parent (Temporary) visa (subclass 173)' (Paper lodgement to Perth PVC under LIN 26/005, $29,130 2nd VAC + $19,420 step-up to 143, Medicare access upon grant)." },
  { num: 5, text: "Department of Home Affairs, 'Contributory Aged Parent visa (subclass 864)' & F2025L00317 (Age 67+ or statutory substituted Subclass 600 Schedule 1 validity requirement effective 17 December 2024; LIN 26/005 ImmiAccount online lodgement; onshore BVA; $43,600 2nd VAC)." },
  { num: 6, text: "Department of Home Affairs, 'Contributory Aged Parent (Temporary) visa (subclass 884)' (Age 67+ or substituted Subclass 600, paper lodgement under LIN 26/005, $29,130 2nd VAC, Medicare access upon grant)." },
  { num: 7, text: "Department of Home Affairs, 'Parent visa (subclass 103)' (LIN 26/005 ImmiAccount online lodgement, $2,065 2nd VAC, 4-year AoS, ~42-year new intake estimate vs ~31+ year queued backlog estimate)." },
  { num: 8, text: "Department of Home Affairs, 'Aged Parent visa (subclass 804)' (Age 67+ or substituted Subclass 600 Schedule 1 validity requirement, LIN 26/005 ImmiAccount online lodgement, onshore BVA, ~42-year new intake estimate)." },
  { num: 9, text: "Department of Home Affairs, 'Sponsored Parent (Temporary) visa (subclass 870)' & Migration Regulations 1994 reg 2.60U, 2.60W, 2.87CE, 1.15K, cl 870.223, 870.227, 870.228 & LIN 19/146 ($83,454.80 sponsor taxable income; $420 sponsorship + $1,180 1st VAC + $4,715 [3yr] / $10,605 [5yr] 2nd VAC; Migration Act s 64(2) & reg 2.12D 28-day AU->AU / 70-day other deemed receipt 2nd VAC deadline; PIC 4005 offshore / PIC 4007 onshore)." },
  { num: 10, text: "Migration Regulations 1994 reg 1.05 — Balance of Family Test: reg 1.05(2C)(a) (at least half of total children eligible in Australia) and reg 1.05(2C)(b) (more eligible children in Australia than children resident in any single overseas country)." },
  { num: 11, text: "Department of Home Affairs, 'Migration Program planning levels' (FY2025–26 ceiling 8,500 places; FY2026–27 planning ceiling 7,060 places)." },
  { num: 12, text: "Migration (Granting of Parent and Other Family Visas in the 2025–2026 Financial Year) Instrument 2026 — LIN 26/042 (F2026L00724, s 85 cap: 6,800 Contributory incl. 1,125 Aged + 1,700 Parent = 8,500 total) & Home Affairs FOI Disclosures DA 26/01/00017, DA 25/07/00301, FA 24/11/00862 (158,468 total on-hand backlog; 804 annual grants = 37)." },
  { num: 13, text: "Services Australia, 'Assurance of Support' & 'Who can give an Assurance of Support' & Determination 2018 ss 8–9, 15–16 & DSS Guide 9.4.3.20 / 9.4.3.30 (10-year AoS & $10,000/$14,000 bond for 143/864; 4-year AoS & $5,000/$7,000 bond for 103/804; $20,000/$10,000 Corporate Assurer bond + corporate financial capacity review; max 2 adult assurees per assurer)." },
  { num: 14, text: "Services Australia, 'Enrolling in Medicare' & 'Reciprocal Health Care Agreements' & Health Insurance Act 1973 Ministerial Order (Parent visa applicants on Bridging Visas are excluded from Interim Medicare unless from 11 RHCA countries; Subclass 173/884 holders qualify for Medicare)." },
  { num: 15, text: "Social Security (Assurance of Support) Determination 2018 (F2024C00296) ss 7–18 & DSS Social Security Guide 9.4.3 / 10.22 (FY2026–27 JSP base $22,578 + FTB-A child $2,942 formula: $45,156 for 1 parent, $67,734 for 2 parents; DSS Guide 10.22 Agreement with Korea pension totalisation)." },
  { num: 16, text: "Ministerial Direction No. 103 — Order of Consideration: Certain Family Visas (s 6(2)(c) upfront assessment for aged parent visas; s 7(2)(b) Stage 1 lodgement date deeming for 173→143 and 884→864 step-up applications; compassionate and compelling queue/release prioritisation requests)." },
  { num: 17, text: "Ministerial Direction No. 117 — Priority Processing for Onshore Aged Parent Applications (effective 25 July 2026, s 8(2)(a) priority for onshore 864/884)." },
  { num: 18, text: "PAM3 (LEGENDcom Procedural Instructions, verified 2026-10-21): VM-3058 [01/07/2026] (§3.2.6 aged parent & substituted 600; §3.9.1 post-17 Dec 2024 surviving spouse succession bar), VM-6327 [06/02/2026] (§3.3.7.2 60d from PTA grant; §3.3.8 10-yr cap excl. COVID-19 extension; §3.6.6 permitted 143/103-then-870 sequence; §3.6.7 cl 870.227 public health debt; §3.6.8 cl 870.228 PIC 4005/4007; §3.7.2.1 2nd VAC non-payment refusal risk), VM-6276 [03/04/2026] (§§3.4–3.4.3 870 sponsor NOA & preceding FY exception; no mid-application sponsor swap), VM-6647 [snapshot 2026-10-02] (§§3.4.5.1–3.4.5.2 s 64(2) & reg 2.12D 28d/70d deemed receipt)." }
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

function isSourceVerifiedLive(s) {
  if (!s) return false;
  const httpOk = s.http_code === 200;
  const statusOk = s.status === "live" || s.status === "verified_ok";
  const fetchBad = ["failed", "error"].includes(String(s.fetchStatus || s.fetch_status || "").toLowerCase());
  const contentBad = ["failed", "error", "mismatch"].includes(String(s.contentCheckStatus || s.content_check_status || "").toLowerCase());
  const ruleBad = ["failed", "error", "mismatch"].includes(String(s.ruleMatchStatus || s.rule_match_status || "").toLowerCase());
  const reviewBad = ["pending_review", "rejected", "failed", "error"].includes(String(s.reviewStatus || s.review_status || "").toLowerCase());
  return Boolean(httpOk && statusOk && !fetchBad && !contentBad && !ruleBad && !reviewBad);
}

function openSourceMonitorModal() {
  const modal = document.getElementById("detail-modal");
  const body = document.getElementById("modal-body-content");
  if (!modal || !body) return;
  const sources = (POLLING_DATA && Array.isArray(POLLING_DATA.sources)) ? POLLING_DATA.sources : [];
  const internalRefs = (POLLING_DATA && Array.isArray(POLLING_DATA.internal_policy_references)) ? POLLING_DATA.internal_policy_references : [];
  const verifiedCount = sources.filter(isSourceVerifiedLive).length;
  const allVerified = sources.length > 0 && verifiedCount === sources.length;
  const issueCount = sources.length - verifiedCount;

  const bannerBg = allVerified ? "#E7F3EC" : "#FEF2F2";
  const bannerColor = allVerified ? "#1F5138" : "#991B1B";
  const statusSummaryKo = allVerified
    ? `공개 1차 출처 <strong>${verifiedCount}/${sources.length} Live Verified</strong>`
    : `공개 1차 출처 <strong>${verifiedCount}/${sources.length} Verified (${issueCount}건 오류/검토 필요)</strong>`;
  const statusSummaryEn = allVerified
    ? `Public Primary Sources <strong>${verifiedCount}/${sources.length} Live Verified</strong>`
    : `Public Primary Sources <strong>${verifiedCount}/${sources.length} Verified (${issueCount} Issue/Pending)</strong>`;

  let html = `
    <div style="margin-bottom:16px;padding:12px 16px;background:${bannerBg};border-radius:8px;color:${bannerColor};font-size:13.5px;font-weight:600;">
      ${currentLang === "ko"
        ? `최종 폴링 시각: <strong>${POLLING_DATA.last_polled_at || "2026-10-20"}</strong> · ${statusSummaryKo} + 내부 심사지침(PAM3/Direction) <strong>${internalRefs.length}건</strong> 검증 완료`
        : `Last Polled: <strong>${POLLING_DATA.last_polled_at || "2026-10-20"}</strong> · ${statusSummaryEn} + <strong>${internalRefs.length}</strong> Internal Policy References`}
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
          ${sources.map(s => {
            const ok = isSourceVerifiedLive(s);
            const codeVal = (s.http_code !== undefined && s.http_code !== null) ? s.http_code : 0;
            const stateLabel = ok
              ? `HTTP ${codeVal} · LIVE`
              : `HTTP ${codeVal} · ${String(s.fetchStatus || s.fetch_status || s.reviewStatus || s.review_status || s.status || "FAILED").toUpperCase()}`;
            const badgeCls = ok ? "badge-ok" : "badge-no";
            return `
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
                <span class="${badgeCls}">${stateLabel}</span><br/>
                <code style="font-size:11px;">${(s.sha256 || "").slice(0, 14)}…</code>
              </td>
            </tr>
          `}).join("")}
        </tbody>
      </table>
    </div>
  `;
  body.innerHTML = html;
  modal.classList.add("open");
}

function runSubclass870Simulator() {
  const out = document.getElementById("s870-output-content");
  if (!out) return;
  const status = document.getElementById("s870-sponsor-status")?.value || "citizen";
  const rel = document.getElementById("s870-relationship")?.value || "child";
  const sponsorInc = Math.max(0, parseFloat(document.getElementById("s870-sponsor-income")?.value || "55000"));
  const partnerInc = Math.max(0, parseFloat(document.getElementById("s870-partner-income")?.value || "35000"));
  const household = document.getElementById("s870-household")?.value || "none";
  const prPlan = document.getElementById("s870-pr-plan")?.value || "pr_first";
  const durRaw = document.getElementById("s870-duration")?.value || "5yr_2";
  const prevYears = Math.max(0, parseFloat(document.getElementById("s870-prev-years")?.value || "0"));

  const THRESHOLD_870 = 83454.80;
  const MIN_SPONSOR_50PCT = 41727.40;
  const combinedInc = sponsorInc + partnerInc;

  const statusOk = status === "citizen" || status === "pr_4yr_plus";
  const householdOk = household === "none";
  const soloIncomeOk = sponsorInc >= THRESHOLD_870;
  const combinedIncomeOk = combinedInc >= THRESHOLD_870 && sponsorInc >= MIN_SPONSOR_50PCT;
  const failed50PctTrap = !soloIncomeOk && combinedInc >= THRESHOLD_870 && sponsorInc < MIN_SPONSOR_50PCT;
  const incomeOk = soloIncomeOk || combinedIncomeOk;

  const is3Yr = durRaw.startsWith("3yr");
  const numParents = durRaw.endsWith("_2") ? 2 : 1;
  const reqYears = is3Yr ? 3 : 5;
  const remainingCapYears = Math.max(0, 10 - prevYears);
  const effectiveGrantYears = Math.min(reqYears, remainingCapYears);

  // Unified FY2026-27 Subclass 870 fee schedule from QUEUE_DATA.fee_schedule_fy26_27
  const feeSched = (QUEUE_DATA && QUEUE_DATA.fee_schedule_fy26_27) || {};
  const s870Sched = (is3Yr ? feeSched["870_3yr"] : feeSched["870_5yr"]) || {};
  const sponsorFee = s870Sched.sponsorship_fee !== undefined ? s870Sched.sponsorship_fee : 420;
  const vac1PerParent = s870Sched.vac1 !== undefined ? s870Sched.vac1 : 1180;
  const vac2PerParent = s870Sched.vac2 !== undefined ? s870Sched.vac2 : (is3Yr ? 4715 : 10605);
  const totalGovFee = sponsorFee + numParents * (vac1PerParent + vac2PerParent);

  let verdictHtml = "";
  if (!statusOk) {
    verdictHtml = currentLang === "ko"
      ? `<span class="badge-no">❌ 스폰서 체류 요건 미충족 (영주권자는 최근 4년 연속 통상 거주 및 불법체류/BVE 무이력 필수 — reg 2.60U(1)(e)–(f))</span>`
      : `<span class="badge-no">❌ Sponsor Residence Ineligible (PR/ENZC requires 4 yrs continuous usual residence & no unlawful/BVE history — reg 2.60U(1)(e)–(f))</span>`;
  } else if (!householdOk) {
    verdictHtml = currentLang === "ko"
      ? `<span class="badge-no">❌ 가구당 1건 스폰서십 한도 초과 (한 부부 가구에서 친가·외가 동시 870 스폰서 불가, 최대 부모 2명 — reg 2.60U(1)(h)–(i))</span>`
      : `<span class="badge-no">❌ Household Cap Exceeded (Only 1 active 870 sponsorship & max 2 parents per household — reg 2.60U(1)(h)–(i))</span>`;
  } else if (failed50PctTrap) {
    verdictHtml = currentLang === "ko"
      ? `<span class="badge-no">⚠️ '주 스폰서 50%($41,727.40) 최소 소득 룰' 미달! (합산 소득은 충족하나 주 스폰서 본인 소득이 $41,727.40 미만 → 배우자[사위/며느리]를 주 스폰서로 신규 신청하면 통과! 단, 진행 중 스폰서 교체는 불가 PAM3 VM-6276 §3.4.3)</span>`
      : `<span class="badge-no">⚠️ Failed 50% Primary Sponsor Rule ($41,727.40)! Lodge with your spouse/partner (son/daughter-in-law) as primary sponsor (mid-application sponsor swap not allowed — PAM3 VM-6276 §3.4.3)!</span>`;
  } else if (!incomeOk) {
    verdictHtml = currentLang === "ko"
      ? `<span class="badge-no">❌ 과세소득 부족 ($83,454.80 대비 ${fmtAud(THRESHOLD_870 - combinedInc)} 미달 — ATO NOA 기준, 회계연도 초 최신 NOA 미발급 시 차직전 연도 NOA 허용 PAM3 VM-6276 §3.4)</span>`
      : `<span class="badge-no">❌ Taxable Income Shortfall (${fmtAud(THRESHOLD_870 - combinedInc)} below $83,454.80 on ATO NOA; preceding FY NOA accepted early in new FY before latest NOA issues — PAM3 VM-6276 §3.4)</span>`;
  } else if (remainingCapYears <= 0) {
    verdictHtml = currentLang === "ko"
      ? `<span class="badge-no">❌ 평생 누적 10년 상한 도달 (Item 1239(3)(f) — 추가 870 비자 신청 불가 · 단, 코로나19 18개월 자동연장 기간은 10년 상한에서 제외 PAM3 VM-6327 §3.3.8)</span>`
      : `<span class="badge-no">❌ 10-Year Cumulative Cap Reached (Item 1239(3)(f) — No further 870 allowed; note automatic 18-month COVID-19 extension periods are excluded from the 10-yr cap under PAM3 VM-6327 §3.3.8)</span>`;
  } else {
    verdictHtml = currentLang === "ko"
      ? `<span class="badge-ok">✅ Parent Sponsor &amp; Subclass 870 적격 통과 (예상 부여 기간: ${effectiveGrantYears}년)</span>`
      : `<span class="badge-ok">✅ Eligible for Parent Sponsorship &amp; Subclass 870 (Est. Grant: ${effectiveGrantYears} yrs)</span>`;
  }

  const prWarningHtml = prPlan === "870_first" ? (currentLang === "ko" ? `
    <div class="pv-inference-card" style="border-left-color:#DC2626;background:#FEF2F2;margin-top:10px;">
      <h4 style="color:#991B1B;">🚨 [치명적 잠금 경고] 870을 먼저 받으면 체류 중 영주 부모비자(143/864/103/804) 접수가 법정 무효 처리됩니다!</h4>
      <p style="color:#7F1D1D;">
        Migration Regulations 1994 Schedule 1 (Items 1124, 1124A, 1130, 1130A)에 의해 <strong>870 비자를 신청 중이거나, 현재 소지 중이거나, 마지막 비자가 870이고 아직 호주에서 출국하지 않은 경우 모든 영주·임시 부모비자 접수가 원천 차단</strong>돼요. 영주권도 함께 계획하신다면 <strong>반드시 143(또는 103)을 먼저 접수해 Queue Date 대기열에 올려놓은 다음 870을 신청(PAM3 VM-6327 §3.6.6 합법 황금 순서)</strong>하셔야 해요!
      </p>
    </div>
  ` : `
    <div class="pv-inference-card" style="border-left-color:#DC2626;background:#FEF2F2;margin-top:10px;">
      <h4 style="color:#991B1B;">🚨 [CRITICAL LOCKOUT TRAP] Lodging 870 First Bars All Permanent Parent Visas!</h4>
      <p style="color:#7F1D1D;">
        Under Schedule 1 (Items 1124, 1124A, 1130, 1130A), <strong>having a pending 870 application, holding an 870 visa, or having last held an 870 visa without departing Australia strictly bars lodging 103, 143, 173, 804, 864, or 884</strong>. Always lodge <strong>Subclass 143 or 103 FIRST</strong>, and apply for Subclass 870 second (permitted under PAM3 VM-6327 §3.6.6)!
      </p>
    </div>
  `) : "";

  if (currentLang === "ko") {
    out.innerHTML = `
      <div class="pv-sim-kpi-grid">
        <div class="pv-sim-kpi">
          <div class="kpi-label">합산 과세소득 vs 법정 기준</div>
          <div class="kpi-val" style="color:${incomeOk ? "#065F46" : "#991B1B"};">${fmtAud(combinedInc)}</div>
          <div class="kpi-sub">기준 $83,454.80 (주 스폰서 최소 $41,727.40)</div>
        </div>
        <div class="pv-sim-kpi">
          <div class="kpi-label">주 스폰서 본인 50% 룰 (reg 2.60W(2))</div>
          <div class="kpi-val" style="font-size:17px;color:${sponsorInc >= MIN_SPONSOR_50PCT ? "#065F46" : "#991B1B"};">${sponsorInc >= MIN_SPONSOR_50PCT ? "✅ 충족" : "❌ 미달 (사위/며느리로 신규 신청 권장)"}</div>
          <div class="kpi-sub">주 스폰서 본인 ${fmtAud(sponsorInc)} (${((sponsorInc / THRESHOLD_870) * 100).toFixed(1)}%)</div>
        </div>
        <div class="pv-sim-kpi">
          <div class="kpi-label">스폰서십 + 비자 총 정부 수수료 (FY26–27)</div>
          <div class="kpi-val">${fmtAud(totalGovFee)}</div>
          <div class="kpi-sub">스폰서 ${fmtAud(sponsorFee)} + 1차 ${fmtAud(numParents * vac1PerParent)} + 2차 ${fmtAud(numParents * vac2PerParent)}</div>
        </div>
        <div class="pv-sim-kpi">
          <div class="kpi-label">2차 VAC 납부 기한 (s 64(2) · reg 2.12D)</div>
          <div class="kpi-val" style="font-size:16px;">호주→호주 주소 28일 / 기타 70일</div>
          <div class="kpi-sub">⚠️ 간주수령일 기산 · 미납 시 거절 가능(PAM3 VM-6327 §3.7.2.1)</div>
        </div>
      </div>
      <div class="pv-inference-card" style="margin-top:12px;">
        <h4>Subclass 870 종합 판정: ${verdictHtml}</h4>
        <p>
          ${rel === "inlaw"
            ? "선택하신 바와 같이 <strong>자녀의 배우자/파트너(사위 또는 며느리)도 단독으로 적격 Parent Sponsor가 될 수 있어요(reg 2.60U(1)(c))</strong>. 특히 친자녀의 소득이 $41,727.40 미만이거나 영주권 취득 후 4년이 안 된 경우, 시민권자/4년 이상 거주 영주권자인 사위·며느리가 주 스폰서로 신청하면 적법하게 통과돼요(단, 심사 진행 중 스폰서 교체는 불가하며 신규 스폰서십 신청 필요 — PAM3 VM-6276 §3.4.3)."
            : "1단계로 스폰서십(Form 1501, $420)을 먼저 승인받은 후 <strong>6개월 이내(국내 신청 허가 PTA 승인일로부터 60일 이내 — PAM3 VM-6327 §3.3.7.2)</strong>에 2단계 870 비자(Form 1500)를 접수해야 해요. 과세소득 증빙은 <strong>국세청 소득세 확정통지서(ATO Notice of Assessment) 원본이 필수</strong>이며(회계연도 초 최신 NOA 발급 전에는 차직전 연도 NOA 허용 — PAM3 VM-6276 §§3.4–3.4.3), 급여명세서나 회계사 서한만으로 대체할 수 없어요."}
        </p>
      </div>
      ${prWarningHtml}
    `;
  } else {
    out.innerHTML = `
      <div class="pv-sim-kpi-grid">
        <div class="pv-sim-kpi">
          <div class="kpi-label">Combined Income vs Statutory Threshold</div>
          <div class="kpi-val" style="color:${incomeOk ? "#065F46" : "#991B1B"};">${fmtAud(combinedInc)}</div>
          <div class="kpi-sub">Threshold $83,454.80 (Primary min $41,727.40)</div>
        </div>
        <div class="pv-sim-kpi">
          <div class="kpi-label">Primary Sponsor 50% Rule (reg 2.60W(2))</div>
          <div class="kpi-val" style="font-size:17px;color:${sponsorInc >= MIN_SPONSOR_50PCT ? "#065F46" : "#991B1B"};">${sponsorInc >= MIN_SPONSOR_50PCT ? "✅ Passed" : "❌ Failed (Lodge with Partner/In-law)"}</div>
          <div class="kpi-sub">Primary Sponsor: ${fmtAud(sponsorInc)} (${((sponsorInc / THRESHOLD_870) * 100).toFixed(1)}%)</div>
        </div>
        <div class="pv-sim-kpi">
          <div class="kpi-label">Total Gov Fees (Sponsorship + 1st/2nd VAC)</div>
          <div class="kpi-val">${fmtAud(totalGovFee)}</div>
          <div class="kpi-sub">Sponsor ${fmtAud(sponsorFee)} + 1st ${fmtAud(numParents * vac1PerParent)} + 2nd ${fmtAud(numParents * vac2PerParent)}</div>
        </div>
        <div class="pv-sim-kpi">
          <div class="kpi-label">2nd VAC Deadline (s 64(2) · reg 2.12D)</div>
          <div class="kpi-val" style="font-size:16px;">28d AU→AU / 70d Other</div>
          <div class="kpi-sub">⚠️ From deemed receipt · May be refused if unpaid (VM-6327 §3.7.2.1)</div>
        </div>
      </div>
      <div class="pv-inference-card" style="margin-top:12px;">
        <h4>Subclass 870 Verdict: ${verdictHtml}</h4>
        <p>
          ${rel === "inlaw"
            ? "Under <strong>reg 2.60U(1)(c)</strong>, the <strong>spouse or de facto partner of the parent's child (son-in-law or daughter-in-law) can be the approved Parent Sponsor</strong>. This solves the 50% rule ($41,727.40) or 4-year PR residence requirement (note: mid-application sponsor swapping is not permitted—a new sponsorship application is required under PAM3 VM-6276 §3.4.3)."
            : "Parent Sponsorship (Form 1501, $420) must be approved <strong>before</strong> lodging the 870 visa (Form 1500) within 6 months (or within 60 days from Permission to Apply [PTA] grant date under PAM3 VM-6327 §3.3.7.2). An <strong>ATO Notice of Assessment (NOA)</strong> is required (early in a new FY before the latest NOA issues, the preceding FY NOA may be accepted under PAM3 VM-6276 §§3.4–3.4.3)."}
        </p>
      </div>
      ${prWarningHtml}
    `;
  }
}

function renderSubclass870DeepCards() {
  const box = document.getElementById("s870-deep-cards");
  if (!box) return;
  const cards = currentLang === "ko" ? [
    {
      title: "1. 순차적 2단계 필수 절차: 스폰서십 승인 후 6개월(PTA 승인일 기준 60일) 내 비자 접수",
      body: "Schedule 1 Item 1239(3)(b) 및 cl 870.211에 따라 <strong>반드시 Parent Sponsor 승인(Form 1501, $420)이 먼저 난 뒤에야</strong> 870 비자(Form 1500)를 접수할 수 있어요(동시 접수 시 비자 무효! 단, 동일 부모의 2차 870 갱신 시에만 예외). 스폰서십 승인 후 <strong>6개월 이내(국내 신청 허가 PTA가 승인된 경우 PTA 승인일로부터 60일 이내 — PAM3 VM-6327 §3.3.7.2)</strong>에 비자를 접수해야 해요 [9,18]."
    },
    {
      title: "2. 스폰서 소득($83,454.80) ATO NOA 입증 · 회계연도 초 특례 & 50%($41,727.40) 규칙 (PAM3 VM-6276 §§3.4–3.4.3)",
      body: "과세소득 <strong>$83,454.80(LIN 19/146)</strong>은 <strong>국세청 ATO Notice of Assessment(NOA)</strong>로 증명하며 급여명세서/회계사 서한으로 대체할 수 없어요(단, <strong>회계연도 초 최신 NOA 발급 전에는 차직전 완료 회계연도 NOA가 인정됨 — PAM3 VM-6276 §3.4</strong>). 배우자 또는 다른 자녀 1명과 합산할 때는 <strong>주 스폰서 본인이 최소 50%($41,727.40) 이상</strong>을 벌었어야 하며, 심사 도중 스폰서를 교체할 수 없으므로 처음부터 적격 배우자(사위/며느리)를 주 스폰서로 신청해야 해요(§3.4.3)."
    },
    {
      title: "3. 영주권자 스폰서의 '최근 4년 통상 거주 & 불법체류/BVE 무이력' 요건",
      body: "호주 시민권자 자녀는 거주기간 제한이 없지만, <strong>호주 영주권자(PR) 또는 적격 NZ 시민권자(ENZC)는 스폰서십 신청 직전 최소 4년 이상 호주에 통상 거주</strong>했어야 하며, 최근 4년 동안 단 하루라도 불법체류(unlawful)나 BVA/BVB/BVC 이외의 브리징 비자(예: BVE 050)를 소지한 이력이 있으면 부적격 처리돼요(reg 2.60U(1)(e)–(f))."
    },
    {
      title: "4. 가구(Household)당 단 1건 & 최대 부모 2명 초청 한도",
      body: "reg 2.60U(1)(h)–(i)에 따라 <strong>한 가구(부부 합산)당 동시에 단 1건의 활성 Parent Sponsorship만 허용되며, 최대 부모 2명까지만 초청</strong>할 수 있어요. 즉, 남편과 아내가 각각 시부모님과 친정 부모님을 동시에 870 비자로 초청하는 것은 법적으로 불가능해요(한쪽은 600 장기 방문비자 또는 143/864 활용 필요)."
    },
    {
      title: "5. 2차 신청비($4,715 / $10,605) 간주수령일 28일/70일 기한(s 64(2) · reg 2.12D) & 10년 상한(COVID 연장 제외)",
      body: "① 2차 비자신청비(<strong>3년 $4,715 / 5년 $10,605</strong>, 1차 $1,180 별도)는 서면 청구 통지의 <strong>간주수령일(deemed receipt)로부터 호주 내 발송→호주 내 수신 주소는 28일, 기타 발송·수신 주소 조합은 70일 이내</strong>에 납부해야 하며(Migration Act s 64(2), reg 2.12D, PAM3 VM-6647 §§3.4.5.1–3.4.5.2), 미납 시 비자가 거절될 수 있어요(PAM3 VM-6327 §3.7.2.1). ② 연속 870 재신청 시 <strong>최소 90일 연속 해외 체류</strong>(cl 870.223, PTA 승인 시 예외)가 필요하며, 평생 누적 <strong>10년 상한 산정 시 코로나19 18개월 자동연장 기간은 제외</strong>돼요(PAM3 VM-6327 §3.3.8)."
    },
    {
      title: "6. 공공 의료부채 비자 요건(cl 870.227 · reg 1.15K) & 스폰서 독립 법정책임(reg 2.87CE) · PIC 4005/4007",
      body: "① 비자 승인 요건인 <strong>cl 870.227(PAM3 VM-6327 §3.6.7)</strong>에 따라 미납 공공 의료·노인요양 부채(<strong>reg 1.15K</strong>)가 없거나 적절한 분할 상환 약정을 체결해야 해요(cl 870.225는 비자 조건 준수 규정). ② 특히 <strong>스폰서의 법정 변제 의무(reg 2.87CE)는 비자 신청자의 상환 약정 체결로 소멸하지 않는 독립 채무</strong>예요. ③ 건강요건(cl 870.228)은 신청 시 해외 체류 중이면 <strong>PIC 4005</strong>, 호주 내 체류 중이면 <strong>PIC 4007</strong>이 적용돼요."
    }
  ] : [
    {
      title: "1. Mandatory Two-Step Sequence: 6 Months from Sponsorship Approval (or 60 Days from PTA Grant)",
      body: "Under Schedule 1 Item 1239(3)(b) and cl 870.211, <strong>Parent Sponsorship (Form 1501, $420) must be approved before lodging the Subclass 870 visa (Form 1500)</strong> (except when renewing an existing 870 for the same parent). The visa must be lodged within <strong>6 months</strong> of sponsorship approval (or within <strong>60 days from Permission to Apply [PTA] grant date</strong> under PAM3 VM-6327 §3.3.7.2) [9,18]."
    },
    {
      title: "2. $83,454.80 ATO NOA Rule, Preceding FY Exception & No Mid-Application Sponsor Swap (PAM3 VM-6276 §§3.4–3.4.3)",
      body: "Taxable income of <strong>$83,454.80 (LIN 19/146)</strong> must be proven via an <strong>ATO Notice of Assessment (NOA)</strong>—payslips or accountant letters cannot substitute, though <strong>early in a new FY before the latest NOA issues, the preceding FY NOA may be accepted (§3.4)</strong>. The primary sponsor must personally earn at least <strong>50% ($41,727.40)</strong>, and mid-application sponsor swapping is not permitted—a new sponsorship application is required (§3.4.3)."
    },
    {
      title: "3. 4-Year Usual Residence & Compliance Rule for PR / ENZC Sponsors",
      body: "While Australian citizens have no prior residence wait, <strong>Australian PRs and Eligible NZ Citizens must have been usually resident in Australia for at least 4 years</strong> immediately before lodging sponsorship, with zero unlawful days and no Bridging Visas other than BVA, BVB, or BVC during those 4 years (reg 2.60U(1)(e)–(f))."
    },
    {
      title: "4. Strictly 1 Sponsorship & Max 2 Parents Per Household",
      body: "Under reg 2.60U(1)(h)–(i), <strong>only one active Parent Sponsorship is permitted per household at a time, covering at most 2 parents</strong>. A couple cannot simultaneously sponsor both sets of parents (paternal and maternal) on Subclass 870 visas."
    },
    {
      title: "5. 28/70-Day Deemed Receipt 2nd VAC Deadline (s 64(2) · reg 2.12D) & 10-Yr Cap (Excl. COVID-19 Extension)",
      body: "① The 2nd VAC (<strong>$4,715 [3yr] or $10,605 [5yr]</strong>, plus $1,180 1st VAC) is due within <strong>28 calendar days (if sent from a place in Australia to an address in Australia) or 70 calendar days (any other sender/recipient address combination) from deemed receipt</strong> of the written notice (Migration Act s 64(2), reg 2.12D, PAM3 VM-6647 §§3.4.5.1–3.4.5.2), and if unpaid within time, the visa may be refused (PAM3 VM-6327 §3.7.2.1). ② A <strong>90-day offshore gap</strong> applies between 870 visas (cl 870.223) unless granted PTA, and the <strong>10-year lifetime cap excludes automatic 18-month COVID-19 extensions</strong> (PAM3 VM-6327 §3.3.8)."
    },
    {
      title: "6. Public Health Debt Grant Criterion (cl 870.227 · reg 1.15K), Sponsor Obligation (reg 2.87CE) & PIC 4005/4007",
      body: "① Under <strong>cl 870.227 (PAM3 VM-6327 §3.6.7)</strong>, the applicant must have no outstanding public health debt (as defined in <strong>reg 1.15K</strong>) or have entered into appropriate arrangements to pay it (cl 870.225 is visa condition compliance). ② The <strong>sponsor's independent statutory obligation under reg 2.87CE</strong> is not extinguished by the applicant's payment arrangement. ③ Under <strong>cl 870.228(2)–(3)</strong>, <strong>PIC 4005</strong> applies if outside Australia at application and <strong>PIC 4007</strong> applies if in Australia at application."
    }
  ];
  box.innerHTML = cards.map(c => `
    <div class="pv-inference-card">
      <h4>${c.title}</h4>
      <p>${c.body}</p>
    </div>
  `).join("");
}

function updateDiagnosticSummaryPreview() {
  const pre = document.getElementById("diagnostic-summary-preview");
  const emailBtn = document.getElementById("btn-prefill-email");
  if (!pre) return;

  const sub = document.getElementById("sim-subclass")?.value || "143";
  const yr = document.getElementById("sim-year")?.value || "2024";
  const mo = document.getElementById("sim-month")?.value || "4";
  const curAge = document.getElementById("sim-age")?.value || "68";
  const totalKids = document.getElementById("wiz-total-children")?.value || "2";
  const auKids = document.getElementById("wiz-au-children")?.value || "1";
  const costPathway = document.getElementById("cost-pathway")?.value || "143";
  const costParents = document.getElementById("cost-parents")?.value || "2";
  const costIncome = document.getElementById("cost-actual-income")?.value || "75000";
  const s870SponsorInc = document.getElementById("s870-sponsor-income")?.value || "55000";
  const s870PartnerInc = document.getElementById("s870-partner-income")?.value || "35000";

  const summaryText = currentLang === "ko"
    ? `[법무법인 박앤코 (Park & Co Lawyers) — 호주 부모초청 비자 상담용 진단 요약]\n` +
      `• 시뮬레이션 기준일: 2026-10-20 (이민성 Queue Release 기준일: 2026-08-31)\n` +
      `• 1. 대기열 시뮬레이션: Subclass ${sub} | 접수/큐 기준: ${yr}년 ${mo}월 | 주신청자 현재 연세: 만 ${curAge}세\n` +
      `• 2. 가족균형테스트(Reg 1.05): 전체 자녀 ${totalKids}명 중 호주 영주권·시민권 자녀 ${auKids}명\n` +
      `• 3. 총비용 & 재정보증(AoS): 경로 ${costPathway} (${costParents}인) | 보증인 합산 과세소득: AUD $${Number(costIncome).toLocaleString()}\n` +
      `• 4. Subclass 870 스폰서 진단: 주 스폰서 소득 AUD $${Number(s870SponsorInc).toLocaleString()} + 합산 소득 AUD $${Number(s870PartnerInc).toLocaleString()} (기준 $83,454.80 / 50% 룰 $41,727.40)\n` +
      `• 공식 상담 문의: enquiry@parkcolawyers.com | https://parklawyers.com.au/links/?lang=ko`
    : `[Park & Co Lawyers — Australian Parent Visa Diagnostic Summary]\n` +
      `• Generated: 2026-10-20 (Home Affairs Queue Release Baseline: 31 August 2026)\n` +
      `• 1. Queue Simulation: Subclass ${sub} | Lodgement/Queue: ${yr}-${mo} | Primary Applicant Age: ${curAge}\n` +
      `• 2. Balance of Family (Reg 1.05): ${auKids} of ${totalKids} children settled in Australia\n` +
      `• 3. TCO & AoS Check: Pathway ${costPathway} (${costParents} parent[s]) | Assurer Income: AUD $${Number(costIncome).toLocaleString()}\n` +
      `• 4. Subclass 870 Sponsor Check: Primary AUD $${Number(s870SponsorInc).toLocaleString()} + Partner AUD $${Number(s870PartnerInc).toLocaleString()} ($83,454.80 threshold / $41,727.40 50% rule)\n` +
      `• Official Contact: enquiry@parkcolawyers.com | https://parklawyers.com.au/links/`;

  pre.textContent = summaryText;
  if (emailBtn) {
    const subj = encodeURIComponent(currentLang === "ko" ? `[박앤코 부모비자 상담문의] Subclass ${sub} / 870 진단 결과` : `[Park & Co Parent Visa Enquiry] Subclass ${sub} / 870 Diagnostic Summary`);
    const body = encodeURIComponent(summaryText + "\n\n[추가 문의사항 / Additional Questions]:\n");
    emailBtn.href = `mailto:enquiry@parkcolawyers.com?subject=${subj}&body=${body}`;
  }
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
  runSubclass870Simulator();
  renderSubclass870DeepCards();
  renderSurvivalMatrixTable();
  renderSurvivalCards();
  renderOfficialLinksGrid();
  renderPollerScheduleTable();
  renderFootnotes();
  updateDiagnosticSummaryPreview();
}

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage("ko");

  document.getElementById("lang-toggle-ko")?.addEventListener("click", () => applyLanguage("ko"));
  document.getElementById("lang-toggle-en")?.addEventListener("click", () => applyLanguage("en"));

  ["sim-subclass", "sim-stage", "sim-year", "sim-month", "sim-age"].forEach(id => {
    document.getElementById(id)?.addEventListener("change", () => { runQueueSimulator(); updateDiagnosticSummaryPreview(); });
    document.getElementById(id)?.addEventListener("input", () => { runQueueSimulator(); updateDiagnosticSummaryPreview(); });
  });

  ["wiz-main-age", "wiz-spouse-age", "wiz-location", "wiz-visa-cond", "wiz-total-children", "wiz-au-children", "wiz-max-overseas-country", "wiz-budget"].forEach(id => {
    document.getElementById(id)?.addEventListener("change", () => { runPathwayWizard(); updateDiagnosticSummaryPreview(); });
  });

  ["cost-pathway", "cost-parents", "cost-assurers", "cost-assurer-kids", "cost-existing-assured", "cost-actual-income", "cost-ovhc-years"].forEach(id => {
    document.getElementById(id)?.addEventListener("change", () => { runCostAosCalculator(); updateDiagnosticSummaryPreview(); });
    document.getElementById(id)?.addEventListener("input", () => { runCostAosCalculator(); updateDiagnosticSummaryPreview(); });
  });

  ["s870-sponsor-status", "s870-relationship", "s870-sponsor-income", "s870-partner-income", "s870-household", "s870-pr-plan", "s870-duration", "s870-prev-years"].forEach(id => {
    document.getElementById(id)?.addEventListener("change", () => { runSubclass870Simulator(); updateDiagnosticSummaryPreview(); });
    document.getElementById(id)?.addEventListener("input", () => { runSubclass870Simulator(); updateDiagnosticSummaryPreview(); });
  });

  document.getElementById("btn-copy-summary")?.addEventListener("click", () => {
    const txt = document.getElementById("diagnostic-summary-preview")?.textContent || "";
    if (navigator.clipboard && txt) {
      navigator.clipboard.writeText(txt);
      const btn = document.getElementById("btn-copy-summary");
      if (btn) {
        const orig = btn.textContent;
        btn.textContent = currentLang === "ko" ? "✅ 복사 완료!" : "✅ Copied!";
        setTimeout(() => { btn.textContent = orig; }, 1800);
      }
    }
  });

  document.getElementById("btn-print-summary")?.addEventListener("click", () => {
    window.print();
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
