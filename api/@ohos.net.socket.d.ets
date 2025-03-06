/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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


import type { AsyncCallback, Callback, ErrorCallback } from './@ohos.base';
import connection from "./@ohos.net.connection";
import { NetAddress } from "./@ohos.net.connection";

// export type X509CertRawData = cert.EncodingBlob;
// import type cert from './@ohos.security.cert';

type UDPSocketObserverEventType = 'message' | 'listening' | 'close' | 'error'
type LocalSocketObserverEventType = 'message' | 'connect' | 'close' | 'error'
type LocalSocketConnectionObserverEventType = 'message' | 'close' | 'error'
type LocalSocketServerObserverEventType = 'connect' | 'error'
type TCPSocketObserverEventType = 'message'| 'connect' | 'error'
type TLSSocketObserverEventType = 'message'| 'connect' | 'error'


export interface TCPConnectOptions {
  address: NetAddress;

  timeout?: number;
}

export interface UDPSendOptions {
  data: string | ArrayBuffer;

  address: NetAddress;
}

export interface ExtraOptionsBase {
  receiveBufferSize?: number;

  sendBufferSize?: number;

  reuseAddress?: boolean;

  socketTimeout?: number;
}

export interface UDPExtraOptions extends ExtraOptionsBase {
  broadcast?: boolean;
}

export interface SocketStateBase {
  isBound: boolean;

  isClose: boolean;

  isConnected: boolean;
}

export interface SocketRemoteInfo {
  address: string;

  family: 'IPv4' | 'IPv6';

  port: number;

  size: number;
}

export interface LocalSocketMessageInfo {
  message: ArrayBuffer;

  address: string;

  size: number;
}

export interface LocalAddress {
  address: string;
}

export interface LocalConnectOptions {
  address: LocalAddress;

  timeout?: number;
}

export interface LocalSendOptions {
  data: string | ArrayBuffer;

  encoding?: string;
}

export interface UDPSocket {
  bind(address: NetAddress, callback: AsyncCallback<void>): void;

  bind(address: NetAddress): Promise<void>;

  getLocalAddress(): Promise<NetAddress>;

  send(options: UDPSendOptions, callback: AsyncCallback<void>): void;

  send(options: UDPSendOptions): Promise<void>;

  close(callback: AsyncCallback<void>): void;

  close(): Promise<void>;

  getState(callback: AsyncCallback<SocketStateBase>): void;

  getState(): Promise<SocketStateBase>;

  setExtraOptions(options: UDPExtraOptions, callback: AsyncCallback<void>): void;

  setExtraOptions(options: UDPExtraOptions): Promise<void>;

  on<T>(type: UDPSocketObserverEventType, callback: Callback<T>): void;

  off<T>(type: UDPSocketObserverEventType, callback?: Callback<T>): void;

}

export interface MulticastSocket extends UDPSocket {
  addMembership(multicastAddress: NetAddress, callback: AsyncCallback<void>): void;

  addMembership(multicastAddress: NetAddress): Promise<void>;

  dropMembership(multicastAddress: NetAddress, callback: AsyncCallback<void>): void;

  dropMembership(multicastAddress: NetAddress): Promise<void>;

  setMulticastTTL(ttl: number, callback: AsyncCallback<void>): void;

  setMulticastTTL(ttl: number): Promise<void>;

  getMulticastTTL(callback: AsyncCallback<number>): void;

  getMulticastTTL(): Promise<number>;

  setLoopbackMode(flag: boolean, callback: AsyncCallback<void>): void;

  setLoopbackMode(flag: boolean): Promise<void>;

  getLoopbackMode(callback: AsyncCallback<boolean>): void;

  getLoopbackMode(): Promise<boolean>;
}

export interface LocalSocket {
  bind(address: LocalAddress): Promise<void>;

  connect(options: LocalConnectOptions): Promise<void>;

  send(options: LocalSendOptions): Promise<void>;

  close(): Promise<void>;

  getState(): Promise<SocketStateBase>;

  getSocketFd(): Promise<number>;

  setExtraOptions(options: ExtraOptionsBase): Promise<void>;

  getExtraOptions(): Promise<ExtraOptionsBase>;

  getLocalAddress(): Promise<string>;

  on<T>(type: LocalSocketObserverEventType, callback: Callback<T>): void;

  off<T>(type: LocalSocketObserverEventType, callback?: Callback<T>): void;

}

export interface LocalSocketConnection {
  clientId: number;

  send(options: LocalSendOptions): Promise<void>;

