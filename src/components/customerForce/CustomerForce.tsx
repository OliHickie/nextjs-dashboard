'use client'

import Viewings from "./Viewings";
import Moves from "./Moves";
import { useEffect, useState } from "react";
import { getCustomerForce } from "@/services/getCustomerForce";
import CustomerForceItem from "./CustomerForceItem";

import { CustomerForceType } from "../../types/CustomerForce.types";


const CustomerForce: React.FC = () => {
  const [customerForce, setCustomerForce] = useState<CustomerForceType>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCustomerForce();
        setCustomerForce(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Viewings>
        {customerForce ? (
          customerForce.viewings.map((item) => (
            <CustomerForceItem key={item.id} item={item} type="viewing" />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Viewings>
      <Moves>
        {customerForce ? (
          customerForce.moves.map((item) => (
            <CustomerForceItem key={item.id} item={item} type="move" />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Moves>
    </>
  );
};

export default CustomerForce;
