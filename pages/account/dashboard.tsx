import { FC, useState, useEffect, useContext } from "react";
import { FaUser } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import { Search, Layout } from "@/components";
import AuthContext from "@/contexts/AuthContext";
import styles from "@/styles/AuthForm.module.css";
import "react-toastify/dist/ReactToastify.css";

type DashboardProps = {};

const Dashboard: FC<DashboardProps> = ({}) => {
  return (
    <Layout title="User Dashboard">
      <h1>Dashboard</h1>
    </Layout>
  );
};

export default Dashboard;
