import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import {useParams,useHistory} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { recoverPasswordApi } from "../redux/actions/auth.actions";
const ResetPassword = () => {
    const {token} = useParams() ;
    const dispatch = useDispatch() ; 
    const history = useHistory(); 
    console.log("TOKEN",token) ;  
  const { register, handleSubmit,formState: { errors } } = useForm();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        /* background-color: red; */
        alignItems: "center",
        marginTop: "7%",
      }}
    >
      <form
        onSubmit={handleSubmit((submit) => {
          console.log(submit);
          let {confirmpassword,password} = submit ; 
          if(confirmpassword!=password)
          {
            Swal.fire({
                title:'erreur', 
                icon:'error', 
                text:'Confirmation ne rassemble pas au mot de passe saisie'
            })
          }else {
              dispatch(recoverPasswordApi(submit,token,history))
          }
        })}
      >
        <div class="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
          <div class="px-4 py-8 sm:px-10">
            <div class="mt-6">
              <div class="w-full space-y-6">
                <div class="w-full">
                  <div class=" relative ">
                    <input
                      type="password"
                      id="search-form-price"
                      {...register("password", { required: true })}
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Nouveau mot de passe"
                    />
                    {errors.password && <span className="mt-2 text-red-500">Champs Obligatoire</span>}
                  </div>
                </div>
                <div class="w-full">
                  <div class=" relative ">
                    <input
                      type="password"
                      {...register("confirmpassword", { required: true })}
                      id="search-form-location"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Confirmer mot de passe"
                    />
                     {errors.confirmpassword && <span className=" mt-2 text-red-500">Champs Obligatoire</span>}
                  </div>
                </div>

                <div>
                  <span class="block w-full rounded-md shadow-sm">
                    <button
                      type="submit"
                      class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    >
                      Recouvrir mot de passe
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
