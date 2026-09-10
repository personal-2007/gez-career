import { apiFetch } from './api';

export const companyService = {
  getCompanies: () => apiFetch('/companies'),
  getCompanyById: (id) => apiFetch(`/companies/${id}`)
};
