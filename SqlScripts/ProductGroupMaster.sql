USE [TMS_DB]
GO
/****** Object:  Table [dbo].[ProductGroupMaster]    Script Date: 7/7/2018 10:20:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
SET IDENTITY_INSERT [dbo].[ProductGroupMaster] ON 

INSERT [dbo].[ProductGroupMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (1, N'electronics', N'Electronics launched an OLED TV in 2013 and 65-inch and 77-inch sizes in 2018', 0, 1, CAST(N'2018-07-07T15:08:03.773' AS DateTime), 1, CAST(N'2018-07-07T15:23:29.437' AS DateTime))
INSERT [dbo].[ProductGroupMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (2, N'Tv&applience', N'Electronics launched an OLED TV in 2013 and 65-inch and 77-inch sizes in 2018', 0, 1, CAST(N'2018-07-07T15:09:07.030' AS DateTime), 1, CAST(N'2018-07-07T15:09:07.030' AS DateTime))
INSERT [dbo].[ProductGroupMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (3, N'MobileElectronics', N'Electronics launched an resistances and diode and capacitors', 0, 1, CAST(N'2018-07-07T15:47:33.010' AS DateTime), 1, CAST(N'2018-07-07T15:47:33.010' AS DateTime))
INSERT [dbo].[ProductGroupMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (4, N'Laptopes', N'Offers applicable on all Inspiron Notebooks, XPS Notebooks, Desktops & All In Ones.', 0, 1, CAST(N'2018-07-07T15:51:02.363' AS DateTime), 1, CAST(N'2018-07-07T15:51:02.363' AS DateTime))
INSERT [dbo].[ProductGroupMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (5, N'dell Laptopes', N'Offers applicable on all Inspiron Notebooks, XPS Notebooks, Desktops & All In Ones.', 0, 1, CAST(N'2018-07-07T15:56:14.330' AS DateTime), 1, CAST(N'2018-07-07T15:56:14.330' AS DateTime))
INSERT [dbo].[ProductGroupMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (6, N'lenovo Laptopes', N'Offers applicable on all Inspiron Notebooks, XPS Notebooks, Desktops & All In Ones.', 0, 1, CAST(N'2018-07-07T15:57:08.100' AS DateTime), 1, CAST(N'2018-07-07T15:57:08.100' AS DateTime))
INSERT [dbo].[ProductGroupMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (7, N'Electronics', N'erftghyjklcvbnm', 0, 1, CAST(N'2018-07-07T16:07:59.867' AS DateTime), 1, CAST(N'2018-07-07T19:50:58.147' AS DateTime))
INSERT [dbo].[ProductGroupMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (8, N'car electronics', N'Charge both your phone or tablet on the go or share a charging port with your co-passenger', 0, 1, CAST(N'2018-07-07T16:12:19.513' AS DateTime), 1, CAST(N'2018-07-07T20:10:38.667' AS DateTime))
INSERT [dbo].[ProductGroupMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (9, N'clocks', N' 
This Wall Clock is a Unique design to decorate your wall offer a superlative way to place time on the wall.', 0, 1, CAST(N'2018-07-07T16:14:38.267' AS DateTime), 1, CAST(N'2018-07-07T16:14:38.267' AS DateTime))
INSERT [dbo].[ProductGroupMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (10, N'mobiles', N'A mobile phone (also known as a wireless phone, cell phone, or cellular telephone) is a small portable radio telephone. The mobile phone can be used to communicate over long distances without wires.', 0, 1, CAST(N'2018-07-07T18:53:08.863' AS DateTime), 1, CAST(N'2018-07-07T18:53:08.863' AS DateTime))
INSERT [dbo].[ProductGroupMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (11, NULL, NULL, 0, 1, CAST(N'2018-07-07T18:53:17.060' AS DateTime), 1, CAST(N'2018-07-07T18:53:17.060' AS DateTime))
INSERT [dbo].[ProductGroupMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (12, N'juyhgtfrdesw', N'sdfghjkl;', 0, 1, CAST(N'2018-07-07T19:39:37.923' AS DateTime), 1, CAST(N'2018-07-07T19:39:37.923' AS DateTime))
INSERT [dbo].[ProductGroupMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (13, NULL, NULL, 0, 1, CAST(N'2018-07-07T19:39:46.703' AS DateTime), 1, CAST(N'2018-07-07T19:39:46.703' AS DateTime))
INSERT [dbo].[ProductGroupMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (14, N'car electronics', N'Charge both your phone or tablet on the go or share a charging port with your co-passenger', 0, 1, CAST(N'2018-07-07T20:06:03.100' AS DateTime), 1, CAST(N'2018-07-07T20:06:03.100' AS DateTime))
INSERT [dbo].[ProductGroupMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (15, N'ret', N'rewter', 0, 1, CAST(N'2018-07-07T20:06:06.240' AS DateTime), 1, CAST(N'2018-07-07T20:06:06.240' AS DateTime))
INSERT [dbo].[ProductGroupMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (16, N'rewt', N'rew', 0, 1, CAST(N'2018-07-07T20:06:08.587' AS DateTime), 1, CAST(N'2018-07-07T20:06:08.587' AS DateTime))
INSERT [dbo].[ProductGroupMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (17, N'rwere', N'wreerre', 0, 1, CAST(N'2018-07-07T20:06:11.500' AS DateTime), 1, CAST(N'2018-07-07T20:06:11.500' AS DateTime))
INSERT [dbo].[ProductGroupMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (18, N'erwtw', N'ewre', 0, 1, CAST(N'2018-07-07T20:06:14.470' AS DateTime), 1, CAST(N'2018-07-07T20:06:14.470' AS DateTime))
INSERT [dbo].[ProductGroupMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (19, N'rewt', N'rewt', 0, 1, CAST(N'2018-07-07T20:06:27.503' AS DateTime), 1, CAST(N'2018-07-07T20:06:27.503' AS DateTime))
INSERT [dbo].[ProductGroupMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (20, N'rwere', N'rwewrewrewre', 0, 1, CAST(N'2018-07-07T20:06:30.927' AS DateTime), 1, CAST(N'2018-07-07T20:06:30.927' AS DateTime))
INSERT [dbo].[ProductGroupMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (21, N'wrewrerwerwe', N'wreewrrewrere', 0, 1, CAST(N'2018-07-07T20:06:35.507' AS DateTime), 1, CAST(N'2018-07-07T20:06:35.507' AS DateTime))
INSERT [dbo].[ProductGroupMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (22, N'retrrte', N'rewwretrtr', 0, 1, CAST(N'2018-07-07T20:06:41.270' AS DateTime), 1, CAST(N'2018-07-07T20:06:41.270' AS DateTime))
INSERT [dbo].[ProductGroupMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (23, NULL, N'we', 0, 1, CAST(N'2018-07-07T20:06:50.833' AS DateTime), 1, CAST(N'2018-07-07T20:06:50.833' AS DateTime))
INSERT [dbo].[ProductGroupMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (24, N'erwtrewt', N'wrerwere', 1, 1, CAST(N'2018-07-07T20:06:54.103' AS DateTime), 1, CAST(N'2018-07-07T20:19:18.980' AS DateTime))
INSERT [dbo].[ProductGroupMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (25, N'fh', N'gdh', 1, 1, CAST(N'2018-07-07T20:08:18.810' AS DateTime), 1, CAST(N'2018-07-07T20:19:23.610' AS DateTime))
INSERT [dbo].[ProductGroupMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (26, N'dfdg', N'fgsfd', 1, 1, CAST(N'2018-07-07T20:18:07.940' AS DateTime), 1, CAST(N'2018-07-07T20:18:07.940' AS DateTime))
INSERT [dbo].[ProductGroupMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (27, N'fdsgf', N'fdsgsdf', 1, 1, CAST(N'2018-07-07T20:18:10.717' AS DateTime), 1, CAST(N'2018-07-07T20:18:10.717' AS DateTime))
INSERT [dbo].[ProductGroupMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (28, N'sdfgf', N'fdssfd', 1, 1, CAST(N'2018-07-07T20:18:13.993' AS DateTime), 1, CAST(N'2018-07-07T20:18:13.993' AS DateTime))
INSERT [dbo].[ProductGroupMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (29, N'erwtrewtfds', N'wrerwerefdgf', 1, 1, CAST(N'2018-07-07T20:18:32.203' AS DateTime), 1, CAST(N'2018-07-07T20:18:32.203' AS DateTime))
INSERT [dbo].[ProductGroupMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (30, N'erwtrewt', N'wrerwerefgsfgfg', 1, 1, CAST(N'2018-07-07T20:18:48.793' AS DateTime), 1, CAST(N'2018-07-07T20:18:48.793' AS DateTime))
INSERT [dbo].[ProductGroupMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (31, N'test', N'testtesttesttesttesttest', 1, 1, CAST(N'2018-07-07T20:19:05.090' AS DateTime), 1, CAST(N'2018-07-07T20:19:05.090' AS DateTime))
INSERT [dbo].[ProductGroupMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (32, N'lkjhgf', N'xcvdfghj', 1, 1, CAST(N'2018-07-07T21:39:42.533' AS DateTime), 1, CAST(N'2018-07-07T21:39:42.533' AS DateTime))
SET IDENTITY_INSERT [dbo].[ProductGroupMaster] OFF
