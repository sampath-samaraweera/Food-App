import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 14UoWLMrwMRYrL4YXsaAtt5Gej_mVVhyWsGxk0Plw3DbHnFQA07Fz7zYLy71Shlg1Cuk5ffUnWD8k2hyaTbtndmlIVK03WrNCaj_av8_ZJG8AmN_2oddITYwHs2iZXYx'
    }
});