/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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

/**
 * @file
 * @kit BasicServicesKit
 */

/**
 * ��ģ����Ҫ�ṩ���ڹ������ܣ������򿪺͹ر��豸�Ĵ��ڡ�д��Ͷ�ȡ���ݡ����úͻ�ȡ���ڵ����ò�����Ȩ�޹����ȡ�
 *
 * @syscap SystemCapability.USB.USBManager.Serial
 * @since 19 dynamic
 * @since 23 static
 */
declare namespace serialManager {

  /**
   * ��ѯ�����豸�嵥�������豸���ƺͶ�Ӧ�Ķ˿ںš�
   *
   * @returns { Readonly<SerialPort>[]} Serial port information list.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  function getPortList(): Readonly<SerialPort>[];

  /**
   * ���Ӧ�ó����Ƿ���з��ʴ����豸��Ȩ�ޡ�Ӧ���˳���������ʱ����Ҫ����������Ȩ��
   *
   * @param { int} portId - Ŀ���豸�Ķ˿ںţ�����[getPortList]{@link serialManager.getPortList()}��ȡ�Ĵ��ڲ���SerialPort��
   * @returns {boolean} true��ʾ����Ȩ��false��ʾδ��Ȩ��
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14400005 Database operation exception.
   * @throws { BusinessError } 31400001 Serial port management exception.
   * @throws { BusinessError } 31400003 PortId does not exist.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  function hasSerialRight(portId: int): boolean;

  /**
   * ����Ӧ�ó�����ʴ����豸��Ȩ�ޡ�Ӧ���˳��Զ��Ƴ��Դ����豸�ķ���Ȩ�ޣ���Ӧ����������Ҫ����������Ȩ��ʹ��Promise�첽�ص���
   *
   * @param { int} portId - Ŀ���豸�Ķ˿ںţ�����[getPortList]{@link serialManager.getPortList()}��ȡ�Ĵ��ڲ���SerialPort��
   * @returns { Promise<boolean>} Promise����true��ʾ����Ȩ�޳ɹ���false��ʾ����Ȩ��ʧ�ܡ�
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14400005 Database operation exception.
   * @throws { BusinessError } 31400001 Serial port management exception.
   * @throws { BusinessError } 31400003 PortId does not exist.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  function requestSerialRight(portId: int): Promise<boolean>;

  /**
   * ΪӦ�ó������ӷ��ʴ����豸Ȩ�ޡ�
   * serialManager.requestSerialRight�ᴥ�����������û���Ȩ��addSerialRight���ᴥ������������ֱ������Ӧ�ó�������豸��Ȩ�ޡ�Ӧ���˳��Զ��Ƴ��Դ����豸�ķ���Ȩ�ޣ���Ӧ����������Ҫ����������
   * Ȩ��
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { int } tokenId - ��Ҫ����Ȩ�޵�tokenId��
   * @param { int} portId - Ŀ���豸�Ķ˿ںţ�����[getPortList]{@link serialManager.getPortList()}��ȡ�Ĵ��ڲ���SerialPort��
   * @throws { BusinessError } 201 Permission verification failed. The application does not have the permission required to
   *     call the API.
   * @throws { BusinessError } 202 Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14400005 Database operation exception.
   * @throws { BusinessError } 31400001 Serial port management exception.
   * @throws { BusinessError } 31400003 PortId does not exist.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @systemapi
   * @since 19 dynamic
   * @since 23 static
   */
  function addSerialRight(tokenId: int, portId: int): void;

