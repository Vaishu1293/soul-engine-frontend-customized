import React, { useState, useEffect } from 'react';
import { PaymentMethod, PaymentMethodEditModalProps } from '@/interFace/interFace';
import { toast } from 'sonner';

const PaymentMethodEditModal: React.FC<PaymentMethodEditModalProps> = ({ isOpen, method, onClose, onSave }) => {
    const [editedMethod, setEditedMethod] = useState<PaymentMethod | null>(null);

    useEffect(() => {
        if (method) {
            setEditedMethod(method);
        }
    }, [method]);

    const handleChange = (key: keyof PaymentMethod, value: string) => {
        setEditedMethod((prev) => (prev ? { ...prev, [key]: value } : null));
    };

    const handleSave = () => {
        if (editedMethod) {
            onSave(editedMethod);
            toast.success(`Payment method "${editedMethod.type}" updated successfully!`);
        }
        onClose();
    };

    // Close modal when clicking on the backdrop
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className={`payment-edit-modal ${isOpen ? 'show' : ''}`}
            role="dialog"
            aria-hidden={!isOpen}
            onClick={handleBackdropClick}
        >
            <div className="payment-modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header pb-20">
                        <h4 className='mb-0'>Edit Payment Method</h4>
                        <button type="button" className="btn-close" aria-label="Close" onClick={onClose}>X</button>
                    </div>
                    <div className="modal-body">
                        <div className='dashboard-payment-modal'>
                         <form className="personal-info-form">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="single-input-unit">
                                        <label>Type</label>
                                        <input
                                            type="text"
                                            value={editedMethod?.type || ''}
                                            onChange={(e) => handleChange('type', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="single-input-unit">
                                        <label>Card Number</label>
                                        <input
                                            type="text"
                                            value={editedMethod?.cardNumber || ''}
                                            onChange={(e) => handleChange('cardNumber', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="single-input-unit">
                                        <label>Location</label>
                                        <input
                                            type="text"
                                            value={editedMethod?.expiry || ''}
                                            onChange={(e) => handleChange('expiry', e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <button
                                    id="update-btn"
                                    className="fill-btn"
                                    type="button"
                                    onClick={handleSave}
                                >
                                    Update Now
                                </button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethodEditModal;
