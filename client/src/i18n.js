import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { convertToNepaliDigits } from './utils/numberUtils';


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ne',
    debug: false,
    interpolation: {
      escapeValue: false,
      format: (value, format, lng) => {
        if (format === 'number') {
          return lng === 'ne' ? convertToNepaliDigits(value) : value;
        }
        return value;
      }
    },
    resources: {
      en: {
  translation: {
    set_monthly_budget: "Set Monthly Budget",
    select_month: "Select Month",
    please_select_month: "Please select a month.",
    add_category: "Add Category",
    enter_category_name: "Enter category name",
    add: "Add",
    cancel: "Cancel",
    amount: "Amount",
    saving: "Saving...",
    save_budget: "Save Budget",
    save_success: "Budgets saved successfully!",
    username: "username",
    account_settings: "Account Settings",
    view_budget_plan: "View Budget Plan",
    export_data: "Export Data",
    logout: "Logout",
    save_error: "Failed to save budgets.",
    category_exists_error: "Category already exists or something went wrong.",
    login_hello: "Hello!",
    login_prompt: "Sign in into your account",
    email: "Email",
    password: "Password",
    forgot_password: "Forgot Password",
    sign_in: "SIGN IN",
    no_account: "Don’t have an account?",
    sign_up: "Sign Up",
    login_success: "Login successful!",
    login_failed: "Login failed",
    network_error: "Network error",
    signup_title: "Get Started",
    signup_subtext: "by creating your account.",
    username: "Username",
    email: "Email",
    password: "Password",
    sign_up: "SIGN UP",
    have_account: "Already have an account?",
    sign_in: "Sign In",
    signup_success: "Registration successful!",
    signup_failed: "Registration failed",
    network_error: "Network error",
    nav_home: "Home",
    nav_documents: "Documents",
    nav_budget: "Budget",
    nav_profile: "Profile",
    loading: "Loading...",
    no_data_for_month: "No data available for {{month}}.",
    view_budget_overview: "View Budget Overview",
    budget_overview_subtext: "See how you're tracking your monthly budgets",
    spent: "Spent",
    remaining: "Remaining",
    total_spent: "Total Spent",
    budget_remaining: "Budget Remaining",
    exceeded: "Exceeded",
    receipt_details: "Receipt Details",
    merchantName: "Merchant Name",
    address: "Address",
    billDate: "Bill Date",
    billNumber: "Bill Number",
    totalAmount: "Total Amount",
    items: "Items",
    item_name: "Item name",
    qty: "Qty",
    rate: "Rate",
    amount: "Amount",
    add_item: "Add Item",
    confirm_and_save: "Confirm & Save",
    loading_receipt: "Processing receipt... please wait",
    navbar_greeting: "Hi!",
    navbar_greeting_name: "Hi {{name}}!",
    view_budget_overview: "View Budget Overview",
    track_monthly_budget: "See how you're tracking your monthly budgets",

    months: {
      jan: "January", feb: "February", mar: "March", apr: "April",
      may: "May", jun: "June", jul: "July", aug: "August",
      sep: "September", oct: "October", nov: "November", dec: "December"
    }
  }
},
ne: {
  translation: {
    set_monthly_budget: "मासिक बजेट सेट गर्नुहोस्",
    select_month: "महिना छान्नुहोस्",
    please_select_month: "कृपया महिना छान्नुहोस्।",
    add_category: "कोटि थप्नुहोस्",
    enter_category_name: "कोटिको नाम लेख्नुहोस्",
    add: "थप्नुहोस्",
    cancel: "रद्द गर्नुहोस्",
    amount: "रकम",
    saving: "सेभ हुँदैछ...",
    save_budget: "बजेट सेभ गर्नुहोस्",
    save_success: "बजेट सफलतापूर्वक सेभ भयो!",
    save_error: "बजेट सेभ गर्न असफल भयो।",
    username: "प्रयोगकर्ता नाम",
    account_settings: "खाता सेटिङ",
    view_budget_plan: "बजेट योजना हेर्नुहोस्",
    export_data: "डेटा निर्यात गर्नुहोस्",
    logout: "लगआउट गर्नुहोस्",
    login_hello: "नमस्कार!",
    login_prompt: "आफ्नो खातामा लगइन गर्नुहोस्",
    email: "इमेल",
    password: "पासवर्ड",
    forgot_password: "पासवर्ड बिर्सनुभयो?",
    sign_in: "लगइन गर्नुहोस्",
    no_account: "खाता छैन?",
    sign_up: "दर्ता गर्नुहोस्",
    login_success: "लगइन सफल भयो!",
    login_failed: "लगइन असफल भयो",
    network_error: "नेटवर्क समस्या",
    category_exists_error: "कोटि पहिल्यै छ वा केही समस्या आयो।",
    signup_title: "सुरु गर्नुहोस्",
    signup_subtext: "आफ्नो खाता सिर्जना गरेर।",
    username: "प्रयोगकर्ता नाम",
    email: "इमेल",
    password: "पासवर्ड",
    sign_up: "दर्ता गर्नुहोस्",
    have_account: "पहिले नै खाता छ?",
    sign_in: "लगइन गर्नुहोस्",
    signup_success: "दर्ता सफल भयो!",
    signup_failed: "दर्ता असफल भयो",
    network_error: "नेटवर्क समस्या",
    nav_home: "गृहपृष्ठ",
    nav_documents: "कागजातहरू",
    nav_budget: "बजेट",
    nav_profile: "प्रोफाइल",
    loading: "लोड हुँदैछ...",
    no_data_for_month: "{{month}} को लागि डेटा उपलब्ध छैन।",
    view_budget_overview: "बजेटको विस्तृत जानकारी हेर्नुहोस्",
    budget_overview_subtext: "तपाईंको मासिक बजेट ट्र्याक कसरी भइरहेको छ हेर्नुहोस्",
    spent: "खर्च",
    remaining: "बाँकी",
    total_spent: "कुल खर्च",
    budget_remaining: "बजेट बाँकी",
    exceeded: "नाघिएको",
    receipt_details: "रसिद विवरण",
    merchantName: "व्यवसायको नाम",
    address: "ठेगाना",
    billDate: "बिल मिति",
    billNumber: "बिल नम्बर",
    totalAmount: "कुल रकम",
    items: "वस्तुहरू",
    item_name: "वस्तुको नाम",
    qty: "परिमाण",
    rate: "दर",
    amount: "रकम",
    add_item: "वस्तु थप्नुहोस्",
    confirm_and_save: "पुष्टि गर्नुहोस् र सुरक्षित गर्नुहोस्",
    loading_receipt: "रसिद प्रक्रिया हुँदैछ... कृपया पर्खनुहोस्",
    navbar_greeting: "नमस्ते!",
    navbar_greeting_name: "नमस्ते {{name}}!",
    view_budget_overview: "बजेटको स्थिति हेर्नुहोस्",
    track_monthly_budget: "तपाईंको मासिक बजेटको प्रगति हेर्नुहोस्",
    months: {
      jan: "जनवरी", feb: "फेब्रुअरी", mar: "मार्च", apr: "अप्रिल",
      may: "मे", jun: "जुन", jul: "जुलाई", aug: "अगस्ट",
      sep: "सेप्टेम्बर", oct: "अक्टोबर", nov: "नोभेम्बर", dec: "डिसेम्बर"
    }
  }
}

     
    }
  });

export default i18n;