  close(): Promise<void>;

  getLocalAddress(): Promise<string>;

  on<T>(type: LocalSocketConnectionObserverEventType, callback: Callback<T>): void;

  off<T>(type: LocalSocketConnectionObserverEventType, callback?: Callback<T>): void;
}

export interface LocalSocketServer {
  listen(address: LocalAddress): Promise<void>;

  getState(): Promise<SocketStateBase>;

  setExtraOptions(options: ExtraOptionsBase): Promise<void>;

  getExtraOptions(): Promise<ExtraOptionsBase>;

  getLocalAddress(): Promise<string>;

  on<T>(type: LocalSocketServerObserverEventType, callback: Callback<T>): void;

  off<T>(type: LocalSocketServerObserverEventType, callback?: Callback<T>): void;
}



export interface TCPSendOptions {
  data: string | ArrayBuffer;

  encoding?: string;
}

export interface TCPExtraOptions extends ExtraOptionsBase {
  keepAlive?: boolean;

  OOBInline?: boolean;

  TCPNoDelay?: boolean;

  socketLinger?:  boolean | number ;
}

export interface TCPSocket {
  bind(address: NetAddress, callback: AsyncCallback<void>): void;

  bind(address: NetAddress): Promise<void>;

  connect(options: TCPConnectOptions, callback: AsyncCallback<void>): void;

  connect(options: TCPConnectOptions): Promise<void>;

  send(options: TCPSendOptions, callback: AsyncCallback<void>): void;

  send(options: TCPSendOptions): Promise<void>;

  close(callback: AsyncCallback<void>): void;

  close(): Promise<void>;

  getRemoteAddress(callback: AsyncCallback<NetAddress>): void;

  getRemoteAddress(): Promise<NetAddress>;

  getState(callback: AsyncCallback<SocketStateBase>): void;

  getState(): Promise<SocketStateBase>;

  getSocketFd(callback: AsyncCallback<number>): void;

  getSocketFd(): Promise<number>;

  setExtraOptions(options: TCPExtraOptions, callback: AsyncCallback<void>): void;

  setExtraOptions(options: TCPExtraOptions): Promise<void>;

  getLocalAddress(): Promise<NetAddress>;

  on<T>(type: TCPSocketObserverEventType, callback: Callback<T>): void;

  off<T>(type: TCPSocketObserverEventType, callback?: Callback<T>): void;
}

export interface TLSSocket {
  bind(address: NetAddress, callback: AsyncCallback<void>): void;

  bind(address: NetAddress): Promise<void>;

  getRemoteAddress(callback: AsyncCallback<NetAddress>): void;

  getRemoteAddress(): Promise<NetAddress>;

  getState(callback: AsyncCallback<SocketStateBase>): void;

  getState(): Promise<SocketStateBase>;

  setExtraOptions(options: TCPExtraOptions, callback: AsyncCallback<void>): void;

  setExtraOptions(options: TCPExtraOptions): Promise<void>;

  getLocalAddress(): Promise<NetAddress>;

  on<T>(type: TLSSocketObserverEventType, callback: Callback<T>): void;

  off<T>(type: TLSSocketObserverEventType, callback?: Callback<T>): void;

  // getCertificate(callback: AsyncCallback<X509CertRawData>): void;

  // getCertificate(): Promise<X509CertRawData>;

  // getRemoteCertificate(callback: AsyncCallback<X509CertRawData>): void;

  // getRemoteCertificate(): Promise<X509CertRawData>;

  getProtocol(callback: AsyncCallback<string>): void;

  getProtocol(): Promise<string>;

  getCipherSuite(callback: AsyncCallback<Array<string>>): void;

  getCipherSuite(): Promise<Array<string>>;

  getSignatureAlgorithms(callback: AsyncCallback<Array<string>>): void;

  getSignatureAlgorithms(): Promise<Array<string>>;

  connect(options: TLSConnectOptions, callback: AsyncCallback<void>): void;

  connect(options: TLSConnectOptions): Promise<void>;

  send(data: string | ArrayBuffer, callback: AsyncCallback<void>): void;

  send(data: string | ArrayBuffer): Promise<void>;

  close(callback: AsyncCallback<void>): void;

  close(): Promise<void>;
}

export interface TLSSecureOptions {
  ca?: string | Array<string>;

  cert?: string;

  key?: string;

  password?: string;

  protocols?: Protocol | Array<Protocol>;

  useRemoteCipherPrefer?: boolean;

  signatureAlgorithms?: string;

