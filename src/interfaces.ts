export interface IData {
    welcome: IDataWelcome;
    projects?: IDataProject[];
    socials?: IDataSocial[];
    contactBlogs?: IDataProjectsBlog[];
}

export interface IImageFile {
    name: string;
    type: string;
    alt: string;
}



// Welcome
export interface IDataWelcome {
    title: string;
    frontImage?: IImageFile;
    blogs?: IDataProjectsBlog[];
}



// PROJECTS
export interface IDataProject {
    id: GUID;
    path: string;
    name: string;
    fullWidth?: boolean;
    description?: string;
    thumbnailFile?: IImageFile;
    iframe?: {  
        src: string;
    };
    asides?: IDataProjectsBlog[];
    blogs?: IDataProjectsBlog[];
}

export interface IDataProjectLink {
    href: string;
    btnText: string;
}

export interface IDataProjectsBlog {
    title?: string;
    thumbnailFile?: IImageFile;
    paragraphs?: string[];
    links?: IDataProjectLink[];
    chatBubble?: boolean;
    createdAt?: string;
    updatedAt?: string;
}


// SOCIALS
export interface IDataSocial {
    ikon: IImageFile;
    href: string;
}


