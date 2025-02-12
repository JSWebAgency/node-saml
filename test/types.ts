import { SamlConfig, Profile } from "../src/types";

import type * as express from "express";

// a certificate which is re-used by several tests
export const TEST_CERT =
  "MIIEFzCCAv+gAwIBAgIUFJsUjPM7AmWvNtEvULSHlTTMiLQwDQYJKoZIhvcNAQEFBQAwWDELMAkGA1UEBhMCVVMxETAPBgNVBAoMCFN1YnNwYWNlMRUwEwYDVQQLDAxPbmVMb2dpbiBJZFAxHzAdBgNVBAMMFk9uZUxvZ2luIEFjY291bnQgNDIzNDkwHhcNMTQwNTEzMTgwNjEyWhcNMTkwNTE0MTgwNjEyWjBYMQswCQYDVQQGEwJVUzERMA8GA1UECgwIU3Vic3BhY2UxFTATBgNVBAsMDE9uZUxvZ2luIElkUDEfMB0GA1UEAwwWT25lTG9naW4gQWNjb3VudCA0MjM0OTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAKrAzJdY9FzFLt5blArJfPzgi87EnFGlTfcV5T1TUDwLBlDkY/0ZGKnMOpf3D7ie2C4pPFOImOogcM5kpDDL7qxTXZ1ewXVyjBdMu29NG2C6NzWeQTUMUji01EcHkC8o+Pts8ANiNOYcjxEeyhEyzJKgEizblYzMMKzdrOET6QuqWo3C83K+5+5dsjDn1ooKGRwj3HvgsYcFrQl9NojgQFjoobwsiE/7A+OJhLpBcy/nSVgnoJaMfrO+JsnukZPztbntLvOl56+Vra0N8n5NAYhaSayPiv/ayhjVgjfXd1tjMVTOiDknUOwizZuJ1Y3QH94vUtBgp0WBpBSs/xMyTs8CAwEAAaOB2DCB1TAMBgNVHRMBAf8EAjAAMB0GA1UdDgQWBBRQO4WpM5fWwxib49WTuJkfYDbxODCBlQYDVR0jBIGNMIGKgBRQO4WpM5fWwxib49WTuJkfYDbxOKFcpFowWDELMAkGA1UEBhMCVVMxETAPBgNVBAoMCFN1YnNwYWNlMRUwEwYDVQQLDAxPbmVMb2dpbiBJZFAxHzAdBgNVBAMMFk9uZUxvZ2luIEFjY291bnQgNDIzNDmCFBSbFIzzOwJlrzbRL1C0h5U0zIi0MA4GA1UdDwEB/wQEAwIHgDANBgkqhkiG9w0BAQUFAAOCAQEACdDAAoaZFCEY5pmfwbKuKrXtO5iE8lWtiCPjCZEUuT6bXRNcqrdnuV/EAfX9WQoXjalPi0eM78zKmbvRGSTUHwWw49RHjFfeJUKvHNeNnFgTXDjEPNhMvh69kHm453lFRmB+kk6yjtXRZaQEwS8Uuo2Ot+krgNbl6oTBZJ0AHH1MtZECDloms1Km7zsK8wAi5i8TVIKkVr5b2VlhrLgFMvzZ5ViAxIMGB6w47yY4QGQB/5Q8ya9hBs9vkn+wubA+yr4j14JXZ7blVKDSTYva65Ea+PqHyrp+Wnmnbw2ObS7iWexiTy1jD3G0R2avDBFjM8Fj5DbfufsE1b0U10RTtg==";

export const FAKE_CERT = "fake cert";
export interface CapturedCheck {
  samlRequest?: any;
  result?: any;
  name: string;
  expectedStatusCode: number;
  samlResponse?: any;
  config: SamlConfig;
  expectedNameIDStartsWith?: string;
  mockDate: string;
}

export interface SamlCheck {
  samlRequest?: any;
  result?: any;
  name: string;
  samlResponse?: any;
  config: SamlConfig;
  expectedNameIDStartsWith?: string;
}

export interface RequestWithUser extends express.Request {
  samlLogoutRequest: Profile;
  user?: Profile;
}
