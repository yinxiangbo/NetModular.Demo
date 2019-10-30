import WebHost from 'netmodular-module-admin'
import Common from 'netmodular-module-common'
import CodeGenerator from 'netmodular-module-code-generator'
import PersonnelFiles from 'netmodular-module-personnelfiles'
import Quartz from 'netmodular-module-quartz'

import config from './config'

// 注入模块
WebHost.registerModule(Common)
WebHost.registerModule(CodeGenerator)
WebHost.registerModule(PersonnelFiles)
WebHost.registerModule(Quartz)

// 启动
WebHost.start(config)