  cipherSuite?: string;

  isBidirectionalAuthentication?: boolean;
}

export interface TLSConnectOptions {
  address: NetAddress;

  secureOptions: TLSSecureOptions;

  ALPNProtocols?: Array<string>;

  skipRemoteValidation?: boolean;
}

export enum Protocol {
  TLSv12 = "TLSv1.2",

  TLSv13 = "TLSv1.3"
}

export interface TCPSocketConnection {
  clientId: number;

  send(options: TCPSendOptions, callback: AsyncCallback<void>): void;

  send(options: TCPSendOptions): Promise<void>;

  close(callback: AsyncCallback<void>): void;

  close(): Promise<void>;

  getRemoteAddress(callback: AsyncCallback<NetAddress>): void;

  getRemoteAddress(): Promise<NetAddress>;

  getLocalAddress(): Promise<NetAddress>;

  on<T>(type: 'message' | 'close' | 'error', callback: Callback<T>): void;

  off<T>(type: 'message' | 'close' | 'error', callback?: Callback<T>): void;
}

export interface TCPSocketServer {
  listen(address: NetAddress, callback: AsyncCallback<void>): void;

  listen(address: NetAddress): Promise<void>;

  getState(callback: AsyncCallback<SocketStateBase>): void;

  getState(): Promise<SocketStateBase>;

  setExtraOptions(options: TCPExtraOptions, callback: AsyncCallback<void>): void;

  setExtraOptions(options: TCPExtraOptions): Promise<void>;

  getLocalAddress(): Promise<NetAddress>;

  on<T>(type: 'connect' | 'error', callback: Callback<T>): void;

  off<T>(type: 'connect' | 'error', callback?: Callback<T>): void;
}

export interface TLSSocketConnection {
  clientId: number;

  send(data: string | ArrayBuffer, callback: AsyncCallback<void>): void;

  send(data: string | ArrayBuffer): Promise<void>;

  close(callback: AsyncCallback<void>): void;

  close(): Promise<void>;

  getRemoteAddress(callback: AsyncCallback<NetAddress>): void;

  getRemoteAddress(): Promise<NetAddress>;

  // getRemoteCertificate(callback: AsyncCallback<X509CertRawData>): void;

  // getRemoteCertificate(): Promise<X509CertRawData>;

  getCipherSuite(callback: AsyncCallback<Array<string>>): void;

  getCipherSuite(): Promise<Array<string>>;

  getSignatureAlgorithms(callback: AsyncCallback<Array<string>>): void;

  getSignatureAlgorithms(): Promise<Array<string>>;

  getLocalAddress(): Promise<NetAddress>;

  on<T>(type: 'message' | 'close' | 'error', callback: Callback<T>): void;

  off<T>(type: 'message' | 'close' | 'error', callback?: Callback<T>): void;
}

export interface SocketMessageInfo {
  message: ArrayBuffer;
  remoteInfo: SocketRemoteInfo;
}

export interface TLSSocketServer {
  listen(options: TLSConnectOptions, callback: AsyncCallback<void>): void;

  listen(options: TLSConnectOptions): Promise<void>;

  getState(callback: AsyncCallback<SocketStateBase>): void;

  getState(): Promise<SocketStateBase>;

  setExtraOptions(options: TCPExtraOptions, callback: AsyncCallback<void>): void;

  setExtraOptions(options: TCPExtraOptions): Promise<void>;

  // getCertificate(callback: AsyncCallback<X509CertRawData>): void;

  // getCertificate(): Promise<X509CertRawData>;

  getProtocol(callback: AsyncCallback<string>): void;

  getProtocol(): Promise<string>;

  getLocalAddress(): Promise<NetAddress>;

  on<T>(type: 'connect' | 'error', callback: Callback<T>): void;

  off<T>(type: 'connect' | 'error', callback?: Callback<T>): void;
}


declare namespace socket {

  function constructUDPSocketInstance(): UDPSocket;

  function constructMulticastSocketInstance(): MulticastSocket;

  function constructTCPSocketInstance(): TCPSocket;

  function constructTLSSocketInstance(): TLSSocket;

  function constructTLSSocketInstance(tcpSocket: TCPSocket): TLSSocket;

  function constructTCPSocketServerInstance(): TCPSocketServer;

  function constructTLSSocketServerInstance(): TLSSocketServer;

  function constructLocalSocketInstance(): LocalSocket;

  function constructLocalSocketServerInstance(): LocalSocketServer;

  
}

export default socket;
