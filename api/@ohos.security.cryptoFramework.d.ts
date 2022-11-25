/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {AsyncCallback, Callback} from './basic';

/**
 * Provides a set of encryption and decryption algorithm library framework, shields the underlying differences,
 * encapsulate the relevant algorithm library, and provides a unified functional interface upward.
 *
 * @syscap SystemCapability.Security.CryptoFramework
 * @since 9
 */
declare namespace cryptoFramework {
    /**
     * Enum for result code
     * @since 9
     */
    enum Result {
        /** Indicates that input params is invalid.
         * @since 9
         */
        INVALID_PARAMS = 401,

        /** Indicates that function or algorithm is not supported.
         * @since 9
         */
        NOT_SUPPORT = 801,

        /** Indicates the out of memory error.
         * @since 9
         */
        ERR_OUT_OF_MEMORY = 17620001,

        /** Indicates that runtime error.
         * @since 9
         */
        ERR_RUNTIME_ERROR = 17620002,

        /** Indicates that crypto operation has something wrong.
         * @since 9
         */
        ERR_CRYPTO_OPERATION = 17630001,

        /* Indicates that cert signature check fails.
         * @since 9
         */
        ERR_CERT_SIGNATURE_FAILURE = 17630002,

        /* Indicates that cert is not yet valid.
         * @since 9
         */
        ERR_CERT_NOT_YET_VALID = 17630003,

        /* Indicates that cert has expired.
         * @since 9
         */
        ERR_CERT_HAS_EXPIRED = 17630004,

        /* Indicates that we can not get the untrusted cert's issuer.
         * @since 9
         */
        ERR_UNABLE_TO_GET_ISSUER_CERT_LOCALLY = 17630005,

        /* Key usage does not include certificate sign.
         * @since 9
         */
        ERR_KEYUSAGE_NO_CERTSIGN = 17630006,

        /* Key usage does not include digital sign.
         * @since 9
         */
        ERR_KEYUSAGE_NO_DIGITAL_SIGNATURE = 17630007,
    }

    /**
     * Provides the data blob type.
     * @typedef DataBlob
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    interface DataBlob {
        data : Uint8Array;
    }

    /**
     * Provides the data array type.
     * @typedef DataArray
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    interface DataArray {
        data : Array<Uint8Array>;
    }

    /**
     * Enum for supported cert encoding format.
     * @enum {number}
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
     enum EncodingFormat {
        /**
         * The value of cert DER format
         * @since 9
         */
        FORMAT_DER = 0,

