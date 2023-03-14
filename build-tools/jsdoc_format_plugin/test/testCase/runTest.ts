import { expect } from 'chai';
import path from 'path';
import fs from 'fs';
import { JSDocModifierImpl } from '../../src/core/entry';

describe('testSingleFile', function () {
  const testFileDir = path.join(__dirname, '..', '/ut/');
  const outputFileDir = path.join(__dirname, '..', '/output/testSingleFile/');
  const expectFileDir = path.join(__dirname, '..', '/expect/');
  const testFileNames = fs.readdirSync(testFileDir);
  const argLen = process.argv.length;
  testFileNames.forEach((testFileName) => {
    const testFilePath = path.join(testFileDir, testFileName);
    const outputFilePath = path.join(outputFileDir, testFileName);
    const expectFilePath = path.join(expectFileDir, testFileName);
    const baseName: string = path.basename(testFileName, '.d.ts');
    const expectReportFilePath: string = path.join(expectFileDir, `${baseName}.json`);
    const outputReportFilePath: string = path.join(outputFileDir, `${baseName}.json`);
    it('testFile#' + testFilePath, async function () {
      if (fs.existsSync(outputFilePath)) {
        fs.rmSync(outputFilePath);
      }
      const inputParams = [];
      inputParams.push('-s');
      inputParams.push('-i');
      inputParams.push(testFilePath);
      inputParams.push('-o');
      inputParams.push(outputFilePath);
      inputParams.push('-t');
      process.argv.splice(argLen, inputParams.length, ...inputParams);
      const testEntry = new JSDocModifierImpl();
      await testEntry.start();

      const outputFileContent: string = fs.readFileSync(outputFilePath, 'utf-8').replace(/\r\n/g, '\n');
      const expectFileContent: string = fs.readFileSync(expectFilePath, 'utf-8').replace(/\r\n/g, '\n');
      expect(outputFileContent).eql(expectFileContent);
      const outputReportContent: string = fs.readFileSync(outputReportFilePath, 'utf-8').replace(/\r\n/g, '\n');
      const expectReportContent: string = fs.readFileSync(expectReportFilePath, 'utf-8').replace(/\r\n/g, '\n');
      expect(outputReportContent).eql(expectReportContent);
    });
  });
});

describe('testMultiFiles', function () {
  const testFileDir = path.join(__dirname, '..', '/ut/');
  const outFileDir = path.join(__dirname, '..', '/output/testMultiFiles/');
  const expectFileDir = path.join(__dirname, '..', '/expect/');

  before(async function () {
    this.timeout(10000);
    const inputParams = [];
    inputParams.push('-s');
    inputParams.push('-i');
    inputParams.push(testFileDir);
    inputParams.push('-o');
    inputParams.push(outFileDir);
    inputParams.push('-t');
    process.argv.splice(process.argv.length, 0, ...inputParams);
    const testEntry = new JSDocModifierImpl();
    await testEntry.start();
  });

  const testFileNames = fs.readdirSync(testFileDir);
  testFileNames.forEach((testFileName) => {
    const testFilePath = path.join(testFileDir, testFileName);
    const outputFilePath = path.join(outFileDir, testFileName);
    const expectFilePath = path.join(expectFileDir, testFileName);
    it('testDir#' + testFilePath, function () {
      const outputFileContent: string = fs.readFileSync(outputFilePath, 'utf-8').replace(/\r\n/g, '\n');
      const expectFileContent: string = fs.readFileSync(expectFilePath, 'utf-8').replace(/\r\n/g, '\n');
      expect(outputFileContent).eql(expectFileContent);
    });
  });
});

describe('testBundleSingleFile', function () {
  const testFileDir = path.join(__dirname, '..', '/ut/');
  const outFileDir = path.join(__dirname, '..', '/output/testBundleSingleFile/');
  const expectFileDir = path.join(__dirname, '..', '/expect/');
  const testFileNames = fs.readdirSync(testFileDir);
  const nodeExecute = process.execPath;
  const { execFileSync } = require('child_process');
  testFileNames.forEach((testFileName) => {
    const testFilePath = path.join(testFileDir, testFileName);
    const outputFilePath = path.join(outFileDir, testFileName);
    const expectFilePath = path.join(expectFileDir, testFileName);
    it('bundle_file#' + testFileName, function () {
      if (fs.existsSync(outputFilePath)) {
        fs.rmSync(outputFilePath);
      }
      execFileSync(nodeExecute, [
        'build/bundle.js', '-s',
        '-i', `${testFilePath}`,
        '-o', `${outputFilePath}`,
        '-t'
      ]);
      const outputFileContent: string = fs.readFileSync(outputFilePath, 'utf-8').replace(/\r\n/g, '\n');
      const expectFileContent: string = fs.readFileSync(expectFilePath, 'utf-8').replace(/\r\n/g, '\n');
      expect(outputFileContent).eql(expectFileContent);
    });
  });
});

describe('testBundleMultiFiles', function () {
  const testFileDir = path.join(__dirname, '..', '/ut/');
  const outFileDir = path.join(__dirname, '..', '/output/testBundleMultiFiles/');
  const expectFileDir = path.join(__dirname, '..', '/expect/');
  const nodeExecute = process.execPath;
  const { execFileSync } = require('child_process');

  before(function () {
    this.timeout(10000);
    execFileSync(nodeExecute, [
      'build/bundle.js', '-s',
      '-i', `${testFileDir}`,
      '-o', `${outFileDir}`,
      '-t'
    ]);
  });

  const testFileNames = fs.readdirSync(testFileDir);
  testFileNames.forEach((testFileName) => {
    const outputFilePath = path.join(outFileDir, testFileName);
    const expectFilePath = path.join(expectFileDir, testFileName);
    it('bundle_dir#' + testFileName, function () {
      const outputFileContent: string = fs.readFileSync(outputFilePath, 'utf-8').replace(/\r\n/g, '\n');
      const expectFileContent: string = fs.readFileSync(expectFilePath, 'utf-8').replace(/\r\n/g, '\n');
      expect(outputFileContent).eql(expectFileContent);
    });
  });
});