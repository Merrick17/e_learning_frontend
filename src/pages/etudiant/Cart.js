import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { confirmPayment, deleteItemFromCart, getUserCart } from '../../redux/actions/user.actions';
import moment from 'moment';
import { BASE_URL } from '../../utils/apiHelpers';
import { PayPalButton } from "react-paypal-button-v2";
import Swal from 'sweetalert2';

const Cart = () => {
    const dispatch = useDispatch();
    const { userData } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getUserCart(userData._id))
    }, []);
    const calulateAmount = () => {
        let amount = 0;
        userData.cart.forEach(elm => {
            amount = amount + elm.price;
        });
        return amount;
    }
    return (
        <div className="w-full h-full container flex flex-col">



            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Nom du Cours
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Description
                                        </th>

                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Prix
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Action</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 ">
                                    {
                                        userData.cart.map((elm) => <tr >
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <img className="h-10 w-10 rounded-full" src={`${BASE_URL}/${elm.courseImage}`} />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">
                                                            {elm.title}
                                                        </div>
                                                        <div className="text-sm text-gray-500">

                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{elm.desc}</div>

                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {moment(elm.createdAt).format('DD-MM-YYYY')}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {elm.price} DT
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex ">

                                                <button type="button" className="py-2 px-4 flex justify-center items-center  bg-red-500 hover:bg-red-600 focus:ring-red-600 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  w-12 h-12 rounded-lg " onClick={() => {

                                                    Swal.fire({
                                                        title: 'Vous etes sure de supprimer cet Cours ?',
                                                        showCancelButton: true,
                                                        confirmButtonText: `Confirmer`,
                                                        cancelButtonText: `Annuler`,
                                                    }).then((result) => {

                                                        if (result.isConfirmed) {
                                                            dispatch(deleteItemFromCart(userData._id, elm._id))
                                                        }
                                                    })

                                                }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>


                                            </td>
                                        </tr>
                                        )
                                    }
                                </tbody>
                            </table>

                        </div>
                        <div className="md:p-8 p-6 mt-10 m-5 bg-white shadow-xl rounded-lg flex justify-between dark:bg-gray-800 md:items-center md:flex-row flex-col gap-12">
                            <div>
                                <span className="text-bold text-gray-700 dark:text-gray-400 block">
                                    PRIX TOTAL:
                                </span>
                                <span className="text-blue-500 text-4xl md:text-5xl mt-2 font-black block">
                                    {calulateAmount()} DT
                                </span>
                            </div>
                            <div className="self-end">
                                <PayPalButton
                                    amount={calulateAmount()}
                                    // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                    onSuccess={(details, data) => {
                                        Swal.fire(
                                            'Success!',
                                            'Votre transaction à été effectué!',
                                            'success'
                                        )

                                        dispatch(confirmPayment(userData._id));
                                    }}
                                />
                                {/* <button style={{ maxWidth: '16em' }} type="button" className="py-2 mx-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " >
                                    Confirmer l'achat
                                </button> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cart
