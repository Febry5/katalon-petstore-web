<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>Suite_PetStore_Final</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <maxConcurrentInstances>1</maxConcurrentInstances>
   <numberOfRerun>0</numberOfRerun>
   <orchestration>CLASSIC</orchestration>
   <pageLoadTimeout>10</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>false</rerunImmediately>
   <testSuiteGuid>1134208b-8b03-47cd-a786-9cac35f9e80d</testSuiteGuid>
   <testCaseLink>
      <guid>1024d811-c942-4bac-b078-07b0437627f9</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/TC_web/TC1_login_berhasil</testCaseId>
      <usingDataBindingAtTestSuiteLevel>false</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>3258fe9f-b2b9-4aa1-9437-8bffbabeb9d3</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/TC_web/TC2_login_gagal</testCaseId>
      <usingDataBindingAtTestSuiteLevel>false</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>071dcb33-de03-45e8-a1dd-d2d02fff8949</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/TC_web/TC3_cari_produk</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>c315bcfb-7957-485c-ad7c-24979c082ab8</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/ListHewan</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>c315bcfb-7957-485c-ad7c-24979c082ab8</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>keyword_produk</value>
         <variableId>5ab87650-04b9-4073-a742-02b64743473c</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>e1629ffd-b399-4dd5-b800-a8a87b1ac783</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/TC_web/TC4_tambah_keranjang</testCaseId>
      <usingDataBindingAtTestSuiteLevel>false</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>02f4dea0-60bb-4d59-8bd8-48d469a1fd29</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/TC_web/TC5_checkout_sukses</testCaseId>
      <usingDataBindingAtTestSuiteLevel>false</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
</TestSuiteEntity>
