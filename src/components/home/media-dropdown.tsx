import React from "react";

const MediaDropdown = () => {

	return (
		<div>
			<input
				type='file'
				ref={imageInput}
				accept='image/*'
				onChange={(e) => setSelectedImage(e.target.files![0])}
				hidden
			/>

			<input
				type='file'
				ref={videoInput}
				accept='video/mp4'
				onChange={(e) => setSelectedVideo(e.target?.files![0])}
				hidden
			/>

			{selectedImage && (
				<MediaImageDialog
					isOpen={selectedImage !== null}
					onClose={() => setSelectedImage(null)}
					selectedImage={selectedImage}
					isLoading={isLoading}
					handleSendImage={handleSendImage}
				/>
			)}

			{selectedVideo && (
				<MediaVideoDialog
					isOpen={selectedVideo !== null}
					onClose={() => setSelectedVideo(null)}
					selectedVideo={selectedVideo}
					isLoading={isLoading}
					handleSendVideo={handleSendVideo}
				/>
			)}

			<DropdownMenu>
				<DropdownMenuTrigger>
					<Plus className='text-gray-600 dark:text-gray-400' />
				</DropdownMenuTrigger>

				<DropdownMenuContent>
					<DropdownMenuItem onClick={() => imageInput.current!.click()}>
						<ImageIcon size={18} className='mr-1' /> Photo
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => videoInput.current!.click()}>
						<Video size={20} className='mr-1' />
						Video
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default MediaDropdown;