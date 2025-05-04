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
          customerForce.viewings.length > 0 ? (
            customerForce.viewings.map((item) => (
              <CustomerForceItem key={item.id} item={item} type="viewing" />
            ))
          ) : (
            <p>There are no viewings.</p>
          )
        ) : (
          <p>Loading...</p>
        )}
      </Viewings>
      <Moves>
        {customerForce ? (
          customerForce.moves.length > 0 ? (
            customerForce.moves.map((item) => (
              <CustomerForceItem key={item.id} item={item} type="move" />
            ))
          ) : (
            <p>There are no moves.</p>
          )
        ) : (
          <p>Loading...</p>
        )}
      </Moves>
    </>
  );
};

export default CustomerForce;
