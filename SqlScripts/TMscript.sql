USE [TMS_DB]
GO
/****** Object:  Table [dbo].[Customer]    Script Date: 15-07-2018 11:44:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customer](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](100) NOT NULL,
	[LastName] [nvarchar](100) NOT NULL,
	[Email] [nvarchar](200) NOT NULL,
	[IdentityCard] [nvarchar](50) NOT NULL,
	[UniqueKey] [uniqueidentifier] NOT NULL,
	[DateOfBirth] [datetime] NOT NULL,
	[Mobile] [nvarchar](10) NULL,
	[RegistrationDate] [datetime] NOT NULL,
 CONSTRAINT [PK_dbo.Customer] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[CustomerMaster]    Script Date: 15-07-2018 11:44:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[CustomerMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](200) NULL,
	[Address] [nvarchar](max) NULL,
	[EmailId] [nvarchar](100) NULL,
	[PhoneNumber] [bigint] NULL,
	[AlternatePhoneNumber] [bigint] NULL,
	[FaxNumber] [bigint] NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
 CONSTRAINT [PK_CustomerMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[CustomerTypeMaster]    Script Date: 15-07-2018 11:44:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[CustomerTypeMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](200) NULL,
	[Description] [varchar](500) NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
 CONSTRAINT [PK_CustomerTypeMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[LocationMaster]    Script Date: 15-07-2018 11:44:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[LocationMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NULL,
	[Description] [varchar](200) NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
 CONSTRAINT [PK_LocationMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[MST_LookUps]    Script Date: 15-07-2018 11:44:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MST_LookUps](
	[LookUpType] [nvarchar](50) NOT NULL,
	[LookUpName] [nvarchar](200) NOT NULL,
	[LookUpValue] [int] NOT NULL,
	[LookUpValueStr] [nvarchar](200) NULL,
	[DisplayOrder] [int] NOT NULL,
	[IsActive] [bit] NULL,
 CONSTRAINT [PK_LookUp] PRIMARY KEY CLUSTERED 
(
	[LookUpType] ASC,
	[LookUpName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[PosMaster]    Script Date: 15-07-2018 11:44:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[PosMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
 CONSTRAINT [PK_PosMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[ProductCategoryMaster]    Script Date: 15-07-2018 11:44:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[ProductCategoryMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](200) NULL,
	[Description] [varchar](500) NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
	[Prod_Grp_Id] [int] NULL,
 CONSTRAINT [PK_ProductCategoryMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[ProductGroupMaster]    Script Date: 15-07-2018 11:44:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[ProductGroupMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](200) NULL,
	[Description] [varchar](500) NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
 CONSTRAINT [PK_ProductGroupMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[ProductMaster]    Script Date: 15-07-2018 11:44:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[ProductMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](200) NULL,
	[Description] [varchar](500) NULL,
	[ImageURI] [nvarchar](500) NULL,
	[GRNCode] [nvarchar](200) NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
	[Prod_Cat_Id] [int] NULL,
 CONSTRAINT [PK_ProductMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[PurchaseDetailMaster]    Script Date: 15-07-2018 11:44:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PurchaseDetailMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[PurchaseId] [int] NULL,
	[ProductId] [int] NULL,
	[UomId] [int] NULL,
	[Quantity] [nvarchar](200) NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
 CONSTRAINT [PK_PurchaseDetail] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[PurchaseMaster]    Script Date: 15-07-2018 11:44:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PurchaseMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[PurchaseDate] [datetime] NULL,
	[Status] [int] NULL,
	[IsActive] [int] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
	[Supplier_Id] [int] NULL,
 CONSTRAINT [PK_PurchaseMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[SalesDetail]    Script Date: 15-07-2018 11:44:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SalesDetail](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[SalesId] [int] NULL,
	[Quantity] [nvarchar](200) NULL,
	[ProductId] [int] NULL,
	[UOMId] [int] NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
 CONSTRAINT [PK_SalesDetail] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[SalesMaster]    Script Date: 15-07-2018 11:44:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SalesMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[PosId] [int] NULL,
	[UserId] [int] NULL,
	[CustomerId] [int] NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
	[SalesDate] [datetime] NULL,
 CONSTRAINT [PK_SalesMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[StoreMaster]    Script Date: 15-07-2018 11:44:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[StoreMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[PurchaseDetailId] [int] NULL,
	[LocationId] [int] NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
 CONSTRAINT [PK_StoreMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[SupplierMaster]    Script Date: 15-07-2018 11:44:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[SupplierMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](200) NULL,
	[Address] [nvarchar](max) NULL,
	[EmailId] [nvarchar](100) NULL,
	[PhoneNumber] [bigint] NULL,
	[AlternatePhoneNumber] [bigint] NULL,
	[FaxNumber] [bigint] NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
 CONSTRAINT [PK_SupplierMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[SupplierTypeMaster]    Script Date: 15-07-2018 11:44:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[SupplierTypeMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](200) NULL,
	[Description] [varchar](500) NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
 CONSTRAINT [PK_SupplierTypeMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[UnitOfMeasurementMaster]    Script Date: 15-07-2018 11:44:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[UnitOfMeasurementMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](200) NULL,
	[Description] [varchar](500) NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
 CONSTRAINT [PK_UnitOfMeasurementMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  StoredProcedure [dbo].[Usp_CreateProductGroup]    Script Date: 15-07-2018 11:44:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE Proc [dbo].[Usp_CreateProductGroup](
@Name varchar(200),
@Description varchar(500),
@IsActive int,
@CreatedBy int,
@CreatedDate datetime,
@ModifiedBy int,
@ModifiedDate datetime,
@Myout int OUTPUT
)
As
Begin
	Insert Into ProductGroupMaster(Name,Description,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate)
	values(@Name,@Description,@IsActive,@CreatedBy,@CreatedDate,@ModifiedBy,@ModifiedDate)
	SET @Myout = @@IDENTITY 
End
GO
/****** Object:  StoredProcedure [dbo].[Usp_GetAllProductCategory]    Script Date: 15-07-2018 11:44:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Usp_GetAllProductCategory]
As
Begin

select pcm.Id,pcm.Name,pcm.Description,pcm.IsActive,pcm.CreatedBy,pcm.CreatedDate,
pcm.ModifiedBy,pcm.ModifiedDate,pgm.Name as ProductGroupName,pgm.Id as GroupId from ProductCategoryMaster pcm 
inner join ProductGroupMaster pgm 
on pgm.Id = pcm.Prod_Grp_Id
where pcm.IsActive = 1

End
GO
/****** Object:  StoredProcedure [dbo].[Usp_GetAllProducts]    Script Date: 15-07-2018 11:44:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE  proc [dbo].[Usp_GetAllProducts]
As
Begin
 select p.Id,p.Name,p.Description,p.ImageURI,p.GRNCode,p.IsActive,
 p.CreatedBy,p.CreatedDate,p.ModifiedBy,p.ModifiedDate,p.Prod_Cat_Id,
 pc.Name as ProductCategoryName,pc.Id as Prod_Cat_Id from ProductMaster p
 inner join ProductCategoryMaster pc on pc.Id = p.Prod_Cat_Id
 
 where p.IsActive=1
End
GO
/****** Object:  StoredProcedure [dbo].[Usp_GetAllPurchase]    Script Date: 15-07-2018 11:44:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Usp_GetAllPurchase]
As
Begin
 select p.Id,p.PurchaseDate,p.Status,p.IsActive,p.CreatedBy,p.CreatedDate,p.ModifiedBy,p.ModifiedDate,
 sp.Name as SupplierName ,sp.Id as Supplier_Id from PurchaseMaster p 
 inner join SupplierMaster sp on  sp.Id =p.Supplier_Id
 where p.IsActive=1 and sp.IsActive=1
End
GO
/****** Object:  StoredProcedure [dbo].[Usp_GetProductGroup]    Script Date: 15-07-2018 11:44:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create proc [dbo].[Usp_GetProductGroup]
As
Begin
select pg.Name,pg.Id,pg.Description,pg.CreatedDate,pg.IsActive,pg.ModifiedDate,pg.ModifiedBy,pg.CreatedBy,
u.Username,u.Email from ProductGroupMaster pg
inner join [dbo].[User] u on pg.CreatedBy = u.ID 
End
GO
/****** Object:  StoredProcedure [dbo].[USP_PurchaseFormPopulate]    Script Date: 15-07-2018 11:44:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[USP_PurchaseFormPopulate]
as 
begin
select loc.Name as LocationName,loc.Id as LocationId

from StoreMaster sm

inner join LocationMaster loc on loc.Id = sm.LocationId

where sm.IsActive = 1 and loc.IsActive=1


select distinct  sup.Id as SupplierId,sup.Name as SupplierName from PurchaseMaster pm

inner join SupplierMaster sup on sup.Id = pm.Supplier_Id

where sup.IsActive = 1 and pm.IsActive=1


select uom.Name as UOMName,uom.Id as UOMId from PurchaseMaster pur

inner join PurchaseDetailMaster pdm  on pdm.PurchaseId = pur.Id

inner join UnitOfMeasurementMaster uom on uom.Id = pdm.UomId

where pdm.IsActive = 1 and uom.IsActive=1 and pur.IsActive = 1



select pm.Name as ProductName, pm.Id as ProductId from PurchaseMaster pur 

inner join PurchaseDetailMaster pdm  on pdm.PurchaseId = pur.Id

inner join ProductMaster pm on pm.Id = pdm.ProductId

where pdm.IsActive = 1 and pm.IsActive=1 and pur.IsActive = 1
 

end 

GO
/****** Object:  StoredProcedure [dbo].[USP_PurchaseFormSave]    Script Date: 15-07-2018 11:44:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[USP_PurchaseFormSave]
(
@PurchaseDate dateTime,
@Status int,
@IsActive int,
@CreatedBy int,
@CreatedDate dateTime,
@ModifiedBy int,
@ModifiedDate dateTime,
@Supplier_Id int,
@ProductId int ,
@UomId int,
@Quantity nvarchar(200),
@LocationId int
)
as
begin
 insert into PurchaseMaster(PurchaseDate,Status,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate,Supplier_Id)
 values(@PurchaseDate,@Status,@IsActive,@CreatedBy,@CreatedDate,@ModifiedBy,@ModifiedDate,@Supplier_Id)


 declare @purchaseId int;
 SELECT @purchaseId = SCOPE_IDENTITY();

 INSERT INTO  PurchaseDetailMaster(purchaseId, ProductId,UomId,Quantity,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate)
 VALUES (@purchaseId, @ProductId,@UomId,@Quantity,1,@CreatedBy,@CreatedDate,@ModifiedBy,@ModifiedDate);



 declare @PurchaseDetailId int;
 SELECT @PurchaseDetailId= SCOPE_IDENTITY();

 insert into StoreMaster(PurchaseDetailId,LocationId,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate)
 values (@PurchaseDetailId,@LocationId,@IsActive,@CreatedBy,@CreatedDate,@ModifiedBy,@ModifiedDate)

end










GO
/****** Object:  StoredProcedure [dbo].[USP_PurchaseReport]    Script Date: 15-07-2018 11:44:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[USP_PurchaseReport]
as
begin

select PM1.Name ProductName,SM.Name SupplierName,PDM.Quantity,UOM.Name UOMName,
LM.Name LocationName,PM.PurchaseDate from PurchaseMaster PM
Inner Join SupplierMaster SM on PM.Supplier_Id= SM.Id
Inner Join PurchaseDetailMaster PDM on PDM.PurchaseId= PM.Id
Inner Join ProductMaster PM1 on PM1.Id= PDM.ProductId
Inner Join UnitOfMeasurementMaster UOM on UOM.Id=PDM.UomId
Inner Join StoreMaster SM1 on SM1.PurchaseDetailId=PDM.Id
Inner Join LocationMaster LM on LM.Id=SM1.LocationId
--where PM1.IsActive=1 and SM.IsActive=1 and PDM.IsActive=1 and UOM.IsActive=1 and LM.IsActive=1 and PM.IsActive=1

end
GO
/****** Object:  StoredProcedure [dbo].[USP_SalesMaster]    Script Date: 15-07-2018 11:44:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create proc [dbo].[USP_SalesMaster]
As
Begin

select pm.Name as ProductName, pm.Id as ProductId from SalesMaster sm 

inner join SalesDetail sd  on sd.SalesId = sm.Id

inner join ProductMaster pm on pm.Id = sd.ProductId

where sd.IsActive = 1 and pm.IsActive=1 and sm.IsActive = 1

 

End

GO
/****** Object:  StoredProcedure [dbo].[USP_SalesReports]    Script Date: 15-07-2018 11:44:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[USP_SalesReports]

As
Begin
Select pm.Name ProductName,cm.Name CustomerName,uom.Name UOMName,p.Name POSName,sd.Quantity,sm.SalesDate from SalesMaster sm

inner join SalesDetail sd on sd.SalesId = sm.Id

inner join CustomerMaster cm on cm.Id = sm.CustomerId

inner join ProductMaster pm on pm.Id = sm.PosId

inner join UnitOfMeasurementMaster uom on uom.Id = sd.UOMId

inner join PosMaster p on p.Id = sm.PosId


End

GO
