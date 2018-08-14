import faker from "faker";

export default {
  namespaced: true,
  state: [
        {
          "user":faker.helpers.userCard(),
          "roadInfo":{
            "title": faker.lorem.sentence(3),
            "description": faker.hacker.phrase(),
            "type": 1
          },
          "routes": [
          		{
          			"geometry": "uumfGawtOkKqJcB{AQOgD_D][kAcA{HsHsJqIcAsASw@Cg@Rc@VWpDw@HCLCz@QnBQ`J{ApB]x@K\\@^HZPR\\Jb@Bn@Ed@Q^MVSLUFYB]GOISSO_@OeAWaD[gDSw@g@{Gq@uIMcBa@{FSeDU}DUyFIiBG_BIeDIiDGeGCsEAwG?_NB{M?iLBcRBiZBy[ByN@cO@cLAgLEgECaEKyHO}FSyGY{Hc@gKUaGS_GEyBCuBC}DBsDHeFFiBJkCLaCVqDZmDd@mEj@_En@cEfAuGRoAtBgMx@wFp@aFn@kFl@}Fd@cFX}DXmEX}EP{DLcDPmGNkHHyGRoNHaDJcDNsCVsDXuC`@}Cd@{Cr@uDr@eDd@iBl@}Bl@sBrAgE~AiFnAeE|AcFpCcJ`C}H~E{OzGwTz@sC`C}HfCgI~IuYxEuOxHaWbAqDn@sCh@kCd@{Cb@qDR{BLkBLuCHoC@qCAwCG}CMuCQiCS_C]sCe@}Cs@oDo@iCs@eCw@aCaAmC_B}DuBsFm@gBe@{Ak@wBs@cDi@yC_@kC[uCUwCOmCI}CCcC?eDFeELwDN}ELsEBsCAgDGsCOmDS{CYeDe@{DiAaJeA}I{AgMeA_JyBmRaAsIe@uD[}CSoCO{BIgCEoC?qCFmCPsDV}Ch@mFt@}G\\iERwCJ_D@iCAaDIoCOmCWcDc@oDg@{Cc@qCe@sCe@aD]gCWkCUgEKoD?oCBsCL{CNyBX_D^wCb@oC\\aBh@_C~@uCn@_Br@eBlAaCnAuBxA_CpDyFrAaCl@iAbAyBf@qAl@kBz@yC\\cBp@mDb@aDXyCTwCX_Fp@cLNmCb@mHVsE\\eGbByYp@kLp@oKPeCt@eJ\\cE\\iBVwAZcANk@d@aAl@eA`@g@v@q@v@i@bAa@v@SpAKv@BbALdATjKbDvAh@dBn@xB~@jEjB~DvBhFnD~CbCxCjCzDxDzChDjEtFbE~FtJvNxVz^|DjFjBzBxDbEpBdB~BdB~BvAdBz@pBx@lCz@bDv@tEbAtEjArDpAvClAlB`A~A`A`BdAtAbArCzBvCvCnAnAz@t@f@v@RVX^RRZV`@\\r@t@@LAFAHUNIBIAIEO[IKSM]YaAw@OEUDYHOCGGEIGA_@AWKSb@QdAGrAAz@@`@VvFEZUGWKSIE^Nl@Bz@Db@L\\DX?FCxACjBAvBOlB?j@Fj@Jn@TfAXnAj@nBP|@Cn@?`@@jEFpGCf@?d@Dx@RdBPdAHn@BdA?pDF|AJzARvAj@dCXjAVd@??x@`An@`ARrANpBVbBXjAn@~BZ|B^fCFxAf@nA\\b@f@vBTx@Tl@JnADdBK~AQj@Pk@J_BEeBKoAUm@Uy@g@wB]c@g@oAGyA_@gC[}Bo@_CYkAWcBOqBSsAo@aAy@aAWe@YkAk@eCSwAK{AG}A?qDCeAIo@QeASeBEy@?e@Bg@GqGAkE?a@Bo@Q}@k@oBYoAUgAKo@Gk@?k@NmB@wBBkBByA?GEYM]Ec@C{@Om@D_@RHVJTFlBd@jCj@^F`BZ`Ch@tAZvDv@lCj@RFXJv@`@TP|KtHHFjAv@vHjFtA`AdAn@`@Rf@Tj@Nf@Nd@H\\Dh@Dp@Bp@Cz@If@Il@M`AYf@S`@Qd@YnA}@xAmAj@c@l@]t@a@PGRKJCt@Sh@Ij@Ij@Gn@A~B?dFCnICdHCXBd@?h@Dd@Dp@JbAZpEdBvAh@lEfBTJxClA~F|BbC~@h@Rf@N`@JVDrANpBRbGj@bHr@jCVhHr@bGl@zCZ`AJrD\\jAJ~@Fb@@\\?^A\\C\\Eb@I`@Mf@Of@S\\Q`BaATMXK^MVIb@If@Gj@Cd@?d@B\\Dh@J^Jp@Vd@Vp@f@jDrC`CpBpD`DxI|Hn@t@P\\DR?LQ`@q@r@Y^m@x@i@dAUr@On@UlAIr@EjABhEJnAXjARl@jAfCz@jBVr@HXBLz@|ExEpKVp@TbAXzAFf@N|@Lh@Ld@Xv@Zr@\\p@|A|BRXtAlBTd@Rj@dA`ERl@z@pAtE|GXb@dAnBV`@~@|@LRPVnAhBZ`@l@`ApBpCfBdCL^FV@l@]nEQvBKpBMdC?x[Dv@BXf@rDnQrn@nDdMLb@jJfd@p@fDbErNhA`Eh@fBPl@nAnE~ExPh@nBnEpOFp@@n@In@Oh@S`@Y\\]Na@F_DH}@z@s@fBQdBCnBBhCbDhZj@tC??z@jBnLjQVxCSfCo@fCoBzE_AxDGtBn@zFKfETjAx@pAp@d@j@NjBHdCJ~APjAP`AX`BhA|@\\`Bb@lDx@xFhBPLNRLZHh@FdAPtL@ZT~EGhEm@lEaAtDEfBNbQ`@jExBxI@pA_@l@_@ZaG`Eg@z@kBdHa@zABjB`AnD?~@Iz@k@|BBxAb@pAnCxC\\x@d@lBb@r@nGjEPBBLv@nCl@fCJ`AOv@w@z@{@p@u@d@o@R_@POFi@t@k@r@SX_@l@E~@Db@RxA@f@I^MZQTSNQB}@@s@Zw@tA{@nBYl@UTg@^OJaAx@mAzA}C`DaBtAy@f@uAf@aF`BiAr@y@~@OPeAtAsAhC_BzDw@hAoAjAiA`Ao@~@sKhSe@j@o@L_@?_AEaA?k@PSF}@`@cCfA_Bt@cAX_FlAQD]Fo@?k@QQOGGq@y@e@a@cAc@qE_A}@QwBe@kAIwAPe@LqA\\sB`A}@f@{EpCqIbFyJ|Fa@Vm@h@_@t@UzASpCUbBi@lA{@|@qCdBuJlGcNbJc@ZgIdGoBxAiBpAg@`@iAz@qJlHiAz@mBvAsEtDwAxBgAlCuCzGmChEeA`BY`@wDxFqDrFiAbBoAlBqE~GeDtDeDrDeFvFqJhKoLpMgGhHeFpICB}CjFqBfD}AjCaEzGq@jA}B`E]f@c@p@{A~B[l@ABgArBk@hAKRK`@Gf@En@AhA@r@?ZA`AEv@?FATEr@EZCVQp@]lAQh@K\\]nAqApEUbAy@jCiAtCgAdCo@vAaA|BeAbCoBtEiBhE}AdD_@l@y@z@iAdAqApA_@Z{@t@a@b@k@b@WVEDMRIV?R?N@d@Jp@tAtJdB`MvDpRxBbLpGh\\Dl@Gd@Wh@YVw@@{DAoF?a@H[PUPuEzDgBzA{ClCYVYRSLMF_@Ja@Ho@RIBQLg@b@sA|Ac@d@oBbCwA`BoA~A{@`Aw@r@_@Ti@JwAJc@AYGi@_@k@m@]Y_@Wk@Mm@EsAFaANuAn@oAt@uAjAuAvAy@p@q@T}@NiARiAN_A?iAMk@Ki@[_@q@M}@EiA?y@IqAQcBM_@Yw@s@aAo@_@q@Eg@@y@P_AX}@p@q@`AWVc@d@mB`AyE`BkI~CaDrAYLmFbD{FrDgC~AaBbAgBfAKFkAtA}@lAaArA{AnAiE~AqC|@cBt@_CxAa@HkDf@mLxA_BTgBXGBy@JYBq@Jw@HmAReAJu@Jg@HODk@Fm@Fc@H]FYDYHe@LCBIDa@ZOBKAe@AMFi@pAGNQb@Wr@s@nAcBlDoCdGADy@zAm@Mu@MEA_@GmB]yDo@wEs@uCc@gGeAaAe@iA_AkE_EkAgAWS_A{@aBsA{BuB][_A}@uCqC}WeU}FkF",
          			"legs": [
          				{
          					"summary": "",
          					"weight": 1413.6,
          					"duration": 1315.1,
          					"steps": [],
          					"distance": 28797.1
          				},
          				{
          					"summary": "",
          					"weight": 2082.3,
          					"duration": 1658.9,
          					"steps": [],
          					"distance": 14784.9
          				},
          				{
          					"summary": "",
          					"weight": 1806.3,
          					"duration": 1795.9,
          					"steps": [],
          					"distance": 23542.9
          				}
          			],
          			"weight_name": "routability",
          			"weight": 5302.2,
          			"duration": 4769.9,
          			"distance": 67124.9
          		}
        	],
        	"waypoints": [
        		{
        			"hint": "-ycvgZe5mIRfAAAAgQAAALUBAAAAAAAAYqsqQ0RhhUNbpkJEAAAAAF8AAACBAAAAtQEAAAAAAADSpAAADLMpACqmkgJ4vCkAgKGSAgUALwJ5qhm8",
        			"name": "",
        			"location": [
        				2.732812,
        				43.165226
        			]
        		},
        		{
        			"hint": "8QyIgvUMiIIAAAAAIAAAADsFAAAfBwAAAAAAACPRo0H45pRDhCqoRAAAAAAgAAAAOwUAAB8HAADSpAAALdIsACPhkQJ6ySwA5-aRAgcAHwN5qhm8",
        			"name": "",
        			"location": [
        				2.937389,
        				43.114787
        			]
        		},
        		{
        			"hint": "CY58gmFzhYIAAAAAIQAAABQEAAC_AgAAAAAAAGIag0ITcAJFp2hyRAAAAAAhAAAAFAQAAL8CAADSpAAAUtArAI_lkAJczSsAxemQAh8ATwR5qhm8",
        			"name": "",
        			"location": [
        				2.871378,
        				43.050383
        			]
        		},
        		{
        			"hint": "-ycvgZe5mIRfAAAAgQAAALUBAAAAAAAAYqsqQ0RhhUNbpkJEAAAAAF8AAACBAAAAtQEAAAAAAADSpAAADLMpACqmkgJ4vCkAgKGSAgUALwJ5qhm8",
        			"name": "",
        			"location": [
        				2.732812,
        				43.165226
        			]
        		}
        	],
        	"code": "Ok"
        },
        {
          "user":faker.helpers.userCard(),
          "roadInfo":{
            "title": faker.lorem.sentence(3),
            "description": faker.hacker.phrase(),
            "type": 2
          },
        	"routes": [
        		{
        			"geometry": "izsfG{mgLa@w@ISu@uCa@iCCq@m@}A}@gCsAkDW_AOq@S_@a@g@_C{@{@c@yCiEaImEc@}@W_BJeF~AiKPmKGsJm@{DJ{GiAaIWwB?UJkAJmEP}EGeCSeH@oDCyB@g@@iARyBNoA@aB?S^wBr@iDF]NmADiABcAPy@ZgAdAwDLw@@QAIZYf@k@r@mAlBcDN]J]E_@IYs@e@GCu@eAKWEYBqA?]BcARuQF_@FEBE?E@GAICECECAKc@?_A?gCp@wDrAiJRaBTqD\\aFA{@SaBc@mCmAyIGiA@KDw@~@mFf@iAfBeDf@qBZoDNkBVe@d@WdAOzAa@`By@nAeAbB{BnAmAxC_E~EwEzCgClFwKbAaDtAeCnAsCf@}@b@c@rAe@~@e@j@m@fEkNVgAZaEX}CBo@KeF?m@LcAd@kAHOj@}@BClC}CDGTa@R[hAoF^kCZ}BR_B@GDYTuBd@aH?GNwDFkEDwFNkH@mD`@wHPiEdB}NBg@F{AsAwCeAeCa@oAAIG{@FqAHk@Fe@BMTsADSJD^Pr@NPB^J^JhA\\`Bj@f@Xb@Tr@^VPNHPBN?LEJKX{@bAuENq@d@s@r@s@`Aq@r@i@h@c@Za@Tm@\\gBj@kDd@kBrCeIt@eClBmFt@mAd@k@Rm@PsAh@mDXkBRmAV{AnB_O\\_C~@iDn@cCPw@Ny@ZmCPiALu@ZcAxAeEL]FOp@wBn@wB\\aBX{BTu@xAqEnA}EdA_Ex@yCrAcEt@iBx@{ANYNSrAwBVk@Rg@H]Jq@n@oG|@iKJ}@BWdARjCNfB^~Bt@fBv@rL|F~CxA~JvEzBxAjAtAlArBdC`F\\h@R^l@z@v@z@`BnAvGfDzEhC~GrDdB`AtAh@t@Nz@F|@?hAKdAWx@[bI}ClEcBhNsFjC_AhCaAnAm@bAq@z@}@t@iAb@{@d@mAdAsCxAuD~AiEv@{BZw@f@mAd@mAp@yA^o@f@o@b@e@v@m@j@[l@Wx@Sx@Iz@An@Bz@LhEtA`DhAb@LjBl@|FzAn@PxA\\tAZxBTxACtAUtAe@vAs@bF{CvFgDpAi@z@Oz@Gx@JtAd@j@b@f@j@h@v@`@~@pAvDlApDdAzCj@dBxAnE|AvE\\bA`AzCVf@~@vBpAfCtChFlE~HnE`IvCrF\\f@x@|ARf@L`@EP@V@NDHFHJDL@LAJKDEBKD]\\Ub@KzBg@`B]^OTKXYT]Vg@Vw@j@qBPa@Ta@Z_@VUzGoE~ByAdAu@NpAfArITpAFp@?p@Gv@[pCIrA@t@NdBRjBNfBBpB?fAAn@FbAVvA\\nAV`AZfBNtAZvDZ`DNz@ZnAd@lBZ`Bf@tBnAtD`A`Cd@|@dC`Ej@dAn@nAJPpCjF`EzGZh@~DhGzBxCj@pAt@lC`@~AT^pB`DnAvCj@bBZp@VnBb@`B\\fAXlAPbBN~AT~@Zt@DP?RGRO`@Qd@A\\@XHVd@dAzAfDjBhElAdCr@bBtA|Cv@fCz@jCp@xA\\dAVl@R`@Vp@`@rAr@~AlBnCpAdBd@^d@NXDd@^Ht@@\\Af@C^CZDd@Nf@b@t@h@|@z@tB`@`B`@~Av@dDTbBL`BFdAJ~@XbAZfCd@dBh@bDb@|BPlAN~@JpAR~CFz@Fz@Lt@V`Az@xBx@vAjAdBrAtAhD|CtAjAnAf@fAf@z@f@B@p@b@b@XzAfAf@Vf@R~@RLBZHJ@|@LlBHr@HrDdB~Bl@z@NbARhCRd@FR?D@lAK|@M`@ENAbBMPCLGROFMFSl@{B\\kABIV{@Pc@BER_@b@i@`@g@r@w@FQN[\\w@Ty@@ELYHGFEPG`BhAXPh@TdA`@JDVFFB^JnA\\~@^RDNARWTb@^b@lBrBj@t@PP~A~Af@f@fAnAnA`ADDhDlC~@l@|C|AvBbA`ChAbB`A`@b@B^PNPCNM\\D|FtCdDdBhBx@l@Nf@Fh@Dx@Dt@@b@BfANL@TB^HVTNRJVF`@?f@CZIrAAdB?nCD`@JVpBv@l@ACHBH|@VnBt@FBDAXNr@VnDdAh@PJBNDdAl@NLDDnAdARNr@h@x@Np@FVHVMrEc@t@Ir@?B?ZDj@Rp@\\X^L|DHlEJzCHp@TpADF`AhDb@tAj@|BHRFT~AnFDP@Dj@~BBX@J?P?HTDXD`@R\\LDDNBHGFK?Q^q@@Aj@q@fAqAdB}B~@}Ab@_ALRRX|@vAFb@H~@Ph@Jh@Rh@^zBTr@f@xBb@nB^lBv@zCf@ITJhAdBr@\\hCk@p@dAfAz@tAXZ~@n@XzBb@??b@bAKjABj@Dn@~@nDfAdBjAvANhATDn@WNFX`AxBdAr@V`@`@HQAOEUAMDYTy@HKTITTUUUHIJUx@EX@LDT@NIPa@a@s@WyBeAYaAOGo@VUEOiAkAwAgAeB_AoDEo@Ck@JkAc@cA{Bc@o@Y[_AuAYgA{@q@eAiCj@s@]iAeBUKg@Hw@{C_@mBc@oBg@yBUs@_@{BSi@Ki@Qi@I_AGc@}@wASYMSc@~@_A|AeB|BgApAk@p@A@g@\\EEGAKBIJe@BU@YEUEWGIC{Be@cAMcASUG]Ik@Oa@CKDe@LOB_@BoA?kCWqBQsAE_AY}@c@uAy@a@Qq@YgA[KCg@SIEe@d@GFcAv@o@POJSFgGvBc@RgA`@eC~@QFSH[Li@PgCz@{Br@a@ZSTEb@@b@R`G@bCShAc@lAkDjJGn@GGMBMPCXDNiIfTkA`DiA`C{CxFgClEiAtBu@nAuAlB_Ar@iAj@sDhA_@R{@r@k@p@ILWb@}@`C{@hCoArBa@\\oFpCkPrI]Vg@b@SRuArBMP{FnI{ClE}D`Gs@v@]POBM@o@?S?q@Cu@Gy@QcBa@m@Qg@C[?a@D]Hs@f@o@~@kA`Dk@rAyTx^aItMiDvFcDrF}@zAU`@KPIJMFM?WAcCOW?G?EBCBCBAHQhAAFCRIb@G^ER?BKZGNY`@mHlEmDvBs@`@{IfFsXlPoCdCaJ~MwCzEcB|DuBrG_EpLmAnDo@pCQfAMzAEt@KvFQ|BEr@Il@GZi@fBm@zAuAnDmAbDuArDMZO`@a@fAi@vAi@tAcAjCaA~BaApDyAxJsKvs@gCxPm@dDMd@O^INILyApBu@z@_Q|S_QxSUTeMlO{ClD]Z_CtA}C~Au@^s@ZmBl@{Cb@{AJsALq@SOUQCQLGR{@JuBK}Dq@cDy@iD}@cDoAm@YcAi@yFkCWGWE[AU@SDWLSNe@b@i@h@gS~RIH{JvJiEfEu@p@a@Z]RYN]JkAXuWlFgARa@DW@U?WE]IoHwByDmAk@O}Bs@a@Ia@Ge@A]@_@B]F_Dr@WBY@UAWE[Iw@]}OsHe@W}@]]GSES?g@Fe@L[GaC^gBZoADc@AUGWIgEyBiAgAoB_Dq@[{@Qg@?_Cp@eAl@wAx@w@p@yDxEa@\\]V_@Pc@HmI`AaIdAaGLaBFyDHs@Eo@O}@_@kAg@eHkDmDyBwA_A_@YaBqAc@_@uMyNIGoAs@kBk@sCa@oD@cN`CmD`@mKQoAW@{A@yJ?eAFaH?k@@uCBeFBuGIsDOuACOk@iCOs@}BoKaAkE}AmHcD_Ou@uDm@kAeA{@[MYEM?OBKDOLYZOJUNi@XYPMLQVSXa@r@SPQDQBO?QGMIMMOYIYKk@G_@AK?SB]Ji@l@yBTeABYAUAUUs@Wu@K[a@wBm@cFIy@OuAIiA?]?k@DmAXw@j@uB@GbAeDd@sAPg@HM^u@^m@BEy@uAgBqCQOKmBB}BBMPq@`@yAf@aD@Eb@gCp@_CBKbAgCj@oAh@}@tBsBpAwAbBiBNa@AiAEaBHuBl@iCfAaDzCuFzDkFl@eABi@AoEHsEI_@]Yu@m@Yu@McA@wAf@oC`@o@d@a@JUYaAqAqEYqC_@kB_ByBwAcAWSu@cAMe@OmAE{@Fy@XaAAg@WuC?aBG_AU{@AE",
        			"legs": [
        				{
        					"summary": "",
        					"weight": 1710,
        					"duration": 1615.5,
        					"steps": [],
        					"distance": 22380.6
        				},
        				{
        					"summary": "",
        					"weight": 1032.6,
        					"duration": 905.9,
        					"steps": [],
        					"distance": 9467.2
        				},
        				{
        					"summary": "",
        					"weight": 3112.9,
        					"duration": 2396,
        					"steps": [],
        					"distance": 27958
        				}
        			],
        			"weight_name": "routability",
        			"weight": 5855.5,
        			"duration": 4917.4,
        			"distance": 59805.8
        		}
        	],
        	"waypoints": [
        		{
        			"hint": "wUJ0ghf0B4MDAAAAHQAAANMCAACdAAAAD1pBQNBA50EbtzREr9prQwMAAAAdAAAA0wIAAJ0AAADSpAAASykhABQhkwLHKCEAiiGTAhIALwN5qhm8",
        			"name": "",
        			"location": [
        				2.173259,
        				43.196692
        			]
        		},
        		{
        			"hint": "UKnngZOF64I1AAAADAAAAAgBAAAJAQAA6fi2Qq9Ei0HLzd9DkmZOQzUAAAAMAAAACAEAAAkBAADSpAAAYpEiAEO3kQJKiiIAr7yRAgsA7wJ5qhm8",
        			"name": "",
        			"location": [
        				2.265442,
        				43.104067
        			]
        		},
        		{
        			"hint": "lTPAgEQ9wIBHAAAAAAAAAI4BAAAjAAAAz4eNQgAAAAASVsdDjdqxQUcAAAAAAAAAjgEAACMAAADSpAAAN7IhAJTYkAJouSEA7tWQAgoA_wt5qhm8",
        			"name": "Chemin du Taich",
        			"location": [
        				2.208311,
        				43.04706
        			]
        		},
        		{
        			"hint": "wUJ0ghf0B4MDAAAAHQAAANMCAACdAAAAD1pBQNBA50EbtzREr9prQwMAAAAdAAAA0wIAAJ0AAADSpAAASykhABQhkwLHKCEAiiGTAhIALwN5qhm8",
        			"name": "",
        			"location": [
        				2.173259,
        				43.196692
        			]
        		}
        	],
        	"code": "Ok"
        },
        {
          "user":faker.helpers.userCard(),
          "roadInfo":{
            "title": faker.lorem.sentence(3),
            "description": faker.hacker.phrase(),
            "type": 1
          },
          "routes": [
          		{
          			"geometry": "kapgGwdsRA@zB{@HCLEn@t@RRBBLNAF?DBFBBD@BABCBG?GCGCEHYR{@LKhA}@NKLIdBqAPKlHoFb@YDETQDIDKHgA@mA?ABe@bAuKFWFUFOBIDIHEFGDKBK@QCOEOGGGEIKGMAQGeAIwDEcAAS@a@@g@BOD[H]J[J[fAuCXa@~AgDJOHEH?FCDEBGBI@KAIBQDODO~A_DN_@Rm@VaA^}At@mD@O?O?Y@M@MFMBOHSLQJUpB{IZeB|BeKz@}CV_AL_ATe@HO@ULm@XeA|@cD~@_C`AiBnC_Ej@s@tEwG`CkDfB{CrBmDx@_Al@g@l@Yl@QjAQ`@K\\Or@g@Zm@^aAVgAZyATkBD_@Fm@LqC@yBAiDAkBEiIS_j@?wE?IBeA@QD]lFcc@tEa^\\eB~BaSRcE?IA_B?wDHi@JQDS?WCUGOIICWCUCe@IgBIiBGsCE{CAm@GiFGwFKaHAg@?c@BWD]DGFOBK?K?KCICGCGKIG[EcAEkACcBGgFDuAF}@H]L[RCh@ORSLMHMRe@Vs@Pw@Dy@?a@E_@G[GUEKOs@Gm@Ae@Dg@vCuOVuAbBsJt@wDbAmF`@gCPcAp@sDpAyIfCuQhA}HTiAXkAb@oAdBqEbAiC^oAb@_CNgAXaCVcFVaFP_Ff@uKb@}Jb@yKJ{ET{E`@qJN_DFyB?uASwPUiSIyHUgO@wBMsLG}HQsHy@it@MgGCiMCwBEgEDm@F]HQBUAQIOOe@E_@AaCCgB]oQW_Ta@i]AiACuGAwAI{LUmPKeBC}BB_DZ{ChFy`@h@mDvHoi@jAiIFUj@}DfAyHLw@Ha@PcANy@~@yFtAsG~AyGxB_IjCiJTu@fBmG|CwK\\uAT}@RaAPaANoAJkAF{@FsABoA@{ACs@Ay@Cu@KcBIuAM}AUuCSaCUgCS}Be@aG]yDKmAMmAQkASgAYkAs@gCmAcDoAeDeAuC[eAQy@Q{@QkAKkAGyAEaB@{ABm@@_@LeBPqAd@yBVcAd@{A|@mCX{@Tu@XiAPeAPy@TwAVqBr@_HXqCZoCjAoLh@gFxCaYvAyMj@sDPoAPu@Pi@`@cAb@eAn@oAdCcFJc@@SAQESEUGK[_@m@c@gAeAo@y@[c@[e@_@q@g@iAa@{@oCaGm@uAm@mAqCwEmBcDwEaIg@q@c@_@QIi@Yu@SaAMqA[m@O_Ai@q@]MKI?OKGGKGa@QwA_A[YgAiAOUgDaDKKq@m@yAgBKOIMWWSSgAmAMMSa@C[?YFa@z@{C@GBK@M@MAIAMEKEKa@y@IWWg@AIAKBQBIBKDEBE?I?_@?G?KFMLMBCd@a@T]ZULGLE`ASD?JCTETCNJNDJHTLTLJ@??LJbArAj@aAh@u@g@r@A@k@`An@v@D@f@LXFRDH@JyBF{@RqDBs@kBxAgDhCGIACOOUWI@ICMAQ?UBUDKBE?aARMDMF[T[Pi@b@KNKJIJA?GDCFAF?^?X?\\?NBJBHBHTZNN`@x@DJDJ@L@HALALCJAF{@zCQPMJMDMDM@]?KAyDx@cB\\mBb@E@q@LQ@aHzAu@PKBODc@JMDo@PWHWFq@Xi@Xk@Zk@^e@\\]Z]ZcBnBg_AxfAiCzCe@h@sB`Coi@nn@a`@`d@aF|FmCnE_B`FwBbJyBvH}DrIwB|DOVgAjBaA`BmAhBcAjA_@`@e@`@a@Zg@Z]Nc@LcARcLjBkDl@]BI@IBOJIDEAG@CDCDG?I?KEIAKBGD}Ev@KB}@N}AVSDOB{Cb@a@JK@KBsATqATK@_APyAX}AVWDyHlAm@JcHjAiK`BsDl@mHjAwB^M@o@Hw@Ju@TWHWEKCK?KDGJELAP@NDLFHJDTPFVLh@HXLl@Hb@@b@Cd@a@r@UPU^ITGXWp@m@h@QL]Rc@Zy@n@i@b@QLKPSd@[v@Q^OXKJMLc@Ty@`@w@`@sBdASPQJ_B|@oAn@m@b@KNINIPGVARAV@T@HFj@N^V`@j@t@r@|@V\\R\\NZL`@Nb@Jb@NfAV~@PhBT`Cb@hEVpBRtA~@zFh@~Ct@dDbApEh@pBn@fC~@zCt@|BfBbFjB|E`BlEz@xBr@dBvEpLnI`T`EnKdAnCf@nAj@`Bx@zBzAlEjBfGtB|HbBfH`AfFv@dEt@~Et@vFj@|El@vGZ|E`@xGRpEJdEJxDJhJFfN@`GJxQDzIFhMD|DFfELvDJfCPzCb@rFJlA`@rDVnBf@dD^xBb@|Bh@fCZ|AfA`E~@|Cv@dCx@|BtAjDbAzBd@bA^t@|@fBXh@xBpDjBpCr@dA`ArAj@r@x@`AdAjAdDnD`DdDbBdB`C~BfCjC|AdBj@r@jC~ClCrD`EvG`CpEpCvGpBxFpAdEz@dDxAxGdAtF|@lFnDhWzDrXh@rDxCdTdAtHlErZv@lFZvBVlBt@bF|A|J`@hCZdBv@bEt@vD^`BNn@dAfEh@lBj@fBx@pCp@pBrAjDj@~AfAjCjAdCjBxDrBvDjD`GzBpD~BnDxEtHrB`DzBnDxG~JfKfPtD|FnDvFb@r@xFzIjDlFzCxE~M~SpFtIhAfBf@t@rHrLjHnLhMxTtAnCtEhKpB~EtBtFnApDhAlD|A`FlBdHbAtDvAnGr@bDzA|Hx@nEp@zEp@xEx@vGn@dG`@dEf@hGTjDj@|HXpEPhD`@zGPlCp@`L`@fGLhBPvBRxBV~CRlBFn@b@rDZxBr@tFr@lE~AjJlB`JbC`KxBzHjClI~BpG|A|D`A`CnBnElB`EhC`FnCxElBbDfA`BvB~CdDnEfGtHlFtFhF~E|DdDxEtDxCpBbBfAhBhA|BpAvEdCpFhCdF~BpF~BdDrArAj@bN`GnF`CpFjCbFjCzEnChG~DbGjEpGpFzArAfB`B~@`AvEdFfGjHdAvAbAtAf@p@`CbDxEfHdEtGfKtPrGdKfD`FrD~EbD`ExDvEpGjHhDvDxEjF~KxLxKrL~BhC~L`NvKtLtDlEdFzGdElG~AlC|ApCbC|EhCvFnCxGlAjDbAxCfAlDbApDdA`EfArEfAlFdA`Gx@fFt@`Gx@rHZrDJfAPdCl@fJ`Bh[fAjS`@~G\\xERjCZ|Cl@hFVlBx@`Fr@nDdAxEjBvGfAlDpAjDrB~E~A`DbB~CnBdDpBrC`C|CfCtC|@~@vAtApDvCjBvArD~BdB~@fB|@nCnAtEfB|EdBlBp@nBp@lAb@hFjB~CrAtCrAhBbAf@VnCdBxB|AzBhB~BtBrDvDrA|AjEvElEpEpDnDpD`DlJjI~@z@|GbGrApAtArAdDfDfG~GfGpHnE`GbEfGjDtFjAjBrC`FbCrErB`EhCnFfCzFrB`FhCxGzAjEd@nA^fA~BlHtDnMp@hC^xAxAdGtAbGjAfF|AtGpAbF|@dDnB|G^jAvBzGtA~DbApCrApD`@hAbBjEr@lBnAnDdA|CtBnGt@zB?f@Dd@@d@Ab@E`@Qd@Yf@WX_@Lm@Fk@KkAYmBmAkBoAiAq@{@k@MKUa@Aa@IYKMOG[@QLMVCZ@XJXId@gBdFUnAWdBGfA?bABnAb@~L?v@KLEPCN@PBNFJHJJDd@pHzBnNJp@Hj@\\pBJh@ZvBRvADZD\\Fh@T`BRhCDjA@|@@v@Cl@Gl@Oz@Oh@Af@GXQJKPEX?XDVST}C~C}BhCILSVQRSC[Au@AG?e@@IDKRMz@U`ASnAIb@WjA_@|@MTWd@_@r@Ub@?\\DXCZwAzEgA`Eu@vCg@~@APkAzBE?E?EBCDADAF?F@FSJEDi@f@@TH|CCXsA|CQ`AMp@ADt@H~@`@ZTRLLFZP`@VLBF?p@FXDLDd@XFDDDg@lB]|A?FFDp@Xv@^n@ZJDJYhAv@FMDI\\e@BGZg@PY~@cCN]`@oAN]HSVi@Rc@Tg@HOHQ\\q@FQDGj@sAf@mAVeAPu@ZeBXkBFm@BSLqAJeAHaBB{@DwABk@DoA?q@HaBBKFKDCDCDGBI?I?KAIEIAM?O@i@JkDHaDFqBB_@@SL_BXkC?M@M?OBMFULKJQDY?_@AGMYEEOI?U?Y^_BJw@@sACsAAu@E{@OoBa@eDCSESYeBeB_Lu@yEq@}Eg@eHNMHS@[EYMQOGAu@i@_M?oBDaBTeBXoAh@aBv@_BV[RIRCP@XFdAj@fB`Bt@l@rAt@xA`@x@VnG`Et@l@ZTh@x@Xp@Pf@Xb@`AjE~AlHtAfHf@bCfN~q@nFnXXxAjH~]J`@hGh[lHl^ZrAd@lBf@hBp@tBt@vB|AvDzA~C~AvCrA~Bv@pA~BnDpAfBlCnDhAtAtBvBrBvBzAxAxAnAfB|AjBxA|AhAfCfBnBrAzCjB`DpB~BnA~BjAdD`BhF~BxD~AnCfAjBr@HDlQtGvAh@dBn@xB~@jEjB~DvBhFnD~CbCxCjCzDxDzChDjEtFbE~FtJvNxVz^|DjFjBzBxDbEpBdB~BdB~BvAdBz@pBx@lCz@bDv@tEbAtEjArDpAvClAlB`A~A`A`BdAtAbArCzB`G|EnEvDhErDzHnFlOnJlF|C~DbCxA`AxAhA~BjB~BvBx@x@|D|DfFfFzCpC|C`C~B`BfCxAhCtA~DfBtDzA`ExAdCt@rCp@~AXbBX|Db@pCRxCR`Hf@|D\\rC^pAT|A\\nDx@nDhAbDlAnE`BfErAnBd@rB^xCZ|CJdD?bDShCWhCe@pGqAnGwAtGmAlDg@pAIxAIvCElCBbBL|@NtBXfAPnDr@fDh@rDf@vBLdC@jCG`DUbGw@pTkDxCg@VElMqBbGeA~D_AbF{AfCcArCmAdGkD~DuCrAkAvBkBhBeBnByBpBcCnBoCpE}GtE{GrAcBX]|AcBRSrBkB`CgBvBmA~BiAhBq@lBm@tEk@t@Gr@An@Dn@Ln@Zr@d@bAr@t@j@h@Zb@J^?ZMVUP_@H[Du@@iA?qC@qE@uBDcCCiCAO?Q@wBBsA?kAVoDBYDk@@k@A{@AKNq@LaALaCDqANsAvCcQt@sCHOJEJEZBHEHIHOFS@M?OEWIQOOQg@Eg@EaAGeDC{AAcAB_AHkAx@yHp@wF\\}BHk@^qBF]Hc@f@mCBSD[J_BFaAF{@LW@s@HwAX}G@m@BQJo@B[Fk@Fu@Fg@FUHWFc@SO?o@@c@Bi@@MLkAFYF@TXTNB@Mz@SES?W@ALCh@Ab@?n@RNGb@IVGTGf@Gt@Gj@CZKn@CPAl@Y|GIvAAr@MVGz@G`AK~AEZCRg@lCIb@G\\_@pBIj@]|Bq@vFy@xHIjAC~@@bABzAFdDEx@En@Mn@GJIXA\\BTCRId@e@zCwCbQOrAMxAMpAGdASlA_@bA?JBVF^LZB\\WnDOzAEz@?~B?N?PCjCCnBCdBI~@Or@Sf@]f@c@`@i@Tw@NmCR{Ed@}B`@wBp@qBl@eBn@_ChA_CrAcCfBwBnBk@l@gAhAg@p@gArAwE~GiErGqBpCmB`CmBxBcB`BwBlBwAjA}DrCkGlDmClAcC~@_FxAcEbA_GbAoMpBmIpAkC`@qKbB}Ft@}CVgCFeCCyBKmDc@gDk@mDq@sDk@_AMoBOoCGqA@sAByAFmAJkDh@sGjAqGvAoGrAe@HeBXs@HuAPyCNgD?}CKuC[oB[sBg@gEsAmEaBcDkAmDgAoD_AeB_@oASyCa@yD[cHg@uCQqCU{Dc@cBW_B[qCo@cCu@_EyAsDwAcEmBeCoAeC{AaC_B_DcCwCkCiFiFgCkCkBkBeC{BeCsBwAeAwA_A{DaC{J}FiDuBaEkCoI{FiEsDoEuDeGaFcF}DeBgAcBeAkB{@{CqAwDsAsEkAuEcAaDu@mC{@mBy@aBy@_CuA_CgBkBaByDaEoB_CyDiFoVk^IM_B_CuGwJaEyFiEwFaDwD}D}DyCgC{BgBe@_@gFgDeBaA}Ay@cF}BeFoByCeAoNgF}B{@_Bo@m@WkCeAqJmE_@k@iBcAm@g@_@k@Oe@K}@?y@JcATq@b@m@h@]l@OXAZAdAJlAd@|@n@n@n@p@fAf@rA\\tATlBDhBChBIrAKfA_B~QW|BQnB]nEu@`JSdCo@dKs@~LiA`S[vFs@tLq@rLi@xIQ~CW~DW|CYjC[zBg@tCq@rCq@vBi@fBi@rAaAvBm@jAkAtBsG`KmAtBoA~Bs@dBs@lB}@xCk@vB_@~Ac@jCa@vC[lDO|BKvCCvC?vCLjDThEVlC\\lCf@dDb@pCb@hCd@|C`@lDX`DPpCHdCB|C?jCKhDQpC_@~Dq@nGk@xFW`DQxDGlC?nCDnCHjCNdCTjCZtCb@|DbApIrBtQjAtJvAfMfA|IbA~Id@~DZ~CR~CNfDHvC?lDCnCKhEQ|EKtDGbEAhDBfCJdDNnCTvC\\vC^lCj@~Cp@zCj@zBd@vAn@nBtBpF|AzDdAnCv@|Bp@bCn@jCt@nDb@vCZrCTbCNbCLpCFxC@zCCtCEdCMrCMlBSvBc@pDe@xCg@jCs@xC}@|Co@xBkGnS_F|OwIfYiCnIaC|HcC`IgAlDoC|I}E~O_CtHiCpIwD~LcBlFmAbEm@pBm@tBe@fBw@rDq@vDe@|Ca@`DYvCYjDOtCKxCKxDOdNKxGMlHQxFMfDSlEWpE[vEYvDe@bFm@xFo@pFq@fFy@rFeCdOiA~Gm@|Dk@|Di@|E[lDWpDM`CMlCIfEEhCCrDB|DBpBFzBR`GRbGb@jKXvHRpGLhGL|GBtEBlEBbLA~KAhOCxSCtVChZAxQClKAdO?bN@pGBpEFlGF`DJxDNzDTtFTvDTnD`@xFZhEAx@RtDNlC@~@Az@G`AOv@Ux@Wj@[l@a@b@a@^c@TmBp@oBP{@PMBIBqDv@o@LUAQ?KDGDGLAHAVBLJRLFL?XN\\XbArArJpIzHrHjAbA\\ZfD~CPNbBzAhS|Q|WdUtCpC~@|@\\ZzBtBhAnAd@l@h@hAf@tA|@fE^zBUFIDWRYZQTg@ZqAn@gAd@]JYD[D{EO[C_@Bi@BaAL[By@?U?sAPUF_Ez@{HdBiEr@Q?UI[Qg@_@aAuAIIS?WHUVS^]d@e@f@a@Rc@FMAi@zNY`FQzD?tF@pBE|@s@dK]bEeAxH[vCGf@{@`Io@zFCtBJbBDlD@J]He@NAEIYEUAMAO?U@GFe@Da@VaERqCPuBNiB?y@p@yGh@{FVcDPiCLmBh@qIh@iLXaIJuDF}CLaIDoEBmE?cF?qFEoFGwFGgFIgDKqFMwEOaFOsDQkE_@wH??mAsSi@{Hm@}Hg@{Gq@uIMcBa@{FSeDU}DUyFIiBG_BIeDIiDGeGCsEAwG?_NB{M?iLBcRBiZBy[ByN@cO@cLAgLEgECaEKyHO}FSyGY{Hc@gKUaGS_GEyBCuBC}DBsDHeFFiBJkCLaCVqDZmDd@mEj@_En@cEfAuGRoAtBgMx@wFp@aFn@kFl@}Fd@cFX}DXmEX}EP{DLcDPmGNkHHyGRoNHaDJcDNsCVsDXuC`@}Cd@{Cr@uDr@eDd@iBl@}Bl@sBrAgE~AiFnAeE|AcFpCcJ`C}H~E{OzGwTz@sC`C}HfCgI~IuYxEuOxHaWbAqDn@sCh@kCd@{Cb@qDR{BLkBLuCHoC@qCAwCG}CMuCQiCS_C]sCe@}Cs@oDo@iCs@eCw@aCaAmC_B}DuBsFm@gBe@{Ak@wBs@cDi@yC_@kC[uCUwCOmCI}CCcC?eDFeELwDN}ELsEBsCAgDGsCOmDS{CYeDe@{DiAaJeA}I{AgMeA_JyBmRaAsIe@uD[}CSoCO{BIgCEoC?qCFmCPsDV}Ch@mFt@}G\\iERwCJ_D@iCAaDIoCOmCWcDc@oDg@{Cc@qCe@sCe@aD]gCWkCUgEKoD?oCBsCL{CNyBX_D^wCb@oC\\aBh@_C~@uCn@_Br@eBlAaCnAuBxA_CpDyFrAaCl@iAbAyBf@qAl@kBz@yC\\cBp@mDb@aDXyCTwCX_Fp@cLNmCb@mHVsE\\eGbByYp@kLp@oKPeCt@eJ\\cEPoBb@uErAkOHkAFqABmAAsAC{@I_AMy@UeA_@eAc@}@w@cA}@w@w@e@q@Uo@Mc@Eo@@{@Dm@Ls@RuCfAqATw@Fw@Cy@MeAc@cBmAoAi@qBgBsA_AiB_BsAiA{AuAsAsAaAaAeBqBuA_BcBwBg@y@_BoB{@oAoAsBkAqB}AsCmBaEkAuC{@_Cq@uBi@mBk@_C[sAwAeHYsAoAoGuA{GIc@mGs[I]qHe_@WoAiFqWo@cD{Lum@g@gCqAiGm@sCq@uCqA}FoAeFQm@_AiDwA_FcBqFwD_LsAwDq@mBwAmDa@gAyAcEcAoCoAyDuBkG_@mAwBoH}@gDoA}E}AyGmAgFuAgGyAaGqAcFuDqMqBoG_@iAu@oBwAeE}BaGiAoCy@oBeCuFuCgG_E{HgEuHgAgBmDuFaEcGoEcGiGwHoG_HaDgDsAoAuAsAiE{DyCiCkJgIkDcDkDgDsEsEgEwEmGwG_CuB}BiBaCgBwCiBe@WeB{@qCoAoFyBwCgAQG_@MmGyBmFmBmDyAoBy@_Ac@iAk@cBaAsAy@mAw@_CaBmDyCsAsAy@y@kCyC_C{CmBqCqBeD_ByCaAmBaAuBsA}CoAkDgAiDkBaHeAoEq@oDy@cFUeBm@iFYyCWuC[oEa@aHgAmScBi[k@gJUwCIaAUcCEc@{@}Hs@yF{@kFeA_GgAoFeAsEgAaEeAsDgAoDcAaDg@qAe@qAoC}GiCuFoCoFsAeCaBoCcEiGiF{GwDqEuKuL{L}M}@aAaAeAmLkMoKiLwEkFiDwDqGgHyDwEcDcEqD}EeD_FuGgKeKqPiEyGeFsHcAyAgA_BMOyByCkCaD{AiBwFgGwAwAiAgAiDyCiAaAuCaCeGmE_GyDgFwCeFiCqFmCoFaCeNcGsAk@{CmAqF_CqFeCqFiCsEcCy@g@eAm@eEkC{CsB_FwD{DcDeF}EiFsFiGwH_DiE{BcDaA}AsBcDmCyEgC_FmBaEiC}Fw@oBmAaD}BkGmCoIyByHcCaKkB}I}AgJq@oEw@uFWyBk@aFW}BQwBD}@EqABu@No@\\o@x@iARc@Lc@Bw@Gq@Me@Yc@a@_@i@MSA]@S@oBZUDe@Pk@Zc@h@e@h@Ut@Iz@CfABlBNrC`@`ET`BV~AVrANrABd@@r@CPKPI`@@f@S`@m@t@w@p@e@b@iAdAk@j@a@`@a@d@o@r@m@v@k@r@aAnA[d@m@x@a@n@a@p@c@t@a@r@SZo@dAo@`Ai@p@sCvDsElFaA~@cAx@uB`BmAz@mAx@oAp@qAp@}DjB_FxB}E~BsBfAkBjAcBlAcBpAcB~AcBbBoB`CgAxAgAbBoApBo@fAi@fA{AzC}@dBaBdEa@bAgAfCsAvC[h@UVc@VSDSBW@iB@a@De@N_@\\SZYv@_BlFSh@YTUBWAWQcB_As@k@y@g@aBo@cA[kFy@}@OMAUEQC_@GOE{@Qy@]i@Wi@Y_@W]We@c@e@i@q@{@sAcCgCiEeAoBSi@ISG[EWAI@U@O?MAQCKCGEIGEIGMAOGIEGIO]i@sAc@mAa@mAWg@a@qAyAkE[iAq@eBQWQc@c@oAWq@Ym@MSIKg@o@c@o@MSMUEIEOEOAQ?O?KBQJ{@TcBHOLOPCjD_@HO@EAKCECEICu@_@YMg@UMKGGQ]IQIWK]KYIIOo@kBmH_@_BIYC]AKCSAOCU@Q@QBQFSHSLST]NQX_@JUt@aADG\\i@^g@~ByCZe@FOD_@XkD?UAQCMEMGMGIKMKGaASoB_@w@Me@FmAl@YHI@UAe@_@MK_@e@c@e@GEKMBG?GCGCEG?C@CDMOCCSSo@u@MDIB{Bz@@A",
          			"legs": [
          				{
          					"summary": "",
          					"weight": 5819.2,
          					"duration": 1915.7,
          					"steps": [],
          					"distance": 23366.5
          				},
          				{
          					"summary": "",
          					"weight": 3066.1,
          					"duration": 2746.7,
          					"steps": [],
          					"distance": 53351.9
          				},
          				{
          					"summary": "",
          					"weight": 1429.9,
          					"duration": 1346.2,
          					"steps": [],
          					"distance": 25457.5
          				},
          				{
          					"summary": "",
          					"weight": 2350,
          					"duration": 2059.3,
          					"steps": [],
          					"distance": 46638.4
          				},
          				{
          					"summary": "",
          					"weight": 2382.1,
          					"duration": 2156.7,
          					"steps": [],
          					"distance": 55528.1
          				}
          			],
          			"weight_name": "routability",
          			"weight": 15047.3,
          			"duration": 10224.599999999999,
          			"distance": 204342.4
          		}
          ],
        	"waypoints": [
        		{
        			"hint": "NkkChPj4K4QHAgAAHgAAAAAAAAAAAAAAaBfnQSCryj8AAAAAAAAAAIEAAAAIAAAAAAAAAAAAAADSpAAAlxMxAHhVlQLsFDEA31WVAgAAHxV5qhm8",
        			"name": "",
        			"location": [
        				3.216279,
        				43.341176
        			]
        		},
        		{
        			"hint": "mrFGgTF0j4YCAAAANwAAAEEAAAAAAAAArgSaP9j_8UF9kxBCAAAAAAIAAAA3AAAAQQAAAAAAAADSpAAAkPk0AOTllALe-TQAGeaUAgEAjwh5qhm8",
        			"name": "Impasse du Glacis",
        			"location": [
        				3.47176,
        				43.312612
        			]
        		},
        		{
        			"hint": "Go4Sgf___39YAAAATAEAAJ0AAAAAAAAAVCiwQQ8Hb0HGQR1CAAAAAFgAAACmAAAAnQAAAAAAAADSpAAAL9ktAA_skgKZ1y0A1uqSAgQAXwh5qhm8",
        			"name": "Cours de la République",
        			"location": [
        				3.004719,
        				43.183119
        			]
        		},
        		{
        			"hint": "XKUng2SlJ4MEAAAAGQAAAAAAAAAAAAAAz5g3QPvnZEEAAAAAAAAAAAQAAAAZAAAAAAAAAAAAAADSpAAArnstAFeSkAIGfC0AN5KQAgAArwF5qhm8",
        			"name": "Rue des Pénitents",
        			"location": [
        				2.980782,
        				43.029079
        			]
        		},
        		{
        			"hint": "6b4EgP___38AAAAAwwAAAAAAAAC9AAAAAAAAADj6h0MAAAAA8FLJQwAAAABiAAAAAAAAAF4AAADSpAAAE8MpAAuykgITwykAC7KSAgAADwV5qhm8",
        			"name": "Autoroute des Deux Mers",
        			"location": [
        				2.736915,
        				43.168267
        			]
        		},
        		{
        			"hint": "NkkChPj4K4QHAgAAHgAAAAAAAAAAAAAAaBfnQSCryj8AAAAAAAAAAIEAAAAIAAAAAAAAAAAAAADSpAAAlxMxAHhVlQLsFDEA31WVAgAAHxV5qhm8",
        			"name": "",
        			"location": [
        				3.216279,
        				43.341176
        			]
        		}
        	],
        	"code": "Ok"
        },
        {
          "user":faker.helpers.userCard(),
          "roadInfo":{
            "title": faker.lorem.sentence(3),
            "description": faker.hacker.phrase(),
            "type": 3
          },
    	   "routes": [
        		{
        			"geometry": "m_clGondQ@iA@oB?gCUkGBaBR}AXyAj@_Cl@iBDO~@gCtAeCnAoB~AuCVQXKTGhCu@rBg@bEy@hAClCRjBNjB\\`DlApAd@dCl@v@?b@SR]L_@D{@C{AQmBg@_BkAoBiBiE}@oByAeCu@}@Y[e@m@c@y@]k@a@u@cA{Ba@gA]mAo@{Ck@mCYeBS_BWiAa@_AU_@]_@yAqAa@]c@]y@q@o@q@qAeBKSa@w@{@mBWk@c@oAG]Be@FsBBUTsA\\qAb@kA^_BL_@H[JUh@{ARq@Xw@f@oAl@aAlAsA`B_BdBsAvCyBx@u@l@w@j@}@`CgFlAqC`AyCp@eD|BoPLaAHy@F}@BoAAs@A[?SKqAKeA{AiLo@yEm@sEa@gCgAqEqCkLe@cBY{@e@mAw@}Aq@kAo@y@]a@g@e@oB}Au@m@k@[mCeAmA[s@a@cDoCsE{DwAiBmAiBs@cBo@}B[gBKs@Iq@C_@Ce@?g@@_@DgA`@sILwAHm@Ju@VmAT}@d@uATo@Xi@n@oAt@oAfAkBdAeB\\m@Vi@Pc@Pi@Ps@Hm@F}@By@@y@C_AGaAO{AoAuIWgCMyAGkAC}A@w@Bu@XmDRaBLu@VgARo@zAaDfBqD|@aCxBgGLk@Jw@V{BV_C\\{C`@mDh@uFDeADeB?YF]BQAQAQC]I_@Sq@Qc@SWYW]UWMw@Si@G}AGYI]M[Q]S]Wk@g@g@i@W]k@{@y@aBCEa@aAIg@@KAKFc@DU~@yAbAoB`@o@Zu@Ny@JaA@i@Bq@?i@C{@g@aEa@iDMy@YiAg@sAk@iAwAoCUs@Os@I]Qu@KYIQUEg@Cu@K_@UUWq@gAI]ASAi@HA@AFGBK?KAKzB_C\\YJIpEkEBEBCVUXWDG^_@t@u@p@o@b@U^IT?P@JPTDRKHQ@SAO?]@_@JW`@uADo@CgACm@Ii@G]Oq@Uy@]_Aa@kAGOSq@IWDO@KCUGQG]Ma@Ss@OoAEo@Cw@CwAC}BA}A?y@@k@DwADiABu@@k@Aa@?s@A]EqAGgCCe@Ec@Ga@Kc@Ka@Qa@Uc@_AyAQYKUCSCW?SB[DSLWNQRKdBg@RCRAPBLBLFLJLNLNJTF\\Ff@VvBH`@DRFPNTJLNJNFRDTB`A@X?J?N@XDb@JfBh@XNLLJNFPDR@T?VCTEPEJGLOLOHw@ZWNMJKLIPGRCVCX@ZBTFRFNHJLNLHNBN@NALCLINM`@c@z@}@ZYTMTOVKvAc@RKLKLOHQHUBWB[AWCWESKWMQQSq@q@aAcAs@wAEa@Oy@WyAAm@SkBKy@I]Mi@m@kBKe@CWAY?W@[FYNq@rAqE\\w@xA{BVe@JYDWDe@?[AYW}BG{@AY@_@Fg@F[FWLWJUz@wAP_@J_@BS@UAWCa@{BuKK_@MWOUSOECMGWISCS@a@F]LoB|@kD|ASHWDQ@W?QAQC{@KwAEQCQEOIQOMMOQISISGUa@sB]qBWmAsAaEIe@Km@QyAK}@GaAAg@@u@F}@^_CDg@@c@Am@KwDGaGI}J@c@Bc@Fa@J_@N[LUNURQzDsBj@UPSNSJYFWDY@_@?]Ea@G[K[OYSWkBaBsBoBi@e@_@Sa@O_@MSIQOOQMQIQKWIYIe@m@sEIc@Me@}@{Bm@{Ba@sBOy@Me@Qa@KUcBsBs@{@[e@O_@CSCe@Bc@F]P]X[`@Kt@IRI`BI`@AZAbA@`@Bj@DX?XATEZIVOdAw@l@a@`@S`@OXKZGZEd@CZA`@?`@B\\FXFdA^d@NVDR@VAXI`@O`E_CzCcB^QZMt@U~Cw@zAYZCb@CX?`@BZFt@TZNRPZX`AjAZZXTVNj@XrC`AnBr@hBt@r@V\\NTJ`@X^ZZ\\Zd@R`@Rf@HVJd@F^L~@PfCFx@`@vFdAdPNnBJhAHh@Jl@TjA^vAl@xAVb@\\j@X^`@d@x@z@dCbBxA|@bAf@n@Xh@R~@TdAJbA@z@Ah@Gz@Mt@QdHkBzEsAhD{@rSsF|LeDjBk@dAa@|@e@n@e@v@m@n@q@p@w@bDoEbVw\\jBkCjLaPpFwHvAcBfFcGtI{JhVyXFKbUmWzKiMzEqF~@iA`EuEnAsAnAiA`Aw@`Aq@|BgAhAc@jA[dAUfAObAIz@EvIKbMQzCIdHIbl@u@|A@x@Dx@LpA`@bAb@lA|@X^NNHHV\\V`@Vb@R`@Pb@Rf@Pl@V|@x@rCPp@Ld@Tn@N^Tf@Xh@P\\RZX`@\\b@d@j@r@n@x@j@b@Xb@R|@\\x@Td@J\\Dn@Df@@f@Ch@G^It@SjAc@t@Kv@AP?H@NFJTRPPBNAJEXRZ\\dAfBZr@BJBTAFAF?F?D?F@F@F@FBDBDDDBBDBF@D@HADADEBABCBEBGBG@I@I?GAG?ICG?]?QBUP}@Ns@Rw@Lg@V{@`@gA^aA`@w@v@aBtIsL`AsAzCeEvPsUtAqB~@wAjAqBx@wA`AoBx@gB`A_Cx@oBt@yBn@sBn@sBt@qCb@kBr@kDp@uD~@iGx@uF`AwGf@qCTkAb@oBd@kBf@oBl@uBr@{Bz@eC`AgClAsCjBuDjBgDnAoBrAmBt@eAx@aApBaCpAuAtFuFxVeWtI{I~FeGrEqExB_CtI{ItCyCdBsBxAqBzA{BlAmB|@eBvAyCb@eA`@aAn@eBjAoDb@{Ah@oBl@mCj@oC`@{BXoBl@sE`AuHf@}D^yBXcBR_A^cBd@eBh@kBn@kBf@sAbA_Cj@mAv@{An@eA`A{A|@oAnA_BvA}AlAiAlAcA~AkAjAs@rAu@hAi@bAc@bBi@|Bm@zA[hBW~BQ`CGlA?lCBjCDrCDvCAlCGtBQtC]z@O~Bg@bBe@pBq@tBw@~@c@x@a@fAi@dAo@x@i@z@m@dDkCfByAbBwAnK_JjYaV`CqBfEoDbLmJjR_PpYgVfPaNtp@qj@`Aw@~AwApAuAbAmAdAwA|@qAhAoBfAyBz@qBp@gBt@uBj@wBr@wCvAyG\\yA`@wA^sAb@sAj@wAj@qAd@aAtAcChBeCx@eAv@{@nAiAdAy@nA{@fAo@|@c@vCiA~Bs@lCw@fBq@dAe@dAi@p@c@hA{@bAw@|@}@t@w@dAqAz@mA`A_Br@qAv@_Bb@iAb@kAh@aBz@iDl@}CVeBZiCt@qGbB{Oh@sEVgB\\wBj@{Cd@wBh@{Bn@aCd@yAh@cBh@_Bx@qB~@{BrAoCfAoBlAuBvAsB~AuBhAuApAyAnAiAv@u@zAqAjAy@dAs@rBqApBeA|BaAdBo@lBm@zC}@tJ{CvCy@j@QrBw@`By@tBuAjB{A|BmCfAaBdAmB|@kBz@wBfAqDp@iDx@mFt@eGr@aFt@_D~@mCz@gB~@cBnDaF|@}A`AqBp@qBh@oBh@sCRkALoALcBHqBDsDBoCFgBJuBLoBPgBNkAl@mDp@wCn@_CbAoC~AoDrBkDpAcBbBkBtBgBfCcBhD_BnBs@tBo@hBa@fB]lAQbBQlBMpDMpEDvDZbD^nE`AfCr@pIvC|Bn@pCn@vDd@hDNlJNnEFbFJnA?fGRjBT`Dl@|Ab@jBt@`ChArBjArNpJzDnBzBx@hATx@J`AF`B@~BQrAWxAe@pBeAbBqAzAgBpAsBd@}@xA}Df@}An@qBj@sAzAyBvAoAv@g@z@a@xDqBnB}@~@Uv@Id@?d@Bj@Hh@P`@N`@V^V`@`@V\\bA~APVRPVT`@TbA`@PLTPX^NVXx@Xx@Rd@RXTXVRd@TfA\\ZPZRZVVX`BtBh@d@\\TVJXJXFb@F^?h@Al@Kd@Mb@Oh@Uj@]n@e@p@q@p@u@hAaBnBgDfHcN~CcEhD_DxDsB~@e@nAq@hAq@rAy@d@SpAk@fBq@dBm@l@Y^UZ[`@c@Xe@Vg@Ni@No@N}@XcCLo@Lm@Lc@L_@P]PYVYZU^QZKXC^?XB^FZJb@Tf@Xp@h@h@f@d@h@rAdBj@l@\\ZVNVJXFV@\\@f@G~@SxCu@h@Gl@En@B`@Bn@Nf@Nn@^j@X^P`@L\\DX@TARE\\K^S\\YXa@d@u@b@y@b@k@ZYTM\\M^EZAh@DhAX`@Df@Bb@A\\G^Md@S^WXQFIj@k@\\c@^u@`@eAT{@P{@Hs@Fs@Bq@@a@C}@C_AKsAKwACq@Cy@?y@Bm@Hs@Ns@Po@T_@RWV[`@Y\\QXI\\GZA`@BVD`@JVL^Xb@f@~@z@\\Z\\TZLd@Jf@Hb@@ZAd@GXIt@[d@_@tAyAl@i@\\Sb@OZC\\A\\DTH\\L\\VXRrAlAb@`@n@h@ZNb@V`@Rf@N^Ll@Lr@Hr@BpA?vAIpDe@t@Ip@AN?v@F|@Jr@Lp@Bx@At@GjAUdFeBnDkAz@Wl@Mn@I`@Af@C^?h@Dn@JhAXbAZv@Vj@Ll@Jx@Hp@@`@?d@A~CW~Da@pHw@`HaAtGcAzAU`AWx@Ux@[r@[fDkBhAm@p@W|@YpCm@lAUt@Wj@S~@c@vC}Av@]d@Qh@Md@Il@Gl@E`@?|EDl@Cl@Ej@Gf@Kh@Mr@Sh@Uv@_@p@c@l@e@h@i@j@k@zEwFhGmH`A_A|@o@bAo@~@c@n@Sj@M|@Oh@G`AK`BS~AQd@Ct@An@@\\BXFbAN~@Vb@Lj@Vd@Xp@d@h@f@b@d@d@j@t@fAtAxB`@p@d@l@`@d@\\`@d@b@f@^jAt@tA|@zAdA\\T\\Vl@h@rBrBbAdAh@b@h@\\j@Zn@Xr@Tj@Lh@J|@HpBH|J\\rBFhLRl@?|@Av@Gf@GdNuC|EeAlGsA|A[`@Gf@Gn@A~@At@Fh@FlCf@hALn@Dn@@dDIhAAfABdABvAFlA@hBA~A@|@Fr@HjAXtAh@`Aj@x@r@`Az@z@v@p@n@l@^j@Zr@Zz@XnATd@H~@FrABfAHb@FfAR~@XfAb@l@^`Ad@~@b@r@V~@Tp@FvALjAApAKrCYfAIr@GV?hA?lBPfBd@pFpBnAj@bAh@bA|@dAv@b@Xp@Zl@R`@Jj@Ln@Ht@FlBBhE@dF@nLDfJ@xUF|AA|@A`AGv@Iz@On@MbA[|@]fGuC~RuJxV}LlEuBdAm@jAu@jAaA|@_AnA{ArAyBh@iAl@sAd@uAV_AVcAXmAPcAPoAP{AHcANwBP{BLkALaA^aC\\}A\\mA^gA`@}@^w@d@y@j@{@f@q@p@w@r@o@`Aq@`Ak@p@_@`@G~Ao@jAYrCCd@DDRHLJFPBNEJOFO@YTo@Je@De@Ao@Ik@YgBKmBHiBb@mC|@yEx@{CnB{DzJ_QrJeQ~AuBbA_AhAw@|Am@n@a@b@e@X]RWTKd@EN?LGHIFQ@OAWHc@NYNEp@IXEnASvEk@v@Id@B\\PNLFJh@x@`A`BtB`EbD|FjDvGvBbElAlBRl@JjAClBGpBARa@La@d@qEhGg@z@UjAq@xCo@nBU^UPKDYJ_@JyAb@QDc@Jk@Hy@Dc@?[JSXEh@ChAIbASd@a@XSNOJWv@MlAKr@ILEHQJK@a@ASCo@Ka@As@J]Xg@d@m@Vm@Jy@J}@T{@f@}@l@o@h@u@|@s@bAWt@W|@QnAIj@Od@KPKLOPQf@I^KvAa@lAm@jAq@lAOb@Kl@Kv@Wv@q@tBm@tAa@t@c@f@g@t@Yj@e@rB_@bAa@b@u@n@u@l@g@l@XbCRnDPhBAr@BnA^`BZbBEp@Dh@b@dAf@vAPFZ@XBVDTHnApA|@l@FN?TEz@KpBGvBGrCGfACvAPj@Ur@kAx@{AvCWTq@\\w@f@k@l@a@n@]|@Wn@Kr@I^S^c@t@Qz@Mj@KVQ\\IZCP@t@CRIVOZMXi@bA_@hBOl@AZAZIRSTIRMf@Ml@[p@Mf@Y`AMj@C\\?XHj@Fl@DLn@n@ZV^HBRGFSEwB_AWSU_@K?J|@JZVZNJTJpBh@P?XE^QZGL?NBLJJTAZQ^e@h@u@bAOZKhAIbAFtA]v@IV@fABjAHRJL`@THJFX@rA@\\H\\^h@FP?b@I~@B\\TR`@NHVETQh@E^DTT^Zx@?XONe@HOXAr@Lr@\\pAf@dAt@fAlAj@PLJFNJRLJVNfAHh@Fh@xBFjFjDjEpChBvAHNJf@HPNL\\FzAFTDNJnEhET`@nGxQ|CbJd@xCy@zF",
        			"legs": [
        				{
        					"summary": "",
        					"weight": 4703.2,
        					"duration": 4527.8,
        					"steps": [],
        					"distance": 82616.3
        				}
        			],
        			"weight_name": "routability",
        			"weight": 4703.2,
        			"duration": 4527.8,
        			"distance": 82616.3
        		}
        	],
        	"waypoints": [
        		{
        			"hint": "CccFgRx16IYRAAAAGQAAAI4EAABtAQAAI6mjQZEV7kHsrMdE6R8FRBEAAAAZAAAAjgQAAG0BAACCpAAAsW0tAEnQoAILby0AeOKgAhgA3wU2SSuj",
        			"name": "Route de Montjaux à Meyruéis",
        			"location": [
        				2.977201,
        				44.093513
        			]
        		},
        		{
        			"hint": "5LsSgsD4D4RVAAAAYgAAADwUAAAAAAAAWRa5QqE61UKZX4FFAAAAAFUAAABiAAAAjBEAAAAAAACCpAAAFz8yAA-MmgJZQTIAGZGaAq4AvwY2SSuj",
        			"name": "",
        			"location": [
        				3.292951,
        				43.682831
        			]
        		}
        	],
        	"code": "Ok"
        }
  ],
  mutations:{

  },
  getters: {
    getRoads: (state) => {
      return state;
    },
    filterByType: (state) => (type) => {
      return (type !== 0 ) ? state.filter((item) => item.roadInfo.type == type) : state
    }
  },
  actions:{
    setActive(context, road){

    }
  }
}