        /**
         * The value of cert PEM format
         * @since 9
         */
        FORMAT_PEM = 1,
    }

    /**
     * Provides the cert encoding blob type.
     * @typedef EncodingBlob
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    interface EncodingBlob {
        data : Uint8Array;
        encodingFormat : EncodingFormat;
    }

    /**
     * Provides the cert chain data type.
     * @typedef CertChainData
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    interface CertChainData {
        data: Uint8Array;
        count : number;
        encodingFormat: EncodingFormat;
    }

    /**
     * Provides the ParamsSpec type, including the algorithm name.
     * @typedef ParamsSpec
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    interface ParamsSpec {
        /**
         * Indicates the algorithm name.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        algoName : string;
    }

    /**
     * Provides the IvParamsSpec type, including the parameter iv.
     * @typedef IvParamsSpec
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    interface IvParamsSpec extends ParamsSpec {
        /**
         * Indicates the algorithm parameters such as iv.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        iv : DataBlob;
    }

    /**
     * Provides the GcmParamsSpec type, including the parameter iv, aad and authTag.
     * @typedef GcmParamsSpec
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    interface GcmParamsSpec extends ParamsSpec {
        /**
         * Indicates the GCM algorithm parameters such as iv.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        iv : DataBlob;

        /**
         * Indicates the GCM additional message for integrity check.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        aad : DataBlob;

        /**
         * Indicates the GCM Authenticated Data.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        authTag : DataBlob;
    }

    /**
     * Provides the CcmParamsSpec type, including the parameter iv, aad and authTag.
     * @typedef CcmParamsSpec
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    interface CcmParamsSpec extends ParamsSpec {
        /**
         * Indicates the GCM algorithm parameters such as iv.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        iv : DataBlob;

        /**
         * Indicates the CCM additional message for integrity check.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        aad : DataBlob;

        /**
         * Indicates the CCM Authenticated Data.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        authTag : DataBlob;
    }

    /**
     * Enum for obtain the crypto operation.
     * @since 9
     */
    enum CryptoMode {
        /**
         * The value of aes and 3des encrypt operation
         * @since 9
         */
        ENCRYPT_MODE = 0,

        /**
         * The value of aes and 3des decrypt operation
         * @since 9
         */
        DECRYPT_MODE = 1,
    }

    /**
     * The common parents class of key.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    interface Key {
        /**
         * Encode the key object to binary data.
         * @returns { DataBlob } the binary data of the key object.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getEncoded() : DataBlob;

        /**
         * Key format.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        readonly format : string;

        /**
         * Key algorithm name.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        readonly algName : string;
    }

    interface SymKey extends Key {
        clearMem() : void;
    }

    /**
     * The private key class of asymmetrical key.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    interface PriKey extends Key {

        /**
         * The function used to clear private key mem.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        clearMem() : void;
    }

    /**
     * The public key class of asymmetrical key.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    interface PubKey extends Key {}

    /**
     * The keyPair class of  asymmetrical key. Include privateKey and publickey.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    interface KeyPair {

        /**
         * Public key.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        readonly priKey : PriKey;

        /**
         * Private key.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        readonly pubKey : PubKey;
    }

    interface Random {

        /**
         * Generate radom DataBlob by given length.
         * @param len Indicates the length of random DataBlob.
         * @returns Returns the generated random blob.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        generateRandom(len : number, callback: AsyncCallback<DataBlob>) : void;
        generateRandom(len : number) : Promise<DataBlob>;

        /**
         * Set seed by given DataBlob.
         * @param seed Indicates the seed DataBlob.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        setSeed(seed : DataBlob, callback : AsyncCallback<void>) : void;
        setSeed(seed : DataBlob) : Promise<void>;
    }

    /**
     * Provides the rand create func.
     * @returns Returns the created rand instance.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    function createRandom() : Random;

    /**
     * The generator used to generate asymmetrical key.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    interface AsyKeyGenerator {

        /**
         * Used to generate asymetric key pair.
         * @param { AsyncCallback<KeyPair> } callback - the callback used to return keypair.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        generateKeyPair(callback : AsyncCallback<KeyPair>) : void;
        generateKeyPair() : Promise<KeyPair>;

        /**
         * Convert keyPair object from privateKey and publicKey binary data.
         * @param pubKey The binary data of public key.
         * @param priKey The binary data of private key.
         * @returns The Converted key pair.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        convertKey(pubKey : DataBlob, priKey : DataBlob, callback : AsyncCallback<KeyPair>) : void;
        convertKey(pubKey : DataBlob, priKey : DataBlob) : Promise<KeyPair>;

        /**
         * The algorithm name of generator.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        readonly algName : string;
    }

    /**
     * Provides the SymKeyGenerator type, which is used for generating symmetric key.
     * @typedef SymKeyGenerator
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    interface SymKeyGenerator {
        /**
         * Generate a symmetric key object randomly.
         * @param { AsyncCallback<SymKey> } callback - the callback of generateSymKey.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        generateSymKey(callback : AsyncCallback<SymKey>) : void;

        /**
         * Generate a symmetric key object randomly.
         * @returns { Promise<SymKey> } the promise returned by the function.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        generateSymKey() : Promise<SymKey>;

        /**
         * Generate a symmetric key object according to the provided binary key data.
         * @param { AsyncCallback<SymKey> } callback - the callback of generateSymKey.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        convertKey(key : DataBlob, callback : AsyncCallback<SymKey>) : void;

        /**
         * Generate a symmetric key object according to the provided binary key data.
         * @returns { Promise<SymKey> } the promise returned by the function.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        convertKey(key : DataBlob) : Promise<SymKey>;

        /**
         * Indicates the algorithm name of the SymKeyGenerator object.
         * @type { string }
         * @readonly
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        readonly algName : string;
    }

    /**
     * Provides the asymmetrical key generator instance func.
     * @param algName This algName contains params of generateKeyPair, like bits, primes or ECC_curve;
     * @returns The generator object.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    function createAsyKeyGenerator(algName : string) : AsyKeyGenerator;

    /**
     * Provides the sym key generator instance func.
     * @param algName Indicates the algorithm name.
     * @returns Returns the sym key generator instance.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    function createSymKeyGenerator(algName : string) : SymKeyGenerator;

    interface Mac {
         /**
         * Init hmac with given SymKey
         * @param key Indicates the SymKey
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        init(key : SymKey, callback : AsyncCallback<void>) : void;
        init(key : SymKey) : Promise<void>;

        /**
         * Update hmac with DataBlob
         * @param input Indicates the DataBlob
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        update(input : DataBlob, callback : AsyncCallback<void>) : void;
        update(input : DataBlob) : Promise<void>;

        /**
         * Output the result of hmac calculation
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        doFinal(callback : AsyncCallback<DataBlob>) : void;
        doFinal() : Promise<DataBlob>;

        /**
         * Output the length of hmac result
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getMacLength() : number;

        /**
         * Indicates the algorithm name
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        readonly algName : string;
    }

    /**
     * Provides the mac create func.
     * @param algName Indicates the mac algorithm name.
     * @returns Returns the mac create instance.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    function createMac(algName : string) : Mac;

    interface Md {
        /**
         * Update md with DataBlob
         * @param input Indicates the DataBlob
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        update(input : DataBlob, callback : AsyncCallback<void>) : void;
        update(input : DataBlob) : Promise<void>;

        /**
         * Output the result of md calculation
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        digest(callback : AsyncCallback<DataBlob>) : void;
        digest() : Promise<DataBlob>;

        /**
         * Output the length of md result
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getMdLength() : number;

        /**
         * Indicates the algorithm name
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        readonly algName : string;
    }

    /**
     * Provides the md create func.
     * @param algorithm Indicates the md algorithm.
     * @returns Returns the md create instances.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    function createMd(algName : string) : Md;

    interface Cipher {
        /**
         * Init cipher with given cipher mode, key and params.
         * @param opMode Indicates the cipher mode.
         * @param key Indicates the SymKey or asymmetrical key.
         * @param params Indicates the algorithm parameters such as IV.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        init(opMode : CryptoMode, key : Key, params : ParamsSpec, callback : AsyncCallback<void>) : void;
        init(opMode : CryptoMode, key : Key, params : ParamsSpec) : Promise<void>;

        /**
         * Update cipher with DataBlob.
         * @param input Indicates the DataBlob
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        update(data : DataBlob, callback : AsyncCallback<DataBlob>) : void;
        update(data : DataBlob) : Promise<DataBlob>;

        /**
         * Output the result of cipher calculation.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        doFinal(data : DataBlob, callback : AsyncCallback<DataBlob>) : void;
        doFinal(data : DataBlob) : Promise<DataBlob>;

        /**
         * Indicates the algorithm name.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        readonly algName : string;
    }

    /**
     * Provides the cipher create func.
     * @param transformation Indicates the transform type, and contains init params of cipher.
     * @returns Returns the cipher create instance.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    function createCipher(transformation : string) : Cipher;

    /**
     * The sign class
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    interface Sign {
        /**
         * This init function used to Initialize environment, must be invoked before update and sign.
         * @param priKey The prikey object.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        init(priKey : PriKey, callback : AsyncCallback<void>) : void;
        init(priKey : PriKey) : Promise<void>;

        /**
         * This function used to update data.
         * @param data The data need to update.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        update(data : DataBlob, callback : AsyncCallback<void>) : void;
        update(data : DataBlob) : Promise<void>;

        /**
         * This function used to sign all data.
         * @param data The data need to update.
         * @returns The sign data.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        sign(data : DataBlob, callback : AsyncCallback<DataBlob>) : void;
        sign(data : DataBlob) : Promise<DataBlob>;

        /**
         * The sign algName.
         * @type { string }
         * @syscap SystemCapability.Security.CryptoFramework.
         * @readonly
         * @since 9
         */
        readonly algName : string;
    }

    /**
     * The verify class
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    interface Verify {
        /**
         * This init function used to Initialize environment, must be invoked before update and verify.
         * @param priKey The prikey object.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        init(pubKey : PubKey, callback : AsyncCallback<void>) : void;
        init(pubKey : PubKey) : Promise<void>;

        /**
         * This function used to update data.
         * @param data The data need to update.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        update(data : DataBlob, callback : AsyncCallback<void>) : void;
        update(data : DataBlob) : Promise<void>;

        /**
         * This function used to sign all data.
         * @param data The data need to update.
         * @param signatureData The sign data.
         * @returns true means verify success.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        verify(data : DataBlob, signatureData : DataBlob, callback : AsyncCallback<boolean>) : void;
        verify(data : DataBlob, signatureData : DataBlob) : Promise<boolean>;

        /**
         * Indicates the verify algorithm name.
         * @type { string }
         * @readonly
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        readonly algName : string;
    }

    /**
     * Provides the sign func.
     * @param algName Indicates the sign algorithm name, include init detail params.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    function createSign(algName : string) : Sign;

    /**
     * Provides the verify func.
     * @param algName Indicates the verify algorithm name, include init detail params.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    function createVerify(algName : string) : Verify;

    interface KeyAgreement {
        /**
         * Generate secret by init params.
         * @returns The generated secret.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        generateSecret(priKey : PriKey, pubKey : PubKey, callback : AsyncCallback<DataBlob>) : void;
        generateSecret(priKey : PriKey, pubKey : PubKey) : Promise<DataBlob>;

        /**
         * Indicates the algorithm name
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        readonly algName : string;
    }

    /**
     * Provides the key agree func.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     * @param algName Indicates the key agreement algorithm name.
     */
    function createKeyAgreement(algName : string) : KeyAgreement;

    interface X509Cert {
        /**
         * Verify the X509 cert.
         * @param key Indicates the cert chain validator data.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        verify(key : PubKey, callback : AsyncCallback<void>) : void;
        verify(key : PubKey) : Promise<void>;

        /**
         * Get X509 cert encoded data.
         * @returns Returns X509 cert encoded data.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getEncoded(callback : AsyncCallback<EncodingBlob>) : void;
        getEncoded() : Promise<EncodingBlob>;

        /**
         * Get X509 cert public key.
         * @returns Returns X509 cert pubKey.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getPublicKey(callback : AsyncCallback<PubKey>) : void;
        getPublicKey() : Promise<PubKey>;

        /**
         * Check the X509 cert validity with date.
         * @param date Indicates the cert date.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        checkValidityWithDate(date: string, callback : AsyncCallback<void>) : void;
        checkValidityWithDate(date: string) : Promise<void>;

        /**
         * Get X509 cert version.
         * @returns Returns X509 cert version.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getVersion() : number;

        /**
         * Get X509 cert serial number.
         * @returns Returns X509 cert serial number.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getSerialNumber() : number;

        /**
         * Get X509 cert issuer name.
         * @returns Returns X509 cert issuer name.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getIssuerName() : DataBlob;

        /**
         * Get X509 cert subject name.
         * @returns Returns X509 cert subject name.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getSubjectName() : DataBlob;

        /**
         * Get X509 cert not before time.
         * @returns Returns X509 cert not before time.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getNotBeforeTime() : string;

        /**
         * Get X509 cert not after time.
         * @returns Returns X509 cert not after time.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getNotAfterTime() : string;

        /**
         * Get X509 cert signature.
         * @returns Returns X509 cert signature.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getSignature() : DataBlob;

        /**
         * Get X509 cert signature's algorithm name.
         * @returns Returns X509 cert signature's algorithm name.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getSignatureAlgName() : string;

        /**
         * Get X509 cert signature's algorithm oid.
         * @returns Returns X509 cert signature's algorithm oid.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getSignatureAlgOid() : string;

        /**
         * Get X509 cert signature's algorithm name.
         * @returns Returns X509 cert signature's algorithm name.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getSignatureAlgParams() : DataBlob;

        /**
         * Get X509 cert key usage.
         * @returns Returns X509 cert key usage.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getKeyUsage() : DataBlob;

        /**
         * Get X509 cert extended key usage.
         * @returns Returns X509 cert extended key usage.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getExtKeyUsage() : DataArray;

        /**
         * Get X509 cert basic constraints path len.
         * @returns Returns X509 cert basic constraints path len.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getBasicConstraints() : number;

        /**
         * Get X509 cert subject alternative name.
         * @returns Returns X509 cert subject alternative name.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getSubjectAltNames() : DataArray;

        /**
         * Get X509 cert issuer alternative name.
         * @returns Returns X509 cert issuer alternative name.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getIssuerAltNames() : DataArray;
    }

    /**
     * Provides the x509 cert func.
     * @param inStream Indicates the input cert data.
     * @returns Returns X509 cert instance.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    function createX509Cert(inStream : EncodingBlob, callback : AsyncCallback<X509Cert>) : void;
    function createX509Cert(inStream : EncodingBlob) : Promise<X509Cert>;

    /**
     * Interface of X509CrlEntry.
     * @since 9
     * @syscap SystemCapability.Security.CryptoFramework
     */
    interface X509CrlEntry {
        /**
         * Returns the ASN of this CRL entry 1 der coding form, i.e. internal sequence.
         * @returns Returns EncodingBlob of crl entry.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getEncoded(callback : AsyncCallback<EncodingBlob>) : void;
        getEncoded() : Promise<EncodingBlob>;

        /**
         * Get the serial number from this x509crl entry.
         * @returns Returns serial number of crl entry.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getSerialNumber() : number;

        /**
         * Get the issuer of the x509 certificate described by this entry.
         * @returns Returns DataBlob of issuer.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getCertIssuer(callback : AsyncCallback<DataBlob>) : void;
        getCertIssuer() : Promise<DataBlob>;

        /**
         * Get the revocation date from x509crl entry.
         * @returns Returns string of revocation date.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getRevocationDate(callback : AsyncCallback<string>) : void;
        getRevocationDate() : Promise<string>;
    }

    /**
     * Interface of X509Crl.
     * @since 9
     * @syscap SystemCapability.Security.CryptoFramework
     */
    interface X509Crl {
        /**
         * Check if the given certificate is on this CRL.
         * @param X509Cert Input cert data.
         * @returns Returns result of Check cert is revoked or not.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        isRevoked(cert : X509Cert, callback : AsyncCallback<boolean>) : void;
        isRevoked(cert : X509Cert) : Promise<boolean>;

        /**
         * Returns the type of this CRL.
         * @returns Returns string of crl type.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getType() : string;

        /**
         * Get the der coding format.
         * @returns Returns EncodingBlob of crl.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getEncoded(callback : AsyncCallback<EncodingBlob>) : void;
        getEncoded() : Promise<EncodingBlob>;

        /**
         * Use the public key to verify the signature of CRL.
         * @param PubKey Input public Key.
         * @returns Returns verify result.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        verify(key : PubKey, callback : AsyncCallback<void>) : void;
        verify(key : PubKey) : Promise<void>;

        /**
         * Get version number from CRL.
         * @returns Returns version of crl.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getVersion() : number;

        /**
         * Get the issuer name from CRL. Issuer means the entity that signs and publishes the CRL.
         * @returns Returns issuer name of crl.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getIssuerName() : DataBlob;

        /**
         * Get lastUpdate value from CRL.
         * @returns Returns last update of crl.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getLastUpdate() : string;

        /**
         * Get nextUpdate value from CRL.
         * @returns Returns next update of crl.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getNextUpdate() : string;

        /**
         * This method can be used to find CRL entries in indirect CRLs.
         * @param serialNumber serial number of crl.
         * @returns Returns next update of crl.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getRevokedCert(serialNumber : number, callback : AsyncCallback<X509CrlEntry>) : void;
        getRevokedCert(serialNumber : number) : Promise<X509CrlEntry>;

        /**
         * This method can be used to find CRL entries in indirect cert.
         * @param X509Cert Cert of x509.
         * @returns Returns X509CrlEntry instance.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getRevokedCertWithCert(cert : X509Cert, callback : AsyncCallback<X509CrlEntry>) : void;
        getRevokedCertWithCert(cert : X509Cert) : Promise<X509CrlEntry>;

        /**
         * Get all entries in this CRL.
         * @returns Returns Array of X509CrlEntry instance.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getRevokedCerts(callback : AsyncCallback<Array<X509CrlEntry>>) : void;
        getRevokedCerts() : Promise<Array<X509CrlEntry>>;

        /**
         * Get the CRL information encoded by Der from this CRL.
         * @returns Returns DataBlob of tbs info.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getTbsInfo(callback : AsyncCallback<DataBlob>) : void;
        getTbsInfo() : Promise<DataBlob>;

        /**
         * Get signature value from CRL.
         * @returns Returns DataBlob of signature.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getSignature() : DataBlob;

        /**
         * Get the signature algorithm name of the CRL signature algorithm.
         * @returns Returns string of signature algorithm name.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getSignatureAlgName() : string;

        /**
         * Get the signature algorithm oid string from CRL.
         * @returns Returns string of signature algorithm oid.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        getSignatureAlgOid() : string;

        /**
         * Get the der encoded signature algorithm parameters from the CRL signature algorithm.
         *
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         * @returns Returns DataBlob of signature algorithm params.
         */
        getSignatureAlgParams() : DataBlob;
    }

    /**
     * Provides the x509 CRL func.
     * @param inStream Indicates the input CRL data.
     * @returns Returns the x509 CRL instance.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
     function createX509Crl(inStream : EncodingBlob, callback : AsyncCallback<X509Crl>) : void;
     function createX509Crl(inStream : EncodingBlob) : Promise<X509Crl>;

    /**
     * Certification chain validator.
     * @since 9
     * @syscap SystemCapability.Security.CryptoFramework
     */
    interface CertChainValidator {
        /**
         * Validate the cert chain.
         * @param certChain Indicates the cert chain validator data.
         * @syscap SystemCapability.Security.CryptoFramework
         * @since 9
         */
        validate(certChain : CertChainData, callback : AsyncCallback<void>) : void;
        validate(certChain : CertChainData) : Promise<void>;
        readonly algorithm : string;
    }

    /**
     * Provides the cert chain validator func.
     * @param algorithm Indicates the cert chain validator type.
     * @returns { CertChainValidator } the cert chain validator instance.
     * @syscap SystemCapability.Security.CryptoFramework
     * @since 9
     */
    function createCertChainValidator(algorithm :string) : CertChainValidator;
}

export default cryptoFramework;
