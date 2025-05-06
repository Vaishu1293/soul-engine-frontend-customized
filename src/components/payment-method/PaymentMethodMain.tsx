'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import PaymentMethodEditModal from './PaymentMethodEditModal';
import { PaymentMethod } from '@/interFace/interFace';
import paymentData from '@/data/payment-data';
import Image from 'next/image';
import { toast } from 'sonner';

const PaymentMethodMain: React.FC = () => {
    const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>(paymentData);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);

    // Handle the editing of a payment method
    const handleEdit = (method: PaymentMethod) => {
        setSelectedMethod(method);
        setIsModalOpen(true);
    };
    // Handle the deletion of a payment method by its ID
    const handleDelete = (id: number) => {
        setPaymentMethods((prevMethods) => prevMethods.filter((method) => method.id !== id));
        toast.success('Payment method deleted successfully!');
    };
    // Handle saving the updated payment method
    const handleSave = (updatedMethod: PaymentMethod) => {
        setPaymentMethods((prevMethods) =>
            prevMethods.map((method) => (method.id === updatedMethod.id ? updatedMethod : method))
        );
    };

    return (
        <div className="custom-dashboard-space pt-120">
            <div className="container c-container-2">
                <div className="dashboard-inner-box custom-h-175">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page-title text-center mb-30">
                                <h2 className="breadcrumb-title mb-10">Payment Method</h2>
                                <div className="breadcrumb-menu">
                                    <nav className="breadcrumb-trail breadcrumbs">
                                        <ul className="trail-items">
                                            <li className="trail-item trail-begin">
                                                <Link href="/dashboard">Dashboard</Link>
                                            </li>
                                            <li className="trail-item trail-end">
                                                <span>Payment Method</span>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="dashboard-profile-tab mb-30">
                                <div className="row gap-3 wow fadeInUp">
                                    {
                                        paymentMethods.length ? (
                                            paymentMethods.map((method) => (
                                                <div key={method.id} className="col-xl-12">
                                                    <div className="payment-method-card">
                                                        <div className="payment-method-content">
                                                            <div className="payment-method-image">
                                                                <Image
                                                                    src={method.image}
                                                                    alt={method.type}
                                                                    className="img-fluid"
                                                                    style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                                                                />
                                                            </div>
                                                            <div className="payment-method-details">
                                                                <h4 className="mb-2">{method.type}</h4>
                                                                {method.cardNumber && <p className="mb-0">Card Number: {method.cardNumber}</p>}
                                                                {method.expiry && <p className="mb-0">Expiry: {method.expiry}</p>}
                                                            </div>
                                                        </div>
                                                        <div className="payment-method-actions">
                                                            <button
                                                                className="btn btn-primary btn-sm"
                                                                onClick={() => handleEdit(method)}
                                                            >
                                                                Edit
                                                            </button>
                                                            <button
                                                                className="btn btn-danger btn-sm"
                                                                onClick={() => handleDelete(method.id)}
                                                            >
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="no-data-found text-center">
                                                <h4 className="mb-3">No Payment Methods Found</h4>
                                            </div>
                                        )
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Payment edit modal */}
            <PaymentMethodEditModal
                isOpen={isModalOpen}
                method={selectedMethod}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSave}
            />
        </div>
    );
};

export default PaymentMethodMain;

