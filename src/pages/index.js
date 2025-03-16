import React from "react";
import Home from "@/components/Home";

export default function HomePage(props) {
  if (props.error) {
    return (
      <div className='flex justify-center items-center min-h-[50vh]'>
        <h1>{props.error}</h1>
      </div>
    );
  }
  return (
    <>
      <Home {...props} />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const reqFetch = await fetch(
      `http://my-alb-1883018390.eu-west-1.elb.amazonaws.com:81/main_products?select=*,variants(*)`
    );

    if (reqFetch.status === 200) {
      const data = await reqFetch.json();
      return {
        props: {
          data,
        },
      };
    } else {
      return {
        props: {
          error: "Failed to Fetch Records",
        },
      };
    }
  } catch (err) {
    console.log(err);
    return {
      props: {
        error: err.response?.data?.message
          ? err.response?.data?.message
          : err.message,
      },
    };
  }
}
