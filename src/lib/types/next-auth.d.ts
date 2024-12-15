// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    id: string;
    firstName: string;
    familyName: string;
    fullName: string;
    username: string;
    sex: string;
    role: string;
    active: boolean;
    photo?: string;
    grade?: string;
    studentData?: {
      approved: boolean;
      studentNumber: boolean;
      IDNumber: boolean;
      class: string;
      GPA?: number;
      fatherName: string;
      motherName: string;
      contactInformation: string;
      birthDate: string;
      nationality: string;
      address: string;
      report?: string;
    };
  }

  interface User {
    id: string;
    firstName: string;
    familyName: string;
    fullName: string;
    username: string;
    sex: string;
    role: string;
    active: boolean;
    photo?: string;
    grade?: string;
    studentData?: {
      approved: boolean;
      studentNumber: boolean;
      IDNumber: boolean;
      class: string;
      GPA?: number;
      fatherName: string;
      motherName: string;
      contactInformation: string;
      birthDate: string;
      nationality: string;
      address: string;
      report?: string;
    };
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    id: string;
    firstName: string;
    familyName: string;
    fullName: string;
    username: string;
    sex: string;
    role: string;
    active: boolean;
    photo?: string;
    grade?: string;
    studentData?: {
      approved: boolean;
      studentNumber: boolean;
      IDNumber: boolean;
      class: string;
      GPA?: number;
      fatherName: string;
      motherName: string;
      contactInformation: string;
      birthDate: string;
      nationality: string;
      address: string;
      report?: string;
    };
  }
}