  /**
   * �Ƴ�Ӧ�ó�������ʱ���ʴ����豸��Ȩ�ޡ��˽ӿڻ����close�ر��Ѵ򿪵Ĵ��ڡ�
   *
   * @param { int} portId - Ŀ���豸�Ķ˿ںţ�����[getPortList]{@link serialManager.getPortList()}��ȡ�Ĵ��ڲ���SerialPort��
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14400005 Database operation exception.
   * @throws { BusinessError } 31400001 Serial port management exception.
   * @throws { BusinessError } 31400002 Access denied. Call requestSerialRight to request user authorization first.
   * @throws { BusinessError } 31400003 PortId does not exist.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  function cancelSerialRight(portId: int): void;

  /**
   * �򿪴����豸��
   *
   * @param { int} portId - Ŀ���豸�Ķ˿ںţ�����[getPortList]{@link serialManager.getPortList()}��ȡ�Ĵ��ڲ���SerialPort��
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 31400001 Serial port management exception.
   * @throws { BusinessError } 31400002 Access denied. Call requestSerialRight to request user authorization first.
   * @throws { BusinessError } 31400003 PortId does not exist.
   * @throws { BusinessError } 31400004 The serial port device is occupied.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  function open(portId: int): void;

  /**
   * �رմ��ڡ�
   *
   * @param { int} portId - Ŀ���豸�Ķ˿ںţ�����[getPortList]{@link serialManager.getPortList()}��ȡ�Ĵ��ڲ���SerialPort��
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 31400001 Serial port management exception.
   * @throws { BusinessError } 31400003 PortId does not exist.
   * @throws { BusinessError } 31400005 The serial port device is not opened. Call the open API first.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  function close(portId: int): void;

  /**
   * ��ȡָ�����ڵ����ò�����
   *
   * @param { int} portId - Ŀ���豸�Ķ˿ںţ�����[getPortList]{@link serialManager.getPortList()}��ȡ�Ĵ��ڲ���SerialPort��
   * @returns { Readonly<SerialAttribute>} ���ش��ڵ����ò�����
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 31400001 Serial port management exception.
   * @throws { BusinessError } 31400003 PortId does not exist.
   * @throws { BusinessError } 31400005 The serial port device is not opened. Call the open API first.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  function getAttribute(portId: int): Readonly<SerialAttribute>;

  /**
   * ���ô��ڵ����ò��������δ���ø÷�����ʹ��Ĭ�����ò����������ʣ�9600bps������λ��8��У��λ��0��ֹͣλ��1����
   *
   * @param { int} portId - Ŀ���豸�Ķ˿ںţ�����[getPortList]{@link serialManager.getPortList()}��ȡ�Ĵ��ڲ���SerialPort��
   * @param { SerialAttribute} attribute - ���ڲ�����
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 31400001 Serial port management exception.
   * @throws { BusinessError } 31400003 PortId does not exist.
   * @throws { BusinessError } 31400005 The serial port device is not opened. Call the open API first.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  function setAttribute(portId: int, attribute: SerialAttribute): void;

  /**
   * �Ӵ����豸�첽��ȡ���ݡ�ʹ��Promise�첽�ص���
   *
   * @param { int} portId - Ŀ���豸�Ķ˿ںţ�����[getPortList]{@link serialManager.getPortList()}��ȡ�Ĵ��ڲ���SerialPort��
   * @param { Uint8Array } buffer - ��ȡ���ݵĻ���������󳤶�Ϊ8192���ء�
   * @param { int } timeout - ��ʱʱ�䣨��λ�����룩��API��Ŀ��˿ڻ�����������ʱ���ȴ�ָ��ʱ��󷵻ء�Ĭ��ֵ0��ʾ���ȴ�ֱ�ӷ��ء�
   * @returns { Promise<int> } Promise���󣬷��ض�ȡ���ݳ��ȡ�
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 31400001 Serial port management exception.
   * @throws { BusinessError } 31400003 PortId does not exist.
   * @throws { BusinessError } 31400005 The serial port device is not opened. Call the open API first.
   * @throws { BusinessError } 31400006 Data transfer timed out.
   * @throws { BusinessError } 31400007 I/O exception. Possible causes:
   *
   *     <br>1. The transfer was canceled.
   *
   *     <br>2. The device offered more data than allowed.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  function read(portId: int, buffer: Uint8Array, timeout?: int): Promise<int>;

  /**
   * �Ӵ����豸ͬ����ȡ���ݡ�
   *
   * @param { int} portId - Ŀ���豸�Ķ˿ںţ�����[getPortList]{@link serialManager.getPortList()}��ȡ�Ĵ��ڲ���SerialPort��
   * @param { Uint8Array } buffer - ��ȡ���ݵĻ���������󳤶�Ϊ8192���ء�
   * @param { int } timeout - ��ʱʱ�䣨��λ�����룩��API��Ŀ��˿ڻ�����������ʱ���ȴ�ָ��ʱ��󷵻ء�Ĭ��ֵ0��ʾ���ȴ�ֱ�ӷ��ء�
   * @returns {int} ���ض�ȡ���ݳ��ȡ�
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 31400001 Serial port management exception.
   * @throws { BusinessError } 31400003 PortId does not exist.
   * @throws { BusinessError } 31400005 The serial port device is not opened. Call the open API first.
   * @throws { BusinessError } 31400006 Data transfer timed out.
   * @throws { BusinessError } 31400007 I/O exception. Possible causes:
   *
   *     <br>1. The transfer was canceled.
   *
   *     <br>2. The device offered more data than allowed.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  function readSync(portId: int, buffer: Uint8Array, timeout?: int): int;

  /**
   * �򴮿��豸�첽д���ݣ�ÿ��д�����ݳ��Ȳ�����4KB�����ݹ���ᵼ�����ݶ�ʧ�������ݽ���ְ�д�롣ʹ��Promise�첽�ص���
   *
   * @param { int} portId - Ŀ���豸�Ķ˿ںţ�����[getPortList]{@link serialManager.getPortList()}��ȡ�Ĵ��ڲ���SerialPort��
   * @param { Uint8Array } buffer - д�����ݵĻ���������󳤶�Ϊ4KB��
   * @param { int } timeout - ��ʱʱ�䣨��λ�����룩��ָ��ʱ���ڵȴ�API��Ŀ��˿ڵĻ������Ƿ��д������д������������������д�ȴ�����ָ��ʱ��󷵻س�ʱ��Ĭ��ֵ0��ʾ����дʱ���ȴ�ֱ�ӷ��ء�
   * @returns { Promise<int> } Promise���󣬷���д�����ݳ��ȡ�
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 31400001 Serial port management exception.
   * @throws { BusinessError } 31400003 PortId does not exist.
   * @throws { BusinessError } 31400005 The serial port device is not opened. Call the open API first.
   * @throws { BusinessError } 31400006 Data transfer timed out.
   * @throws { BusinessError } 31400007 I/O exception. Possible causes:
   *
   *     <br>1. The transfer was canceled.
   *
   *     <br>2. The device offered more data than allowed.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  function write(portId: int, buffer: Uint8Array, timeout?: int): Promise<int>;

  /**
   * �򴮿��豸ͬ��д���ݣ�ÿ��д�����ݳ��Ȳ�����4KB�����ݹ���ᵼ�����ݶ�ʧ�������ݽ���ְ�д�롣
   *
   * @param { int} portId - Ŀ���豸�Ķ˿ںţ�����[getPortList]{@link serialManager.getPortList()}��ȡ�Ĵ��ڲ���SerialPort��
   * @param { Uint8Array } buffer - д��Ŀ�껺��������󳤶�Ϊ4KB��
   * @param { int } timeout - ��ʱʱ�䣨��λ�����룩��ָ��ʱ���ڵȴ�API��Ŀ��˿ڵĻ������Ƿ��д������д������������������д�ȴ�����ָ��ʱ��󷵻س�ʱ��Ĭ��ֵ0��ʾ����дʱ���ȴ�ֱ�ӷ��ء�
   * @returns { int } ����д�����ݳ��ȡ�
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 31400001 Serial port management exception.
   * @throws { BusinessError } 31400003 PortId does not exist.
   * @throws { BusinessError } 31400005 The serial port device is not opened. Call the open API first.
   * @throws { BusinessError } 31400006 Data transfer timed out.
   * @throws { BusinessError } 31400007 I/O exception. Possible causes:
   *
   *     <br>1. The transfer was canceled.
   *
   *     <br>2. The device offered more data than allowed.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  function writeSync(portId: int, buffer: Uint8Array, timeout?: int): int;

  /**
   * ���ڲ�����
   *
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  interface SerialPort {

    /**
     * �˿ںš�
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    portId: int;

    /**
     * �����豸���ơ�
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    deviceName: string;
 }
  /**
   * ���ڵ����ò�����
   *
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  interface SerialAttribute {

    /**
     * ���ڲ����ʡ�
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    baudRate: BaudRates;

    /**
     * ��������λ��Ĭ��ֵΪ8λ��
     *
     * @default DATABIT_8
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    dataBits?: DataBits;

    /**
     * ������żУ�飬Ĭ��ֵΪNone������żУ�顣
     *
     * @default NONE
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    parity?: Parity;

    /**
     * ����ֹͣλ��Ĭ��ֵΪ1λ��
     *
     * @default STOPBIT_1
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    stopBits?: StopBits;
 }
  /**
   * Enumerates the baud rates.
   *
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  enum BaudRates {

    /**
     * ���䲨����Ϊ50��
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_50 = 50,

    /**
     * ���䲨����Ϊ75��
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_75 = 75,

    /**
     * ���䲨����Ϊ110��
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_110 = 110,

    /**
     * ���䲨����Ϊ134��
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_134 = 134,

    /**
     * ���䲨����Ϊ150��
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_150 = 150,

    /**
     * ���䲨����Ϊ200��
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_200 = 200,

    /**
     * ���䲨����Ϊ300��
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_300 = 300,

    /**
     * ���䲨����Ϊ600��
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_600 = 600,

    /**
     * ���䲨����Ϊ1200��
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_1200 = 1200,

    /**
     * ���䲨����Ϊ1800��
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_1800 = 1800,

    /**
     * ���䲨����Ϊ2400��
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_2400 = 2400,

    /**
     * ���䲨����Ϊ4800��
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_4800 = 4800,

    /**
     * ���䲨����Ϊ9600��
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_9600 = 9600,

    /**
     * ���䲨����Ϊ19200��
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_19200 = 19200,

    /**
     * ���䲨����Ϊ38400��
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_38400 = 38400,

    /**
     * ���䲨����Ϊ57600��
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_57600 = 57600,

    /**
     * ���䲨����Ϊ115200��
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_115200 = 115200,

    /**
     * ���䲨����Ϊ230400��
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_230400 = 230400,

    /**
     * ���䲨����Ϊ460800��
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_460800 = 460800,

    /**
     * ���䲨����Ϊ500000��
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_500000 = 500000,

    /**
     * ���䲨����Ϊ576000��
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_576000 = 576000,

    /**
     * ���䲨����Ϊ921600��
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_921600 = 921600,

    /**
     * ���䲨����Ϊ1000000��
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_1000000 = 1000000,

    /**
     * ���䲨����Ϊ1152000��
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_1152000 = 1152000,

    /**
     * ���䲨����Ϊ1500000��
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_1500000 = 1500000,

    /**
     * ���䲨����Ϊ2000000��
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_2000000 = 2000000,

    /**
     * ���䲨����Ϊ2500000��
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_2500000 = 2500000,

    /**
     * ���䲨����Ϊ3000000��
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_3000000 = 3000000,

    /**
     * ���䲨����Ϊ3500000��
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_3500000 = 3500000,

    /**
     * ���䲨����Ϊ4000000��
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_4000000 = 4000000
 }
  /**
   * Enumerates the number of data bits.
   *
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  enum DataBits {

    /**
     * ���ĵ���Ч����λ��Ϊ8���ء�
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    DATABIT_8 = 8,

    /**
     * ���ĵ���Ч����λ��Ϊ7���ء�
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    DATABIT_7 = 7,

    /**
     * ���ĵ���Ч����λ��Ϊ6���ء�
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    DATABIT_6 = 6,

    /**
     * ���ĵ���Ч����λ��Ϊ5���ء�
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    DATABIT_5 = 5,
 }
  /**
   * Enumerates the parity check modes.
   *
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  enum Parity {

    /**
     * ��У�顣
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    PARITY_NONE = 0,

    /**
     * ��У�顣
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    PARITY_ODD = 1,

    /**
     * żУ�顣
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    PARITY_EVEN = 2,

    /**
     * �̶�Ϊ1��
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    PARITY_MARK = 3,

    /**
     * �̶�Ϊ0��
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    PARITY_SPACE = 4
 }
  /**
   * Enumerates of the number of stop bits.
   *
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  enum StopBits {

    /**
     * ���ĵ���Чֹͣλ��Ϊ1���ء�
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    STOPBIT_1 = 0,

    /**
     * ���ĵ���Чֹͣλ��Ϊ2���ء�
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    STOPBIT_2 = 1,
 }
}

export default serialManager;