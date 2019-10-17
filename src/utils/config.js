let config = {
    //配送班表
    schedule: {
        //获取列表的URL
        list: '/dcScheduleController/findScheduleByMonth',
        //获取单个数据的URL
        item: '/dcScheduleController/findDcScheduleById',
        //删除的后台URL
        delete: '/dcScheduleController/deleteDcSchedule',
        //保存的后台URL
        save: '/dcScheduleController/saveDcSchedule',
        //更新的URL
        update: '/dcScheduleController/updateDcSchedule',
        //新增或者修改的时候列表子项的model，根据这个model转换右侧侧栏选中的信息
        dcList: '/storeInfoController/findStoreInfoFoNoPage',   // 配送中心下拉列表
        chartName: '/dcScheduleController/dcScheduleNameCheck',  //班表名称校验
        getStoreList:'/storeInfoController/findStoreInfoByType',/* 门店 树 */
        childModel: {
            materialId: 'id',//	物品ID，必填
            materialCode: '',//	物品编码；必填
            materialName: '',//	大西瓜	物品名称；必填
            materialSort: 'categoryName',//	水果	物品类别
            orderingCycleId: '',//	订货周期ID
            orderingCycleCode:'',
            orderingCycleName: '',//	日订	订货周期名称
            stockUnitId: '',////库存单位ID；必填
            stockUnitCode: '',//		库存单位编码；必填
            stockUnitName: '',//		库存单位名称；必填
            unitId: '',//	1	配送单位ID；必填
            unitCode: '',//		配送单位编码，必填
            unitName: '',//		配送单位名称，必填
            conversionValue: '',//大于0的正数	1	单位换算关系
        },
    },
    //配送班表
    schedule1: {
        list: '/dcScheduleController/findScheduleByMonth',
        item: '',
        delete: '',
        save: '/dcScheduleController/saveDcSchedule',
        update: '/dcScheduleController/updateDcSchedule',
    },
    //配送物品
    distributeGood: {
        list: '/dcOrderController/findDcOrderByPager',
        item: '/dcOrderController/findDcOrderById',
        save: '/dcOrderController/saveDcSchedule',
        update: '/dcOrderController/updateDcOrde',
        updateClearingType:'/dcOrderController/updateClearingList',//更新结算方式
        findDcMaterialList:'/dcOrderController/findDcMaterialList',
        AgencyGoodsAction:'/dcOrderController/findDcMaterialListByQuery',//查询机构下物品列表
        batchSetMaterial:'/dcOrderController/batchSetMaterial',//批量设置物品
        import:"/dcOrderController/importMaterial",
        childModel: {
            materialId: 'id',
            materialCode: '',
            materialName: '',
            materialSort: 'categoryName',
            spec: '',//规格
            stockUnitId: '',//库存单位ID；必填
            stockUnitName: '',//库存单位名称；必填
            stockUnitCode:'',
            unitId: '',//配送单位ID；必填
            unitCode: '',//配送单位编码，必填
            unitName: '',//配送单位名称，必填
            conversionValue: '',//单位换算系数，必填
            deliveryMode: {'default': 'unified'},//配送方式
            shippingPrice: {'default': 'costprice'},//配送单价;
            addMethod: {'default': 'no_addition'},//加成方式；
            additionRate: '',//加成比例
            selfServed: '',//是否自采
            materialUnitList:'',
            outputTax:'',//税率
        }
    },
    //物品BOM组物品BOM组
    goodsBom: {
        // list: '/materialBomgroupController/findMaterialBomgroupList',
        list: '/materialBomgroupController/findMaterialBomgroupByFuzzymatch',
        item: '/materialBomgroupController/findMaterialBomgroup',
        delete: '/materialBomgroupController/deleteMaterialBomgroup',
        save: '/materialBomgroupController/saveMaterialBomgroup',
        update: '/materialBomgroupController/updateMaterialBomgroup',
        search: '/materialBomgroupController/findMaterialBomgroupByFuzzymatch',
        isOrder: '/materialBomgroupController/updateMaterialBomgroup',  //是否参与订货
        unitInfo: '/unitInfoController/findUnitInfoForNoPage',      //计量单位查询下拉列表接口
        checkName: '/materialBomgroupController/materialBomgroupNameCheck',
        //新增或者修改的时候列表子项的model，根据这个model转换右侧侧栏选中的信息
        childModel: {
            materialId: 'id',//	唯一ID，配送排班新增时不传，修改和删除时必传
            materialCode:'',
            materialName: '',//	大西瓜	物品名称；必填
            // materialSort: '',//	水果	物品类别
            materialModel:'spec',
            // orderingCycleId: '',//	订货周期ID
            // orderingCycleName: '',//	日订	订货周期名称
            // mateclassName: '',       //物品分类名称
            stockUnitId: '',////库存单位ID；必填
            // stockUnitCode: '',//		库存单位编码；必填
            stockUnitName: '',//		库存主单位名称；必填
            unitId: '',//	1	配送单位ID；必填
            // unitCode: '',//		配送单位编码，必填
            unitName: '',//		配送单位名称，必填
            bomUnitId:'',  //bom消耗单位id
            defaultpurchase:'unitName',//  默认采购单位
            bomUnitName:'bomUnitName',  //     BOM组消耗单位
        }
    },
    //订货周期
    orderCycle:{
        list: '/orderingCycleController/findOrderingCycleByFuzzymatch',/*列表*/
        item: '/orderingCycleController/findOrderingCycle',/*修改*/
        delete: '/orderingCycleController/deleteOrderingCycle',/*删除*/
        save: '/orderingCycleController/saveOrderingCycle',/*新增*/
        update: '/orderingCycleController/updateOrderingCycle',/*修改保存*/
        search: '/orderingCycleController/findOrderingCycleByFuzzymatch',/*查询*/
        checkName:'/orderingCycleController/orderingCycleNameCheck', //名称校验
        //新增或者修改的时候列表子项的model，根据这个model转换右侧侧栏选中的信息
        childModel: {
            materialId: 'id',//	唯一ID，配送排班新增时不传，修改和删除时必传
            materialCode:'',
            materialName: '',//	大西瓜	物品名称；必填
            // materialSort: '',//	水果	物品类别
            spec:'',
            // orderingCycleId: '',//	订货周期ID
            // orderingCycleName: '',//	日订	订货周期名称
            // mateclassName: '',       //物品分类名称
            stockUnitId: '',////库存单位ID；必填
            stockUnitCode: '',//		库存单位编码；必填
            stockUnitName: '',//		库存主单位名称；必填
            unitId: '',//	1	配送单位ID；必填
            unitCode: '',//		配送单位编码，必填
            unitName: '',//		配送单位名称，必填
            defaultpurchase:'unitName',//  默认采购单位
        }
    },
    //配送路线
    deliveryRouter: {
        list: '/dcRoadController/findDcRoadByPager',
        save: '/dcRoadController/saveDcRoad',
        update: '/dcRoadController/updateDcRoad',
        delete: '/dcRoadController/deleteDcRoad',
        item: '/dcRoadController/findRoadById',
        orderList:'/deliveryOrderController/findDeliverOrderByPage',
        searchStoreList: '/storeInfoController/findStoreInfoByFuzzymatch', //门店信息 门店搜索 //配送线路选择机构
        selectList:'/dcRoadController/findDcRoadList',
        routeName: '/dcRoadController/dcRoadNameCheck',  //线路名称校验
        childModel: {
            storeId: 'id',//	机构ＩＤ  必填
            storeName: '',//	机构名称   必填
            storeCode: '',
            storeType: '',//	机构类型   必填
            loadingOrder: '',//	装车顺序   必填
            address: '',//	收货地址
            linkman: '',//	联系人
            phone: 'linkPhone',
            elapsedTime: '',//耗时
            mileage: '',//	里程 (km)
            remark: '',   //备注
            latitude:'',  //纬度
            longitude:''  //经度
        }

    },
    //仓库档案
    Warehouse: {
        // list: '/warehouseController/findWarehouseList',
        list: '/warehouseController/findWarehouseByFuzzymatch',
        item: '/warehouseController/findWarehouse',
        save: '/warehouseController/saveWarehouse',
        update: '/warehouseController/updateWarehouse',
        search: '/warehouseController/findWarehouseByFuzzymatch',
        copyToOthers:'/warehouseController/saveWarehouseMaterialForCopyWarehouse',
        copyToStore:'/warehouseController/saveWarehouseForCopyStore',
        checkName: '/warehouseController/warehouseNameCheck',
        deleteCheck:'/warehouseController/deleteWarehouseMaterialByCheckStock',
        // goodstotal:'/materialController/findMaterialListNoPage',
        goodstotal:'/warehouseController/findWarehouseMaterialByWarehouseId',//从不限改为指定
        setByClassId:'/warehouseController/saveWarehouseMaterialByClassId',
        frozenStore:'/warehouseController/updateWarehousetoFrozen',//批量冻结
        warehouseList:'/warehouseController/saveWarehouseMaterialList',//批量设置物品
        findGoodsByStoreID:'/warehouseController/findMaterialByWarehouseList',//查询仓库下的物品列表
        TSearchNoPage:'/materialController/findMaterialByClassIdNoPage',
        childModel: {
            tenancyId: '',
            materialId: 'id',
            materialCode: '',
            materialName: '',
            stockUnitName:'',
            categoryName:'',
            unitVolume:'',
            stockSubjectCode: '',//在库会计科目
            onOrderSubjectCode: '',//  在途会计编码
            qualityPeriod: '',// 保质期
            stockAgeWarnDate: 'stockAgeWarnDays',//呆滞预警天数
            maxStorageAge:'stockWarnDays', //安全库存天数

        }
    },
    //物品分类
    MaterialClass: {
        list: '/materialClassController/findMaterialClassByCategoryName',
        // list: '/materialClassController/findMaterialClassList',
        save: '/materialClassController/saveMaterialClass',
        update: '/materialClassController/updateMaterialClass',
        search: '/materialClassController/findMaterialClassOfFuzzymatch',
        ClassTree:'/materialClassController/findMaterialClassTree',//获取物品分类的树形数据
        // search: '/materialClassController/findMaterialClassByCategoryName',  //搜索分类名称查询不到
        delete: '/materialClassController/deleteMaterialClass',
        childList:'/materialClassController/findMaterialListById',
        silderList:'/materialClassController/findMaterialClassOfFuzzymatch',
        parentTree:'/materialClassController/findParentTree',
        checkName: '/materialClassController/materialClassNameCheck',
        childModel: {
            categoryName: '',   //物料分类名称
            categoryEnglist:'',/*英文名称*/
            thirdCode:'',/*第三方编码*/
            parentId:'0',
            parentName: '全部分类',
            parentCode: '',
            quickFocus:'0',
            parentLevel:'0'
        }
    },
    //要货汇总
    needToCollet: {
        list: '/demandOrderController/findDemandOrderByPager',
        item: '/demandOrderController/findDemandOrder',
        update: '/demandOrderController/updateDemandOrder',
        total: '/demandOrderController/findDemandOrderTotal',
        saveAndAudit:'/demandOrderController/saveAndAuditDemandOrder',
        auditOrder: '/demandOrderController/auditDemandOrder',
        loseOrder: '/demandOrderController/ignoreDemandOrder',
        noDelivery: '/demandOrderController/findStoreOfNoCommitDemand',  //未提交要货
        storeInfo: '/dcRoadController/findStoreByRoad',    //要货门店
        storeListInfo: '/storeInfoController/findStoreInfoFoNoPage', //要货门店所有门店
        childModel: {
            materialId: 'id',
            materialCode: '',
            materialName: '',
            materialSort: 'categoryName',
            deliveryMode: '',
            unitId:'',
            unitCode:'',
            unitName:'', //为空取stockUnitId
            cycleId:'orderingCycleId',//	订货周期ID
            orderingCycleNum :'orderingCycleCode',
            orderingCycleName : 'orderingCycleName',//	日订	订货周期名称
            stockUnitCode:'',
            stockUnitName:'',
            stockUnitId:'',
            taxRate:'',
            conversionValue: '',
            spec: '',
            remark: '',
            num: '',
            qty: ''
        }
    }, 
    //机构
    store: {
        list: '/storeInfoController/findStoreInfoByFuzzymatch',
    },
    //侧栏通用物品查询接口
    goodList: {
        list: '/materialController/findMaterialByQuerytype',
        orderCycelList: '/orderingCycleController/findOrderingCycleForNoPage' //订货周期
    },
    //物品分类侧栏查询接口
    classListSlider:{
        list: '/materialClassController/findMaterialClassOfFuzzymatch', //物品分类
    },
    //侧栏物品 配送路线数据接口
    deliverModeList:{
        list: '/materialController/findMaterialByDcOrder',
    },
    //侧栏机构 查询接口
    searchStoreList:{
        list: '/storeInfoController/findStoreInfoByFuzzymatch'
    },
    //侧栏仓库 查询接口
    searchWarehouseList:{
        list: '/warehouseController/findWarehouseByFuzzymatch'
    },
    // 配送发货单
    deliveryInvoice: {
        list: '/deliveryOrderController/findDeliverOrderByPage',//列表
        item: '/deliveryOrderController/findDeliverOrderById',//编辑
        saveBefore: '/deliveryOrderController/saveDeliverOrderShip',//新增1
        save: '/deliveryOrderController/saveDeliverOrderShipBatch',//新增2
        delete: '/deliveryOrderController/deleteDeliverOrderShip',//删除
        update: '/deliveryOrderController/updateDeliverOrderShip',//更新
        saveAndAuditBefore: '/deliveryOrderController/saveAndAuditDeliveryOrder',//保存并审核1
        saveAndAuditAfter: '/deliveryOrderController/saveAndAuditDeliveryOrderBath',//保存并审核2
        total: '/deliveryOrderController/findDeliveryOrderShipTotal',//合计
        itemQuery: '/materialController/findMaterialByExactQuery',//物品
        road: '/dcRoadController/findDcRoadList',//线路
        warehouseMatch: '/warehouseController/findWarehouseListForNoPage',//仓库模糊查询
        audit: '/deliveryOrderController/auditDeliveryOrderShip',//审核
        searchItem: '/materialController/findMaterialByQuerytype',//子表中的物品搜索
        copy:'/deliveryOrderController/findDeliverOrderShipForCopy',//复制
        storeSearch:'/dcRoadController/findStoreByRoad',//机构下门店
        storeSearchByRoad:'/dcRoadController/findStoreByRoad',//根据线路查询门店
        // noDistributionInvoice:'/stockPickingController/findStockPickingOfNoGenShip',//未生成配送发货单
        generateDistributionInvoice:'/deliveryOrderController/genDeliverOrderShip',//生成配送发货单
        childModel: {
            materialId: "id",//物品id
            materialCode: "",//物品编码
            materialName: "",//物品名称
            conversionValue: "",//单位换算值
            spec:"",//规格型号
            materialSort:"categoryName",//物品类别
            unitId: "",//配送单位id
            unitCode: "",//配送单位编码
            unitName: "",//配送单位名称
            stockUnitId: "",//库存主单位
            stockUnitCode: "",//主计量单位编码
            stockUnitName: "",//库存主单位名称
            num: "",//发货件数
            qty: "",//发货数量
            price:"shippingPrice"?"shippingPrice":{default: 0},//配送单价
            amt: "",//金额
            remark: "",//备注
            barCode:"",//条码
            mnemonicCode:"",//主记码
            taxRate: "outputTax",//税率
            amtTax: "",//税额
            amtNotax: "",//未税金额
        }
    },
    
    //生成配送发货单
    noDelivery:{
        noDistributionInvoice:'/stockPickingController/findStockPickingOfNoGenShip',//未生成配送发货单
        findRoadListAndDetail:'/dcRoadController/findRoadListAndDetail',
        getSelectTreeOpt:'/storeInfoController/findStoreInfoByType',
        findDistributionCentre:'/storeInfoController/findStoreInfoFoNoPage',//配送中心
    },
    
    // 采购订单
    purchaseOrder: {
        list: '/purchaseOrderController/findPurchaseOrderList',
        delete: '/purchaseOrderController/deletePurchaseOrder',
        item: '/purchaseOrderController/findPurchaseOrder',
        update: '/purchaseOrderController/updatePurchaseOrder',
        save: '/purchaseOrderController/savePurchaseOrder',
        search: '/purchaseOrderController/findPurchaseOrderList',
        import:'/purchaseOrderController/importMaterial',
        audit:'/purchaseOrderController/auditPurchaseOrderList',//审核
        saveAndAudit:'/purchaseOrderController/saveAndAudit',//保存并审核
        copyToAdd:'/purchaseOrderController/copyPurchaseOrder',//复制并新增
        childModel: {
            'materialCode': '',//物品编号
            'materialName': '',//物品名称
            'billId': '',//单据id
            'esId': '',//搜索引擎id
            'pEsId': '',//搜索引擎父id
            'seqNum': '',//序号
            'materialId': 'id',//物品id
            'spec': '',//规格
            'materialSort': 'categoryName',//物品类别
            'isGift': '0',//是否赠品
            'unitId': '',//采购单位
            'unitCode': '',//单位编码
            'unitName': '',//单位名称
            'stockUnitId': '',//库存主单位
            'stockUnitCode': '',//主单位编码
            'stockUnitName': '',//主单位名称
            'conversionValue': '',//单位换算值
            'qty': '',//数量
            'num': '',//件数
            'giftQty': '',//赠送数量
            'price': 'newPrice'?'newPrice':{default: 0},//含税采购单价
            'amt': '',//含税金额
            'taxRate': '',//税率
            'amtTax': '',//税额
            'amtNotax': '',//未税金额
            'remark': '',//备注
            'materialUnitList':''
        },
        queryConditions:{

        }
    },
    // 采购收货单
    purchaseOrderRcp: {
        list: '/purchaseOrderRcptController/findPurchaseOrderRcptList',
        item: '/purchaseOrderRcptController/findPurchaseOrderRcpt',
        save: '/purchaseOrderRcptController/savePurchaseOrderRcpt',
        delete: '/purchaseOrderRcptController/delectPurchaseOrderRcpt',
        update:'/purchaseOrderRcptController/updatePurchaseOrderRcpt',
        audit:'/purchaseOrderRcptController/auditPurchaseOrderRcptBatch',
        saveAndAudit:'/purchaseOrderRcptController/auditPurchaseOrderRcpt',
        copyToAdd:'/purchaseOrderRcptController/copyAndIncrease',//复制并新增
        search: '/purchaseOrderRcptController/findPurchaseOrderRcptList',
        end:'/purchaseOrderRcptController/endPurchaseOrderRcpt',
        checkTime:'/purchaseOrderRcptController/checkProductDate',
        import:'/purchaseOrderRcptController/importMaterial',
        childModel: {
            'billId': '',//单据id
            'esId': '',//搜索引擎id
            'pEsId': '',//搜索引擎父id
            'seqNum': '',//序号
            'materialId': 'id',//物品id
            'materialCode': '',//物品编号
            'materialName': '',//物品名称
            'spec': '',//规格型号
            'materialSort': 'categoryName',//物品类别
            'isGift': '',//是否赠品
            'unitId': '',//采购单位
            'unitCode': '',//单位编码
            'unitName': '',//单位名称
            'stockUnitId':'',//库存主单位
            'stockUnitCode': '',//主单位编码
            'stockUnitName': '',//主单位名称
            'conversionValue': '',//单位换算值
            'qty': '',//数量
            'num': '',//收货件数
            'qtyReceiv': '',//应收数量（存传入的数量值）
            'giftQty':  {'default': 0},//赠送数量
            'price':'newPrice'?'newPrice':{default: 0},//采购单价
            'amt': '',//含税金额
            'taxRate': '',//税率
            'amtTax': '',//税额
            'amtNotax': '',//未税金额
            'qualityPeriod': '',//保质期
            'productionDate': {default: new Date()},//生产日期
            'isPartReceive': '',//是否部分收货
            'remark': '',//备注
            'materialUnitList':''

        },
    },
    // 采购退货单
    purchaseReturnone: {
        list: '/purchaseOrderRetnController/findPurchaseOrderRetnList',
        item: '/purchaseOrderRetnController/findPurchaseOrderRetn',
        save: '/purchaseOrderRetnController/savePurchaseOrderRetn',
        delete: '/purchaseOrderRetnController/deletePurchaseOrderRetn',
        update:'/purchaseOrderRetnController/updatePurchaseOrderRetn',
        search: '/purchaseOrderRetnController/findPurchaseOrderRetnList',
        audit:'/purchaseOrderRetnController/auditPurchaseOrderRetnList',/*审核*/
        copyToAdd:'/purchaseOrderRetnController/copyAddPurchaseOrderRetn',//复制并新增
        saveAndAudit:'/purchaseOrderRetnController/auditPurchaseOrderRetn',
        warehouseMatch: '/warehouseController/findWarehouseListForNoPage',//仓库模糊查询
        import:'/purchaseOrderRetnController/importMaterial',//导入模板
        childModel: {
            'billId': '',//单据id
            'esId': '',//搜索引擎id
            'pEsId': '',//搜索引擎父id
            'seqNum': '',//序号
            'materialId': 'id',//物品id
            'materialCode': '',//物品编号
            'materialName': '',//物品名称
            'spec': '',//规格
            'materialSort': 'categoryName',//物品类别
            'unitId': '',//采购单位
            'unitCode': '',//单位编码
            'unitName': '',//单位名称
            'stockUnitId': '',//库存主单位
            'stockUnitCode': '',//主单位编码
            'stockUnitName': '',//主单位名称
            'conversionValue': '',//单位换算值
            'qty': 'qty'?'qty':{default:null},//数量
            'num': '',//件数
            'price':'newPrice'?'newPrice':{default: 0},//含税采购单价
            'amt': '',//含税金额
            'taxRate': '',//税率
            'amtTax':'',//税额
            'amtNotax': '',//未税金额
            'remark': '',//备注
        },
    },
    // 采购退货申请单
    purchaseReturnsRequsion: {
        list: '/purchaseReturnController/findPurchaseReturnList',
        item: '/purchaseReturnController/findPurchaseReturn',
        save: '/purchaseReturnController/savePurchaseReturn',
        delete: '/purchaseReturnController/deletePurchaseReturn',
        update:'/purchaseReturnController/updatePurchaseReturn',
        search: '/purchaseReturnController/findPurchaseReturnList',
        audit:'/purchaseReturnController/auditPurchaseReturnList',
        saveAndAudit:'/purchaseReturnController/saveAndAudit',
        copyToAdd:'/purchaseReturnController/copyPurchaseReturn',//复制并新增
        childModel: {
            'billId': '',//单据id
            'esId': '',//搜索引擎id
            'pEsId': '',//搜索引擎父id
            'seqNum': '',//序号
            'materialId': 'id',//物品id
            'materialCode': '',//物品编号
            'materialName': '',//物品名称
            'spec': '',//规格
            'materialSort':'categoryName',//物品类别
            'unitId': '',//采购单位
            'unitCode': '',//单位编码
            'unitName': '',//单位名称
            'stockUnitId': '',//库存主单位
            'stockUnitCode':'',//主单位编码
            'stockUnitName': '',//主单位名称
            'conversionValue': '',//单位换算值
            'qty': '',//数量
            'num': '',//件数
            'isGift': '',//是否赠品
            'giftQty':'',//赠品数量
            'remark': '',//备注
        }
    },
    //报损单
    lossStatement: {
        list: '/lossController/findLossByPager',//列表
        // list: '/lossController/findWarehouseByFuzzymatch',
        item: '/lossController/findLoss',//编辑
        save: '/lossController/saveLossOrder',//保存
        update: '/lossController/updateLoss',//更新
        delete: '/lossController/deleteLoss',//删除
        audit:'/lossController/auditLossBatch',
        saveAndAudit: '/lossController/saveAndAuditLoss',//保存并审核
        total: '/lossController/findLossTotal',//合计
        itemQuery: '/materialController/findMaterialByExactQuery',//物品
        searchItem: '/materialController/findMaterialByQuerytype',//子表中的物品搜索
        // warehouseMatch: '/warehouseController/findWarehouseByFuzzymatch',//仓库模糊查询
        warehouseMatch: '/warehouseController/findWarehouseByFuzzymatchNoPage',//仓库模糊查询
        childModel: {
            "billId": "",//单据id
            "esId": "",//搜索引擎id
            "seqNum": "",//序号
            "materialId": "id",//物品id
            "materialCode": "",//物品编码
            "materialName": "",//物品名称
            "spec": "",//规格
            "materialSort": "categoryName",//物品类别
            "stockUnitId": "",//库存主单位
            "stockUnitCode": "",//库存主单位编码
            "stockUnitName": "",//库存主单位名称
            "price": "costPrice",//单价
            "qty": "",//入库数量
            "amt": "",//入库金额
            "remark": "",//备注
            "pEsId": "",//搜索引擎父id
            "amtNotax": "",//未税金额
            "taxRate": "outputTax",//税率
            "amtTax": "",//税额
        },
    },
    //供应商管理
    supplier:{
        // list: '/supplyInfoController/findSupplyInfoList',
        list: '/supplyInfoController/findSupplyInfoByFuzzymatch',
        item: '/supplyInfoController/findSupplyInfo',
        save: '/supplyInfoController/saveSupplyInfo',
        delete: '/supplyInfoController/deleteSupplyInfo',
        update: '/supplyInfoController/updateSupplyInfo',
        search: '/supplyInfoController/findSupplyInfoByFuzzymatch',
        searchByName:'/supplyInfoController/findSupplyInfoByFuzzymatchOfBank',
        getSupplierInfo:'/supplyInfoController/findSupplyInfoByAuxiliaryId',
        checkName: '/supplyInfoController/supplyInfoNameCheck',
    },
    //配送退货收货单
    deliveryReturn:{
        list: '/deliveryOrderRetnController/findDeliveryOrderRetnList',
        item: '/deliveryOrderRetnController/findDeliverRetnById',
        update: '/deliveryOrderRetnController/updateDeliveryOrderRetn',
        total: '/deliveryOrderRetnController/findDeliveryOrderRetnTotal',
        audit:'/deliveryOrderRetnController/auditDeliveryOrderRetn',
        saveAndAudit:'/deliveryOrderRetnController/saveAndAuditDeliveryOrderRetn',
        storeInfo: '/dcRoadController/findStoreByRoad',    //要货门店
        childModel:{
            'materialId': 'id',//物品id
            'materialCode': '',//物品编号
            'materialName': '',//物品名称
            'spec': '',//规格
            'materialSort': '',//物品类别
            'stockUnitId': '',//库存主单位
            'conversionValue': '',//单位换算值
            'qty': '',//数量
            'num': '',//件数
            'actualNum': '', //实收件数
            'actualQty': '', //实收数量
            'shipQty':'',//发货数量
            'shipNum':'', //发货件数
            'amt':'', //金额
            'price':'',//价格
        }
    },
    //报溢单
	overflowNote:{
		list: '/profitController/findProfitList',//列表
        delete: '/profitController/deleteProfit',//删除
        item: '/profitController/findProfit',//编辑
        update: '/profitController/updateProfit',//更新
        save: '/profitController/saveProfit',//新增
        total: '/profitController/findProfitTotal',//合计
        audit:'/profitController/auditProfitList',
        saveAndAudit: '/profitController/saveAndAuditProfit',//保存并审核
        itemQuery: '/materialController/findMaterialByExactQuery',//物品
        // warehouseMatch: '/warehouseController/findWarehouseByFuzzymatch',//仓库模糊查询
        warehouseMatch: '/warehouseController/findWarehouseByFuzzymatchNoPage',//仓库模糊查询
        searchItem: '/materialController/findMaterialByQuerytype',//子表中的物品搜索
        childModel: {
            "seqNum": "",//序号
            "materialId": "id",//物品id
            "materialCode": "",//物品编码
            "materialName": "",//物品名称
            "spec": "",//规格
            "materialSort": "categoryName",//物品类别
            "stockUnitId": "",//库存主单位
            "stockUnitCode": "",//库存主单位编码
            "stockUnitName": "",//库存主单位名称
            "price": 'purchasePrice'?'purchasePrice':{default: 0.00},//单价
            "qty": "",//入库数量
            "amt": "",//入库金额
            "remark": "",//备注
            "amtNotax": "",//未税金额
            "taxRate": "",//税率
            "amtTax": ""//税额
        }
	},

	//盘点单
    stockTaking:{
        list: '/stockTakingController/findStockTakingByPager',/*列表*/
        item: '/stockTakingController/findStockTaking',/*编辑*/
        save: '/stockTakingController/saveStockTaking',/*新增*/
        delete:'/stockTakingController/deleteStockTaking',/*删除*/
        update: '/stockTakingController/updateStockTaking',//更新
        saveAndAudit: '/stockTakingController/saveAndAuditStockTaking',//保存并审核
        audit: '/stockTakingController/auditStockTaking',/*批量审核*/
        copyToAdd:'/stockTakingController/copyStockTaking',/*复制并新增*/
        total: '/stockTakingController/findStockTakingTotal',//合计 仓库校验
        search: '/stockTakingController/findStockTakingByPager',/*搜索*/
        warehouseMatch: '/warehouseController/findWarehouseListForNoPage',//仓库模糊查询
        itemQuery: '/materialController/findMaterialByExactQuery',//物品
        toShowAll:'/materialController/findMaterialByWarehouseId',  //全部盘点
        import:'/stockTakingController/importMaterial', //导入接口
        /*warehousecheck:'/materialController/findNoAuditTaking',/!*仓库校验*!/*/
        childModel:{
            materialId:'id',/*物品ID*/
            materialCode:'',/*编码*/
            materialName:'',/*名称*/
            materialSort:'categoryName',/*物品类别*/
            spec: '',//规格
            stockUnitId:'',/*库存主单位*/
            /*stockUnitCode:'',/!*库存主单位编码*!/*/
            stockUnitName:'',/*库存主单位名称*/
            factQty:'',/*实盘数量*/
            takingAmt:'',/*盘点金额*/
            checked:'',/*盘到标志*/
            unstockTakingHandleId:'',/*盘点未盘处理方式ID*/
        }
    },
    //盘点确认单
    stockTakingConfirm:{
        list: '/stockTakingFController/findStockTakingFByPager',
        item: '/stockTakingFController/findStockTakingF',
        update:'/stockTakingFController/updateStockTakingF',/*修改*/
        total: '/stockTakingFController/findStockTakingFTotal',//合计
        search: '/stockTakingFController/findStockTakingFByPager',/*搜索*/
        saveAndAudit: '/stockTakingFController/saveAndAuditStockTakingF',//保存并审核
        audit:'/stockTakingFController/auditStockTakingF', //审核
        warehouseMatch: '/warehouseController/findWarehouseListForNoPage',//仓库模糊查询
        itemQuery: '/materialController/findMaterialByExactQuery',//物品
        childModel:{
            billId: '',/*单据id*/
            checked: '',/*盘到标志*/
            costPrice: '',/*成本单价*/
            dbId: '',/*DBId标识*/
            esId: '',/*搜索引擎id*/
            factQty: '',/*实盘数量*/
            confirmQty: '',/*确认数量*/
            id: '',/*唯一ID*/
            locationCode: '',/*库位编码*/
            locationId: '',/*库位*/
            locationName:'',/*库位名称*/
            materialCode: '',/*编码*/
            materialId: '',/*物品ID*/
            materialName: '',/*名称*/
            materialSort: '',/*物品类别*/
            model: '',/*型号*/
            pEsId: '',/*搜索引擎父id*/
            profitAmt: '',/*盈亏金额*/
            profitQty: '',/*盈亏数量*/
            remark: '',/*备注*/
            spec: '',/*规格*/
            stockAmt: '',/*盈亏金额*/
            stockQty: '',/*库存数量*/
            stockUnitCode: '',/*库存主单位编码*/
            stockUnitId: '',/*库存主单位id*/
            stockUnitName: '',/*库存主单位名称*/
            takingAmt: '',/*盘点金额*/
            unstockTakingHandleId: '',/*盘点未盘处理方式ID*/
        },
    },

    //分拣单
    stockPicking:{
        list: '/stockPickingController/findStockPickingByPage',
        item: '/stockPickingController/findStockPicking',
        save: '/',
        delete: '/',
        update: '/stockPickingController/updateStockPicking',
        search: '/',
        audit:'/stockPickingController/auditStockPicking',
        saveAndAudit:'/stockPickingController/saveAndAuditStockPicking',
        getStore:'/stockPickingController/findMaterialStock',
        warehouseMatch: '/warehouseController/findWarehouseListForNoPage',//仓库模糊查询
    },
    //调拨单
    allotmentSheetone:{
        list:'/transferOrderController/findTransferOrderList',
        item:'/transferOrderController/findTransferOrder',
        delete:'/transferOrderController/deleteTransferOrder',
        save:'/transferOrderController/saveTransferOrder',//新增
        update:'/transferOrderController/updateTransferOrder',
        audit:'/transferOrderController/auditTransferOrderList',
        saveAndAudit: '/transferOrderController/saveAndAudit',//保存并审核
        copyToAdd:'/transferOrderController/copyTransferOrder',//复制并新增
        total: '/transferOrderController/findSummaryData',//合计
        search: '/transferOrderController/findTransferOrderList',/*搜索*/
        itemQuery: '/materialController/findMaterialByExactQuery',//物品
        searchItem: '/materialController/findMaterialByQuerytype',//子表中的物品搜索
        warehouseMatch: '/warehouseController/findWarehouseListForNoPage',//仓库模糊查询
        childModel:{
            seqNum:'',//序号
            materialId:'id',//物品id
            materialCode:'',//物品编号
            materialName:'',//物品名称
            spec:'',//规格
            materialSort:'categoryName',//物品类别
            stockUnitId:'',//库存主单位
            stockUnitCode:'',//主单位编码
            stockUnitName:'',//主单位名称
            qty: '',//数量
            amt:'',//含税金额
            price: 'costPrice'?'costPrice':{default: 0.00},//单价
            taxRate:'',//税率
            amtTax:'',//税额
            amtNotax:'',//未税金额
            remark:'',//备注
        }

    },
    //物品档案
    goodRecordApi:{
        // list: '/materialController/findMaterialList',
        list: '/materialController/findMaterialByFuzzymatch',
        item: '/materialController/findMaterial',
        update:'/materialController/updateMaterial',
        save: '/materialController/saveMaterial',
        delete:'/materialController/updateMaterialToDisable',//停用、启用
        search: '/materialController/findMaterialByFuzzymatch',//物品明细物品查询
        supplySearch:'supplyInfoController/findSupplyInfoForNoPage',
        boomSearch:'/materialBomgroupController/findMaterialBomgroupByFuzzymatch',
        byClass:'/materialController/findMaterialByClassId',//分页
        byClassNoPage:'/materialController/findMaterialByClassIdNoPage',//不分页
        orderCycle:'/orderingCycleController/findOrderingCycleByFuzzymatch',
        unitList:'/unitInfoController/findUnitInfoForNoPage',
        warehouseMaterial:'/warehouseController/saveWarehouseMaterialList',
        searchByName:'/materialController/findMaterialByFuzzymatchOfBank',
        getMaterialInfo:'/materialController/findMaterialByAuxiliaryId',
        getCode:'/materialController/generatedMnemonicCode',
        import:'/schedulerController/saveImportMaterialSchedule',
        scheduler:'/schedulerController/findSchedulerByTaskId',
        checkName: '/materialController/materialNameCheck',
        RecordTree:'/materialClassController/findMaterialClassTree',//获取物品档案的树形数据
        childModel:{
            // materialId:'id',//物品标识
            materialCode:'',//编码

            materialName:'',//名称
            storeId:'',//门店标识
            storeCode:'', //机构类型 
            storeName:'', //机构名称
            maxStorageAge:'',//最高库龄
            stockAgeWarnDate:'',//提前几天进行库龄预警
            qualityPeriod:'',//保质期
            stockSubjectCode:'', //在库会计科目
            onorderSubjectCode:'', //在途会计科目
            safeInventoryDays:'',//安全库存天数
            warehouseId:'id',
            warehouseCode:'',
            warehouseName:'',
            warehouseType:'',
            warehousePro:'',
            isWarehouseDefault:'defaultWarehouse'
        }
    },
    // 去分配仓库
    toWareStore:{
        list:'/warehouseController/findWarehouseMaterial',  //去分配仓库
    },
    //计量单位
    unitInfo:{
        list:'/unitInfoController/findUnitInfoByFuzzymatch',
        // list:'/unitInfoController/findUnitInfoList',
        save:'/unitInfoController/saveUnitInfo',
        update:'/unitInfoController/updateUnitInfo',
        delete:'/unitInfoController/deleteUnitInfo',
        search:'/unitInfoController/findUnitInfoByFuzzymatch',
        searchAdd:'/unitInfoController/findUnitInfoByFuzzymatchOfBank',
        copy:'/unitInfoController/findUnitByAuxiliaryId',
        checkName: '/unitInfoController/unitInfoNameCheck',
        childModel:{
            unitCode: '',/*单位编码*/
            unitName: '',   //计量单位名称
            unitEng:'',/*英文名称*/
        }
    },
    //采购合同
    agreement:{
        list: '/purchaseContractController/findPurchaseContractList', //列表
        item: '/purchaseContractController/findPurchaseContractById', //通过id查询
        delete: '/purchaseContractController/delPurchaseContractList', //删除
        update: '/purchaseContractController/savePurchaseContract',
        save: '/purchaseContractController/savePurchaseContract', //保存、修改、审核
        release: '/purchaseContractController/releasePurchaseContract', //解除合同
        pause: '/purchaseContractController/pausePurchaseContract', //暂停合同
        copyToAdd: '/purchaseContractController/copyPurchaseContract', //复制并新增
        storeInfo: '/dcRoadController/findStoreByRoad',    //要货门店
        childModel:{
            'materialCode': '',//物品编号
            'materialName': '',//物品名称
            'billId': '',//单据id
            'esId': '',//搜索引擎id
            'pEsId': '',//搜索引擎父id
            'seqNum': '',//序号
            'materialId': 'id',//物品id
            'spec': '',//规格
            'materialSort': 'categoryName',//物品类别
            'unitId': '',//采购单位
            'unitCode': '',//单位编码
            'unitName': '',//单位名称
            'stockUnitId': '',//库存主单位
            'stockUnitCode': '',//主单位编码
            'stockUnitName': '',//主单位名称
            'conversionValue': '',//单位换算值
            'purchasePrice': 'purchasePrice'?'purchasePrice':{default: 0},//含税采购进价
            'taxedPurchasePrice': 'taxedPurchasePrice'?'taxedPurchasePrice':{default: 0},//未税采购进价
            'taxRate': '',//税率
            'addList':[],
            'itemNum':''
        }
    },
    //采购合同 适用机构
    storeAgreement:{
        childModel:{
            'storeId':'id',
            'storeName':'',
            'storeCode':'',
        }
    },
    // 采购调价单
    priceRevise:{
        list: '/adjustPriceController/findAdjustPriceList',//列表
        item: '/adjustPriceController/findAdjustPriceById',//编辑
        save: '/adjustPriceController/saveAdjustPrice',//保存
        delete: '/adjustPriceController/deleteByList',//删除
        update: '/deliveryOrderController/updateDeliverOrderShip',//更新
        saveAndAuditBefore: '/deliveryOrderController/saveAndAuditDeliveryOrder',//保存并审核1
        saveAndAuditAfter: '/deliveryOrderController/saveAndAuditDeliveryOrderBath',//保存并审核2
        total: '/deliveryOrderController/findDeliveryOrderShipTotal',//合计
        itemQuery: '/materialController/findMaterialByExactQuery',//物品
        road: '/dcRoadController/findDcRoadList',//线路
        warehouseMatch: '/warehouseController/findWarehouseListForNoPage',//仓库模糊查询
        audit: '/deliveryOrderController/auditDeliveryOrderShip',//审核
        searchItem: '/materialController/findMaterialByQuerytype',//子表中的物品搜索
        copy:'/adjustPriceController/copyAdjustPrice',//复制
        storeSearch:'/dcRoadController/findStoreByRoad',//机构下门店
        storeSearchByRoad:'/dcRoadController/findStoreByRoad',//根据线路查询门店
        childModel: {
            materialId: "id",//物品id
            materialCode: "",//物品编码
            materialName: "",//物品名称
            spec: "",//规格型号
            stockUnitId: "",//库存主单位
            stockUnitCode: "",//主计量单位编码
            stockUnitName: "",//库存主单位名称
            unitId: "",//采购单位id
            unitCode: "",//采购单位编码
            unitName: "",//采购单位名称
            conversionValue: "",//单位换算值
            originPurchasePrice: "shippingPrice"?"shippingPrice":{default:0},//原采购价格
            newPurchasePrice: "",//新采购价格
            auditBalanced: "",//价差
        }
    },
    //差异处理
    difference:{
        list: '/distributDiffController/findByPage',//列表
        total: '/distributDiffController/findTotal',//合计
        processDiff:'/distributDiffController/processDiff',/*批量操作*/
        childModel: {
            // id:'',
            // billNo:'',
            // sendStoreId:'',
            // sendStoreName:'',
            // sendStoreCode:'',
            // receiveStoreId:'',
            // receiveStoreName:'',
            // receiveStoreCode:'',
            // sendWarehouseId:'',
            // sendWarehouseName:'',
            // sendWarehouseCode:'',
            // receiveWarehouseId:'',
            // receiveWarehouseName:'',
            // receiveWarehouseCode:'',
            // sendBillId:'',
            // sendBillNo:'',
            // sendBillType:'',
            // receiveBillId:'',
            // receiveBillNo:'',
            // receiveBillType:'',
            // materialId:'',
            // materialCode:'',
            // materialName:'',
            // materialSort:'',
            // price:'',
            // sendQty:'',
            // receiveQty:'',
            // differentQty:'',
        }
    },

    uploadfile:{
        import:'/purchaseOrderController/importMaterial',
    },
    selectData:{
       storeList:'/dcRoadController/findStoreByRoad',//门店

        agencyList:'/storeInfoController/findStoreInfoFoNoPage',  //配送中心下拉
        roadList:'/dcRoadController/findDcRoadList',  //路线名称下拉
        warehouseList:'/warehouseController/findWarehouseListForNoPage',  //仓库名称下拉
        MaterialsList:'/materialController/findMaterialByFuzzymatch',
        SupplierList:'/supplyInfoController/findSupplyInfoForNoPage',
        orderCycelList: '/orderingCycleController/findOrderingCycleByFuzzymatch', //订货周期查询下拉
        materialUnit:'/materialController/findMaterialUnitByMaterialId',
        itemQuery: '/materialController/findMaterialByExactQuery',//物品名称下拉
    },
    user:{
        login:'/loginController/login'
    },
    //通用模块可以写在这里
    common:{
        printData:'/printCountController/updatePrintCount',
        checkStatus:'/loginController/checkStatus',
        login:'/loginController/login',
        seachList:'/storeInfoController/findStoreInfoFoNoPage',/*配送中心 列表 */
    }
}

export default config = config;
